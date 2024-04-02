const createError = require("http-errors");
const { validationResult } = require("express-validator");
const url = require("url");
const Post = require("../models/postModel");
const {
  uploadSingleImage,
  uploadMultipleImage,
  fileDeleteAwsS3,
  initilizeAwsS3,
  deleteMultipleImage,
} = require("../middlewares/fileUpload");
const GalleryImage = require("../models/galleryImageModel");
const User = require("../models/userModel");

/*
  @api:       GET /api/posts?user={user}&limit={limit}
  @desc:      get all recent posts
  @access:    private
*/
const getPosts = async (req, res, next) => {
  try {
    const { user, limit } = url.parse(req.url, true).query;

    const posts = await Post.find({
      isActive: true,
      user: { $ne: user },
    })
      .sort({ createdAt: "desc" })
      .limit(limit);

    res.status(200).json({ posts });
  } catch (err) {
    const error = createError(500, "No Posts Found");
    next(error);
  }
};

/*
  @api:       GET /api/posts/:id
  @desc:      get a post by its Id
  @access:    private
*/
const getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)
      .select("-__v")
      .populate(
        "user",
        "-password -isAdmin -isVerified -resetToken -resetTokenExpiry -__v"
      );

    if (post) {
      res.status(200).json({ post });
    } else {
      const error = createError(404, "No Post Found");
      next(error);
    }
  } catch (err) {
    const error = createError(500, "No Post Found");
    next(error);
  }
};

/*
  @api:       GET /api/posts/user/:id
  @desc:      get all posts by a user
  @access:    public
*/
const getPostsByUser = async (req, res, next) => {
  try {
    const postsByUser = await Post.find({ user: req.params.id })
      .select("-user -__v")
      .sort({ updatedAt: "desc" });
    res.status(200).json({ postsByUser });
  } catch (err) {
    const error = createError(500, "No User/Post Found");
    next(error);
  }
};

/*
  @api:       POST /api/posts/
  @desc:      Create a new post
  @access:    private
*/
const createPost = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    const { title, description, category } = req.body;

    const images = req?.files ? await uploadMultipleImage(req.files) : null;

    const newPost = new Post({
      title,
      description,
      category,
      images,
      user: req.user.id,
    });
    const createdNewPost = await newPost.save();

    res
      .status(201)
      .json({ message: "Post created successfully", post: createdNewPost });
  } catch (err) {
    const error = createError(500, err.message);
    next(error);
  }
};

/*
  @api:       PATCH /api/posts/:id
  @desc:      Edit a post
  @access:    private
*/
const editPost = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    const { title, description, image: imageStringArray = [] } = req.body;

    const uploadedImagesArray = req?.files
      ? await uploadMultipleImage(req.files)
      : null;

    const post = await Post.findById(req.params.id);

    if (post) {
      if (post.user.toString() === req.user.id) {
        const updatedPost = await post
          .updateOne({
            title,
            description,
            images: [...imageStringArray, ...uploadedImagesArray],
          })
          .exec();

        res.status(201).json({
          message: "Post edited successfuly",
          updatedPost,
        });
      } else {
        res.status(401).json({
          message: "Post edit failed",
        });
      }
    } else {
      res.status(400).json({
        message: "Post edit failed as post not found",
      });
    }
  } catch (error) {
    const err = createError(500, "Error Occured");
    next(err);
  }
};

/*
  @api:       DELETE /api/posts/:id
  @desc:      Delete a post
  @access:    private
*/
const deletePost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);

    if (post) {
      if (post.user.toString() === req.user.id) {
        const deletePost = await Post.deleteOne({ _id: postId });

        if (deletePost.deletedCount === 1) {
          post.images && (await deleteMultipleImage(post.images));

          res.status(200).json({
            message: "Post deletion successful",
            postId,
          });
        } else {
          res.status(400).json({
            message: "Post deletion failed",
          });
        }
      } else {
        res.status(401).json({
          message: "Post deletion failed",
        });
      }
    } else {
      res.status(400).json({
        message: "Post delete failed as post not found",
      });
    }
  } catch (err) {
    const error = createError(400, err.message);
    next(error);
  }
};

