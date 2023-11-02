const express = require("express");
const router = express.Router();


router.get("/definition/:word");
router.post("/definition");
router.patch("/definition/:word");
router.delete("/definition/:word");

module.exports = router;