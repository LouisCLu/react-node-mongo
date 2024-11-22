const cloudinary = require("cloudinary").v2;
cloudinary.config({
    cloud_name: "doez3nyt2", 
    api_key: "",
    api_secret: "",
});

module.exports = cloudinary;