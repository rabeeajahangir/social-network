const router = require('express').Router();


const {
    getAllUsers,
    getUserById,
    createUsers,
    updateUser,
    addFriend,
    removeFriend,
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

  router
.route('/:userId/friends/:friendId')
.post(addFriend)
.put(removeFriend)
module.exports = router;








module.exports = router;