const router = require("express").Router();

router.get("/", (req,res) =>{
    res.send("user router");
});

module.exports = router;