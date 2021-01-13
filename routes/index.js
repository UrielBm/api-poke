const express = require("express");
const router = express.Router();
const PokeController = require("../controllers/PokeController");
const PokeService = require("../Services/PokeService");
const IntancePoke = new PokeController(new PokeService());
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".png");
  },
});
const upload = multer({ storage: storage });
/* GET home page. */
router.delete("/delete/:name", (req, res, next) => {
  IntancePoke.deletePoke(req, res);
});
router.put("/updatepokemon/:pokemon", (req, res, next) => {
  IntancePoke.putPoke(req, res);
});
router.post("/postapokemon", upload.single("pokemon"), (req, res, next) => {
  IntancePoke.postPoke(req, res);
});
router.get("/listpokemones", (req, res, next) => {
  IntancePoke.getPoke(req, res);
});
router.get("/", function (req, res, next) {
  res.send(`welcome to the api-poke`);
});

module.exports = router;
