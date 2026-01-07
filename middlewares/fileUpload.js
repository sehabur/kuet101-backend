const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
require("aws-sdk/lib/maintenance_mode_message").suppress = true;
const createError = require("http-errors");

const MIME_TYPE_MAP = {
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
  "image/png": "png",
};

// const credentials = new AWS.SharedIniFileCredentials();
// AWS.config.credentials = credentials;
// console.log(credentials);

const bucketName = "kuetianshub-bucket";

const fileUpload = multer({
  storage: multer.memoryStorage(),
  limits: 500000,
});

const initilizeAwsS3 = () => {
  // const credentials = new AWS.SharedIniFileCredentials();
  // AWS.config.credentials = credentials;

  AWS.config.update({
    // region: "us-west-2",
    accessKeyId: process.env.aws_access_key_id,
    secretAccessKey: process.env.aws_secret_access_key,
  });

  return new AWS.S3();
};

const uploadSingleImage = async (
  file,
  subFolder = "images/",
  customKey = null
) => {
  const s3 = initilizeAwsS3();
  try {
    const imageUploadResult = await fileUploadToAwsS3(
      s3,
      file,
      subFolder,
      customKey
    );

    if (!imageUploadResult) {
      const error = createError(400, "Image upload failed");
      console.log(error);
    }
    return imageUploadResult.Key; //uploaded image key//
  } catch (err) {
    const error = createError(400, err.message);
    console.log(error);
  }
};

const uploadMultipleImage = async (
  files,
  subFolder = "images/",
  customKey = null
) => {
  try {
    const s3 = initilizeAwsS3();

    let uploadedImageArray = [];
    for (let file of files) {
      const imageUploadResult = await fileUploadToAwsS3(
        s3,
        file,
        subFolder,
        customKey
      );

      if (!imageUploadResult) {
        const error = createError(400, "Image upload failed");
        throw error;
      }
      uploadedImageArray.push(imageUploadResult.Key); //uploaded image key//
    }
    return uploadedImageArray;
  } catch (err) {
    const error = createError(400, err.message);
    throw error;
  }
};

const fileUploadToAwsS3 = (s3, file, subFolder, customKey) => {
  try {
    const imageUploadResult = s3
      .upload({
        Bucket: bucketName,
        Body: file.buffer,
        Key:
          subFolder +
          (customKey ? customKey : uuidv4()) +
          "." +
          MIME_TYPE_MAP[file.mimetype],
      })
      .promise();
    return imageUploadResult;
  } catch (err) {
    const error = createError(400, err.message);
    throw error;
  }
};

const deleteSingleImage = async (key) => {
  try {
    const s3 = initilizeAwsS3();
    await fileDeleteAwsS3(s3, key);
  } catch (err) {
    const error = createError(400, err.message);
    next(error);
  }
};

const deleteMultipleImage = async (keyArray) => {
  try {
    const s3 = initilizeAwsS3();
    for (key of keyArray) {
      await fileDeleteAwsS3(s3, key);
    }
  } catch (err) {
    const error = createError(400, err.message);
    next(error);
  }
};

const fileDeleteAwsS3 = (s3, key) => {
  try {
    return s3
      .deleteObject({
        Bucket: bucketName,
        Key: key,
      })
      .promise();
  } catch (err) {
    const error = createError(400, err.message);
    next(error);
  }
};

module.exports = {
  fileUpload,
  initilizeAwsS3,
  fileUploadToAwsS3,
  uploadSingleImage,
  uploadMultipleImage,
  deleteSingleImage,
  deleteMultipleImage,
};
