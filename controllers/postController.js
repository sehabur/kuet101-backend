const createError = require('http-errors');
const { validationResult } = require('express-validator');
const url = require('url');
const Post = require('../models/postModel');
const User = require('../models/userModel');
const AWS = require('aws-sdk');

const {
  uploadSingleImage,
  fileDeleteAwsS3,
  initilizeAwsS3,
} = require('../middlewares/fileUpload');
const GalleryImage = require('../models/galleryImageModel');

/*
  @api:       GET /api/posts?user={user}&limit={limit}
  @desc:      get all recent posts
  @access:    private
*/
const getPosts = async (req, res, next) => {
  try {
    const { user, limit } = url.parse(req.url, true).query;

    const posts = await Post.find({
      user: { $ne: user },
      isActive: true,
    })
      .select({ __v: 0 })
      .sort({ createdAt: 'desc' })
      .limit(limit);

    if (posts) {
      res.json({ posts });
    } else {
      const error = createError(404, 'No Posts Found');
      next(error);
    }
  } catch (err) {
    const error = createError(500, 'No Posts Found');
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
      .select('-__v')
      .populate(
        'user',
        '-password -isAdmin -isVerified -resetToken -resetTokenExpiry -__v'
      );

    if (post) {
      res.json({ post });
    } else {
      const error = createError(404, 'No Post Found');
      next(error);
    }
  } catch (err) {
    const error = createError(500, 'No Post Found');
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
      .select('-user -__v')
      .sort({ updatedAt: 'desc' });
    res.status(200).json({ postsByUser });
  } catch (err) {
    const error = createError(500, 'No User/Post Found');
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
    const { title, description } = req.body;

    const image = req?.file ? await uploadSingleImage(req.file) : null;

    const newPost = new Post({
      title,
      description,
      image,
      user: req.user.id,
    });

    const createdNewPost = await newPost.save();

    res
      .status(201)
      .json({ message: 'Post created successfully', post: createdNewPost });
  } catch (err) {
    const error = createError(500, err.message);
    next(error);
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
          post.image1 && (await fileDeleteAwsS3(image1));

          res.status(200).json({
            message: 'Post deletion successful',
            postId,
          });
        } else {
          res.status(400).json({
            message: 'Post deletion failed',
          });
        }
      } else {
        res.status(401).json({
          message: 'Post deletion failed',
        });
      }
    } else {
      res.status(400).json({
        message: 'Post delete failed as post not found',
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

    const fileObjects = await s3
      .listObjectsV2({
        Bucket: 'kuetianshub',
        Prefix: `files/${category}/`,
      })
      .promise();

    const data = fileObjects.Contents.map((content) => {
      return content.Key.split('/').slice(2);
    });

    const root = { type: 'root', contents: [] };

    data.forEach((item) => {
      let currentLevel = root.contents;
      item.forEach((name, index) => {
        const existingFolder = currentLevel.find(
          (folder) => folder.name === name && folder.type === 'subFolder'
        );

        if (index === item.length - 1) {
          name &&
            currentLevel.push({
              type: 'file',
              name,
              url: encodeURI(
                `${process.env.FRONTEND_CLOUD_IMAGE_URL}/files/dept/${item.join(
                  '/'
                )}`
              ),
            });
        } else {
          if (existingFolder) {
            currentLevel = existingFolder.contents;
          } else {
            const newFolder = { type: 'subFolder', name, contents: [] };
            currentLevel.push(newFolder);
            currentLevel = newFolder.contents;
          }
        }
      });
    });

    res.status(200).json({ files: root.contents });
  } catch (err) {
    const error = createError(500, 'Error occured');
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
    const { batch, dept: department, limit } = url.parse(req.url, true).query;

    const images = await GalleryImage.find({
      batch,
      department,
      isActive: true,
    })
      .select({ __v: 0 })
      .populate(
        'uploadedBy',
        '-password -isAdmin -isVerified -resetToken -resetTokenExpiry -__v'
      )
      .sort({ createdAt: 'desc' })
      .limit(limit);

    if (images) {
      res.json({ images });
    } else {
      const error = createError(404, 'No Images Found');
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
    const error = createError(500, 'Error occured');
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
      ? await uploadSingleImage(req.file, 'gallery/')
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
        .json({ message: 'Post created successfully', post: createdNewPost });
    } else {
      const error = createError(500, 'Error occured');
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
  deletePost,
  getLearningFileStructure,
  getGalleryImages,
  addGalleryImages,
};