const Pokemon = require("../Models/PokemonModel");

class PokeService {
  getPokes(offset) {
    const query = Pokemon.find().skip(offset).limit(10).exec();
    return query;
  }
  postPokes(pokemon) {
    const newPoke = new Pokemon(pokemon);
    return newPoke.save();
  }
  updatePokeByName(name, data) {
    const query = Pokemon.findOneAndUpdate({ name: name }, data).exec();
    return query;
  }
  DeletePokeByName(name) {
    const query = Pokemon.findOneAndUpdate(
      { name: name },
      { disabled: true }
    ).exec();
    return query;
  }
}
module.exports = PokeService;
