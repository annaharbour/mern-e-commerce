import express from "express";
const router = express.Router();
import {
	authUser,
	registerUser,
	logoutUser,
	getUserByID,
	getUserProfile,
	updateUserProfile,
	deleteUser,
	getUsers,
	updateUser,
} from "../controllers/userController.js";

router.route("/").post(registerUser).get(getUsers);
router.post("/logout", logoutUser);
router.post("/login", authUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router
	.route("/:id")
	.get(getUserByID)
	.delete(deleteUser)
	.put(updateUser);

export default router;
