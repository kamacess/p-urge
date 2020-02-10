const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const storage = cloudinaryStorage({
    cloudinary,
    folder: "toilet-pictures",
    allowedFormats: ['jpg', 'png'],
    filename: function (req, file, cb) {
        console.log("request =>", req);
        console.log("file =>", file);
        cb(null, file.originalname);
    }
});
const fileUploader = multer({
    storage
});

module.exports = fileUploader;