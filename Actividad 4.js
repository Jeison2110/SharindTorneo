/*
Creado por:
    IdBanner:100098659
    Nombre: Esperanza Castro Lombana 

    IdBanner:100096167
    Nombre: Jeison Valencia Sanchez

    Fecha: 2023-12-16,  ©/ todos los derechos reservados
    Corporación Universitaria Iberoamericana
*/


//Primer caso de Prueba//
db.Arbitros.find().explain()
db.Resultados.find({Fase: "All in ALL"}).explain()


//Segundo caso de Prueba//
db.Resultados.find({Fase: "All in ALL"}).pretty()
db.Arbitros.find({Nombre}).pretty()
db.Equipos.find().pretty()


//Tercer caso de Prueba//
db.adminCommand({ listShards:1 })
db = (new Mongo("localhost:20006")).getDB("Torneo")
show collections
