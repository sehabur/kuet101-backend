const express = require('express');

const router = express.Router();

const {
  getPosts,
  getPostById,
  getPostsByUser,
  createPost,
  deletePost,
  getLearningFileStructure,
  getGalleryImages,
  addGalleryImages,
} = require('../controllers/postController');

const { checkLogin } = require('../middlewares/authMiddleware');
const {
  postValidationMiddleware,
} = require('../middlewares/validationMiddlewares/postValidationMiddleware');
const {
  galleryImageValidationMiddleware,
} = require('../middlewares/validationMiddlewares/galleryImageValidationMiddleware');

const { fileUpload } = require('../middlewares/fileUpload');

router
  .route('/')
  .get(checkLogin, getPosts)
  .post(
    checkLogin,
    fileUpload.single('image'),
    postValidationMiddleware,
    createPost
  );

router.route('/getGalleryImages/').get(checkLogin, getGalleryImages);

router
  .route('/addGalleryImages/')
  .post(
    checkLogin,
    fileUpload.single('image'),
    galleryImageValidationMiddleware,
    addGalleryImages
  );

router
  .route('/:id')
  .get(checkLogin, getPostById)
  .delete(checkLogin, deletePost);

router.route('/user/:id').get(checkLogin, getPostsByUser);

router
  .route('/getLearningFileStructure/:category')
  .get(checkLogin, getLearningFileStructure);

module.exports = router;
