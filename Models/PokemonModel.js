const mongoose = require("mongoose");
const PokemonSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    default: 0,
  },
  height: {
    type: String,
    default: "",
  },
  weight: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Pokemon", PokemonSchema);
