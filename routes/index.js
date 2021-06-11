const express = require("express");
const router = express.Router();

/* GET homepage */
router.get("/", function (req, res) {
	res.render("index", {});
});

/* GET post detail */
router.get("/post", function (req, res) {
	res.render("page/post", {});
});

/* GET contact */
router.get("/contact", function (req, res) {
	res.render("page/contact", {});
});

module.exports = router;
