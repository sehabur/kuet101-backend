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
// const awsBucket = process.env.AWS_BUCKET_NAME || 'kuetianshub';
// const accessKeyId =
//   process.env.AWS_BUCKET_ACCESS_KEY_ID || 'AKIASEBK72SYKYTMQJRE';
// const secretAccessKey =
//   process.env.AWS_BUCKET_SECRET_ACCESS_KEY ||
//   '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';

const awsBucket = process.env.AWS_BUCKET_NAME;
const accessKeyId = process.env.AWS_BUCKET_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_BUCKET_SECRET_ACCESS_KEY;

const fileUpload = multer({
  storage: multer.memoryStorage(),
  limits: 500000,
});

const uploadSingleImage = async (file, subFolder = 'images/') => {
  try {
    const imageUploadResult = await fileUploadToAwsS3(file, subFolder);

    if (!imageUploadResult) {
      const error = createError(400, 'Image upload failed');
      next(error);
    }
    return imageUploadResult.Key; //uploaded image key//
  } catch (err) {
    const error = createError(400, err.message);
    next(error);
  }
};

const fileUploadToAwsS3 = (file, subFolder) => {
  try {
    const s3 = new AWS.S3({
      accessKeyId,
      secretAccessKey,
    });

    const imageUploadResult = s3
      .upload({
        Bucket: awsBucket,
        Body: file.buffer,
        Key: subFolder + uuidv4() + '.' + MIME_TYPE_MAP[file.mimetype],
      })
      .promise();

    return imageUploadResult;
  } catch (err) {
    console.log(err);
  }
};

const fileDeleteAwsS3 = (key) => {
  try {
    const s3 = new AWS.S3({
      accessKeyId,
      secretAccessKey,
    });
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
  fileUploadToAwsS3,
  fileDeleteAwsS3,
  uploadSingleImage,
};
