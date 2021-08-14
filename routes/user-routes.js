const router = require('express').Router();


const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
  } = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
// /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUsers);

// Set up GET one, PUT, and DELETE at /api/userss/:id
// /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;








module.exports = router;