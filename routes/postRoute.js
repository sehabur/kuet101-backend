const express = require('express');

const router = express.Router();

const {
  getPosts,
  getPostById,
  getPostsByUser,
  createPost,
  editPost,
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
    fileUpload.array('image', 8),
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
  .patch(
    checkLogin,
    fileUpload.array('image', 8),
    postValidationMiddleware,
    editPost
  )
  .delete(checkLogin, deletePost);

router.route('/user/:id').get(checkLogin, getPostsByUser);

router
  .route('/getLearningFileStructure/:category')
  .get(checkLogin, getLearningFileStructure);

module.exports = router;
