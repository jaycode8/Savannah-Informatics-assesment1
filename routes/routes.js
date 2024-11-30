const router = require("express").Router();
const { delete_user, get_all_users, get_user, new_user, update_user } = require("../controllers/users.controller");
const { new_album,get_all_albums,get_album,delete_album, update_album } = require("../controllers/albums.controller");
const { get_photo, delete_photo, get_all_photos, new_photo, update_photo } = require("../controllers/photos.controller");

const upload = require("../config/upload");

// -------- users CRUD operations
router.route("/users")
    .post(new_user)
    .get(get_all_users);
router.route("/users/:user_id")
    .get(get_user)
    .put(update_user)
    .delete(delete_user);

// -------- album CRUD operations
router.route("/albums")
    .post(new_album)
    .get(get_all_albums);
router.route("/albums/:album_id")
    .get(get_album)
    .put(update_album)
    .delete(delete_album);

// -------- photos CRUD operations
router.route("/photos")
    .post(upload.single("photo"), new_photo)
    .get(get_all_photos);
router.route("/photos/:photo_id")
    .get(get_photo)
    .put(upload.single("photo"), update_photo)
    .delete(delete_photo);

module.exports = router;
