const express = require("express");
const router = express.Router();
const customMiddleware = require("../middlewares/customMiddleware");

const controller = require("../controllers/book.controller");

router.use(customMiddleware);

router.get("/", controller.getAllBooks);
router.get("/:id", customMiddleware, controller.getBookById);
router.post("/", controller.CreateBook);
router.delete("/delete/:id", controller.DeleteBookById);

module.exports = router;
