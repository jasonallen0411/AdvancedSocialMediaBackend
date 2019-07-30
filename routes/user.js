const express = require("express");
const { userById,
        allUsers,
        getUser,
        updateUser,
        deleteUser,
        userPhoto,
        addFollowing,
        addFollower,
        removeFollowing,
        removeFollower,
        findPeople 
    } = require("../controllers/user");
const { requireSignin } = require("../controllers/auth");

const router = express.Router();

router.put("/user/follow", requireSignin, addFollowing, addFollower);
router.put("/user/unfollow", requireSignin, removeFollowing, removeFollower);

router.get("/users", allUsers);
router.get("/users/:userId", requireSignin, getUser);
router.put("/users/:userId", requireSignin, updateUser);
router.delete("/users/:userId", requireSignin, deleteUser);
// photo
router.get("/user/photo/:userId", userPhoto);

// who to follow
router.get('/user/findpeople/:userId', requireSignin, findPeople);

// any route containing :userId, our app will first execute userById()
router.param("userId", userById);

module.exports = router;