/*
  @api:       GET /api/posts/getLearningFileStructure/:category
  @desc:      get Learning File Structure
  @access:    private
*/
const getLearningFileStructure = async (req, res, next) => {
  try {
    const category = req.params.category;

    const s3 = initilizeAwsS3();

    const params = {
      Bucket: "kuetianshub-bucket",
      Prefix: `files/${category}/`,
    };

    let allKeys = [];

    const getAllObjects = async (params) => {
      const fileObjects = await s3.listObjectsV2(params).promise();

      allKeys.push(...fileObjects.Contents);

      if (fileObjects.IsTruncated) {
        params.ContinuationToken = fileObjects.NextContinuationToken;
        await getAllObjects(params);
      }
    };

    await getAllObjects(params);

    const data = allKeys.map((content) => {
      return content.Key.split("/").slice(2);
    });

    const root = { type: "root", contents: [] };

    data.forEach((item) => {
      let currentLevel = root.contents;
      item.forEach((name, index) => {
        const existingFolder = currentLevel.find(
          (folder) => folder.name === name && folder.type === "subFolder"
        );

        if (index === item.length - 1) {
          name &&
            currentLevel.push({
              type: "file",
              name,
              url: encodeURI(
                `${
                  process.env.FRONTEND_CLOUD_IMAGE_URL
                }/files/${category}/${item.join("/")}`
              ),
            });
        } else {
          if (existingFolder) {
            currentLevel = existingFolder.contents;
          } else {
            const newFolder = { type: "subFolder", name, contents: [] };
            currentLevel.push(newFolder);
            currentLevel = newFolder.contents;
          }
        }
      });
    });

    res.status(200).json({ files: root.contents });
  } catch (err) {
    const error = createError(500, "Error occured");
    next(error);
  }
};

/*
  @api:       GET /api/posts/getGalleryImages?batch={batch}&dept={dept}&limit={limit}
  @desc:      get Images for gallery section
  @access:    private
*/
const getGalleryImages = async (req, res, next) => {
  try {
    const { batch, department, selectall, limit } = url.parse(
      req.url,
      true
    ).query;

    let images;
    if (selectall == 1) {
      images = await GalleryImage.find({
        isActive: true,
      })
        .select({ __v: 0 })
        .populate(
          "uploadedBy",
          "-password -isAdmin -isVerified -resetToken -resetTokenExpiry -__v"
        )
        .sort({ createdAt: "desc" })
        .limit(limit);
    } else {
      const batchValue = batch ? batch : { $ne: " " };
      const departmentValue = department ? department : { $ne: " " };

      images = await GalleryImage.find({
        batch: batchValue,
        department: departmentValue,
        isActive: true,
      })
        .select({ __v: 0 })
        .populate(
          "uploadedBy",
          "-password -isAdmin -isVerified -resetToken -resetTokenExpiry -__v"
        )
        .sort({ createdAt: "desc" })
        .limit(limit);
    }

    if (images) {
      res.json({ images });
    } else {
      const error = createError(404, "No Images Found");
      next(error);
    }

    // const s3 = initilizeAwsS3();

    // const fileObjects = await s3
    //   .listObjectsV2({
    //     Bucket: 'kuetianshub',
    //     Prefix: 'gallery/',
    //   })
    //   .promise();

    // const data = fileObjects.Contents.sort(
    //   (a, b) => new Date(b.LastModified) - new Date(a.LastModified)
    // ).map((content) => {
    //   return {
    //     title: content.Key.replace('gallery/', ''),
    //     url: encodeURI(
    //       `${process.env.FRONTEND_CLOUD_IMAGE_URL}/${content.Key}`
    //     ),
    //   };
    // });
  } catch (err) {
    const error = createError(500, "Error occured");
    next(error);
  }
};

/*
  @api:       POST /api/posts/addGalleryImages
  @desc:      Add a new photo to gallery
  @access:    private
*/
const addGalleryImages = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }

    const { title, batch, department } = req.body;

    const image = req?.file
      ? await uploadSingleImage(req.file, "gallery/")
      : null;

    const newPost = new GalleryImage({
      title,
      batch,
      department,
      image,
      uploadedBy: req.user.id,
    });

    const createdNewPost = await newPost.save();

    if (createdNewPost) {
      res
        .status(201)
        .json({ message: "Post created successfully", post: createdNewPost });
    } else {
      const error = createError(500, "Error occured");
      next(error);
    }
  } catch (err) {
    const error = createError(500, err.message);
    next(error);
  }
};

module.exports = {
  getPosts,
  getPostById,
  getPostsByUser,
  createPost,
  editPost,
  deletePost,
  getLearningFileStructure,
  getGalleryImages,
  addGalleryImages,
};
