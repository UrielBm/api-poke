# api-poke

es una Api de prueba para el uso de **multer, axios y mongoose** para usar los endpoints, comparto ejemplos de como usarlo

### método get

primer pagina

```
http://localhost:3001/listpokemones
```

las demás páginas van por params.query

```
http://localhost:3001/listpokemones?pag=2
http://localhost:3001/listpokemones?pag=3
```

### método post

uso del método post con la caracteristica de poner en el body en postman la _key y value_

```
localhost:3001/postapokemon
```

### método put

para el uso de este método se necesita el nombre del pokemon a actualizar sus datos, el update se hara mediante exios a la poke-api

```
localhost:3001/updatepokemon/mew
localhost:3001/updatepokemon/pikachu

```

### método delete

el método delete cambia el valor de desabled a true por default esta en false más no lo elimina de la base de datosse requiere el nombre del pokemon

```
localhost:3001/delete/pikachu
```
