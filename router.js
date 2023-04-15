const multer = require('multer')
const express = require('express');
const router = express.Router();
const api = require("./api");
const upload = multer()

router.post("/", upload.single('file'), api.postData);

module.exports = router;
