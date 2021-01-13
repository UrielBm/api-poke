const axios = require("axios");

class PokeController {
  constructor(PokeService) {
    this.PokeService = PokeService;
  }
  async getPoke(req, res) {
    const { pag } = req.query;
    if (pag) {
      try {
        const limit = 10;
        const offset = limit * (pag - 1);
        const response = await this.PokeService.getPokes(offset);
        const datalist = response
          .filter((pokemon) => {
            return pokemon.disabled == false;
          })
          .map(({ id, name, img, height, weight, type }) => {
            return { id, name, img, height, weight, type };
          });
        res.status(200).json(datalist);
      } catch (e) {
        res.status(500).send(`error al hacer la request error: ${e}`);
      }
    } else {
      const offsetDefault = 0;
      try {
        const responseDefault = await this.PokeService.getPokes(offsetDefault);
        const datalistdefault = responseDefault
          .filter((pokemon) => {
            return pokemon.disabled == false;
          })
          .map(({ id, name, img, height, weight, type }) => {
            return { id, name, img, height, weight, type };
          });
        res.status(200).json(datalistdefault);
      } catch (e) {
        res.status(500).send(`ERROR: ${e}`);
      }
    }
  }
  async postPoke(req, res) {
    const { name } = req.body;
    const { filename } = req.file;
    if (name && filename) {
      try {
        const pokemon = {
          name: name,
          img: filename,
        };
        const response = await this.PokeService.postPokes(pokemon);
        res.status(200).send(`se realizo el registro con exito`);
      } catch (e) {
        res.status(500).send(`Ocurrio un problema Error: ${e}`);
      }
    } else {
      res.status(400).send(`bad request te falto enviar información`);
    }
  }
  async putPoke(req, res) {
    const { pokemon } = req.params;
    try {
      const getresult = await axios.get(
        ` https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      const { id, name, height, weight, types } = getresult.data;
      const arraytypes = types.map(({ type }) => {
        return type.name;
      });
      const type = `${arraytypes}`;
      const pokeSearch = {
        id: id,
        height: height,
        weight: weight,
        type: type,
      };
      const response = await this.PokeService.updatePokeByName(
        name,
        pokeSearch
      );
      res.status(200).send(`se hizo el update exitosamente`);
    } catch (e) {
      res.status(500).send(`ERROR ${e}`);
    }
  }
  async deletePoke(req, res) {
    const { name } = req.params;
    try {
      const response = await this.PokeService.DeletePokeByName(name);
      res.status(200).send(`se "elimino" el registro correctamente`);
    } catch (e) {
      res.status(500).send(`Error al eliminar elregistro, ERROR: ${e}`);
    }
  }
}

module.exports = PokeController;
