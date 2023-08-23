const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');
require('aws-sdk/lib/maintenance_mode_message').suppress = true;
const createError = require('http-errors');

const MIME_TYPE_MAP = {
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg',
  'image/png': 'png',
};

const awsRegion = process.env.AWS_BUCKET_REGION;
const awsBucket = process.env.AWS_BUCKET_NAME;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const fileUpload = multer({
  storage: multer.memoryStorage(),
  limits: 500000,
});

const initilizeAwsS3 = () => {
  AWS.config.update({
    region: awsRegion,
    apiVersion: 'latest',
    accessKeyId,
    secretAccessKey,
  });
  return new AWS.S3();
};

const uploadSingleImage = async (
  file,
  subFolder = 'images/',
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
      const error = createError(400, 'Image upload failed');
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
  subFolder = 'images/',
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
        const error = createError(400, 'Image upload failed');
        console.log(error);
      }
      uploadedImageArray.push(imageUploadResult.Key); //uploaded image key//
    }
    return uploadedImageArray;
  } catch (err) {
    const error = createError(400, err.message);
    console.log(error);
  }
};

const fileUploadToAwsS3 = (s3, file, subFolder, customKey) => {
  try {
    const imageUploadResult = s3
      .upload({
        Bucket: awsBucket,
        Body: file.buffer,
        Key:
          subFolder +
          (customKey ? customKey : uuidv4()) +
          '.' +
          MIME_TYPE_MAP[file.mimetype],
      })
      .promise();

    return imageUploadResult;
  } catch (err) {
    console.log(err);
  }
};

const fileDeleteAwsS3 = (key) => {
  try {
    const s3 = initilizeAwsS3();

    return s3
      .deleteObject({
        Bucket: awsBucket,
        Key: key,
      })
      .promise();
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  fileUpload,
  initilizeAwsS3,
  fileUploadToAwsS3,
  fileDeleteAwsS3,
  uploadSingleImage,
  uploadMultipleImage,
};
