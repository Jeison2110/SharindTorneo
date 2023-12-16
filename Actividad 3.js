/*
Creado por:
    IdBanner:100098659
    Nombre: Esperanza Castro Lombana 

    IdBanner:100096167
    Nombre: Jeison Valencia Sanchez

    Fecha: 2023-12-16,  ©/ todos los derechos reservados
    Corporación Universitaria Iberoamericana
*/

//Creamos el particionamiento//
cluster=new ShardingTest ({shards: 3, chunksize:1}) 

//Conectarnos a la BD de Torneo//
db = (new Mongo("localhost:20006")).getDB("Torneo")   

//Insertamos los datos//
db.Equipos.insertMany(
    [
        {
            NombreEquipo: "Los Perros",
            Origen: "Pereira",
            Uniforme: "Naranja"
        },
        {
            NombreEquipo: "Los Gatos",
            Origen: "Manizales",
            Uniforme: "Negro"
        },
        {
            NombreEquipo: "Los Leones",
            Origen: "Medellin",
            Uniforme: "Amarillo"
        },
        {
            NombreEquipo: "Los Pajaros",
            Origen: "Cali",
            Uniforme: "Azul"
        },
        {
            NombreEquipo: "Los Pumas",
            Origen: "Bogota",
            Uniforme: "Cafe"
        },
        {
            NombreEquipo: "Los Marranos",
            Origen: "Neiva",
            Uniforme: "Morado"
        },
        {
            NombreEquipo: "Las Ardillas",
            Origen: "Pasto",
            Uniforme: "Gris"
        },
        {
            NombreEquipo: "Las Hormigas",
            Origen: "Bucaramanga",
            Uniforme: "Rojo"
        }
    ]
)


db.Jugadores.insertMany(
    [
        {
            NombreEquipo: "Los Perros",
            JugadorA:{
                Nombre:"Juan Carlos Paez",
                Edad:20,
                Numero:1
            },
            JugadorB:{
                Nombre:"Jorge Bravo",
                Edad:19,
                Numero:2
            },
            JugadorC:{
                Nombre:"Mauricio Arciniegas",
                Edad:21,
                Numero:3
            },
            JugadorD:{
                Nombre:"Sebastian Lopez",
                Edad:20,
                Numero:4
            },
            JugadorE:{
                Nombre:"Andres Perez",
                Edad:20,
                Numero:5
            }
        },
        {
            NombreEquipo: "Los Gatos",
            JugadorA:{
                Nombre:"Mario Casas",
                Edad:18,
                Numero:1
            },
            JugadorB:{
                Nombre:"Ricardo Sanchez",
                Edad:20,
                Numero:2
            },
            JugadorC:{
                Nombre:"Oscar Gamboa",
                Edad:18,
                Numero:3
            },
            JugadorD:{
                Nombre:"Ivan Hidalgo",
                Edad:19,
                Numero:4
            },
            JugadorE:{
                Nombre:"Kevin Rodriguez",
                Edad:20,
                Numero:5
            }
        },
        {
            NombreEquipo: "Los Leones",
            JugadorA:{
                Nombre:"Juan Pablo Castellanos",
                Edad:20,
                Numero:1
            },
            JugadorB:{
                Nombre:"Wilmer Gomez",
                Edad:21,
                Numero:2
            },
            JugadorC:{
                Nombre:"Diego Pino",
                Edad:20,
                Numero:3
            },
            JugadorD:{
                Nombre:"Gabriel Salamanca",
                Edad:19,
                Numero:4
            },
            JugadorE:{
                Nombre:"Hector Garces",
                Edad:22,
                Numero:5
            }
        },
        {
            NombreEquipo: "Los Pajaros",
            JugadorA:{
                Nombre:"Steven Vargas",
                Edad:18,
                Numero:1
            },
            JugadorB:{
                Nombre:"Brayan Mazuera",
                Edad:20,
                Numero:2
            },
            JugadorC:{
                Nombre:"Elias Chaparro",
                Edad:18,
                Numero:3
            },
            JugadorD:{
                Nombre:"Carlos Carranza",
                Edad:20,
                Numero:4
            },
            JugadorE:{
                Nombre:"Francisco Morales",
                Edad:21,
                Numero:5
            }
        },
        {
            NombreEquipo: "Los Pumas",
            JugadorA:{
                Nombre:"Alejandro Gonzalez",
                Edad:18,
                Numero:1
            },
            JugadorB:{
                Nombre:"Ivan Bobadilla",
                Edad:20,
                Numero:2
            },
            JugadorC:{
                Nombre:"Camilo Valbuena",
                Edad:21,
                Numero:3
            },
            JugadorD:{
                Nombre:"Pablo Armero",
                Edad:20,
                Numero:4
            },
            JugadorE:{
                Nombre:"Luis Yepes",
                Edad:18,
                Numero:5
            }
        },
        {
            NombreEquipo: "Los Marranos",
            JugadorA:{
                Nombre:"Dario Ballesteros",
                Edad:20,
                Numero:1
            },
            JugadorB:{
                Nombre:"Antonio Villamizar",
                Edad:21,
                Numero:2
            },
            JugadorC:{
                Nombre:"Alexander Martinez",
                Edad:20,
                Numero:3
            },
            JugadorD:{
                Nombre:"Andres Suarez",
                Edad:18,
                Numero:4
            },
            JugadorE:{
                Nombre:"Jose Molina",
                Edad:19,
                Numero:5
            }
        },
        {
            NombreEquipo: "Las Ardillas",
            JugadorA:{
                Nombre:"Pedro Fernandez",
                Edad:20,
                Numero:1
            },
            JugadorB:{
                Nombre:"Alejandro Sanchez",
                Edad:21,
                Numero:2
            },
            JugadorC:{
                Nombre:"Edwin Rozo",
                Edad:18,
                Numero:3
            },
            JugadorD:{
                Nombre:"Ferley Castro",
                Edad:19,
                Numero:4
            },
            JugadorE:{
                Nombre:"Ederson Marin",
                Edad:20,
                Numero:5
            }
        },
        {
            NombreEquipo: "Las Hormigas",
            JugadorA:{
                Nombre:"Jorge Garay",
                Edad:18,
                Numero:1
            },
            JugadorB:{
                Nombre:"Nicolas Mora",
                Edad:20,
                Numero:2
            },
            JugadorC:{
                Nombre:"Jorge Cifuentes",
                Edad:21,
                Numero:3
            },
            JugadorD:{
                Nombre:"Guillermo Castillo",
                Edad:22,
                Numero:4
            },
            JugadorE:{
                Nombre:"Ivan Puerta",
                Edad:19,
                Numero:5
            }
        }
    ]
)

db.Entrenadores.insertMany(
    [
        {
            NombreEquipo: "Los Perros",
            EntrenadorFisico:{Nombre:"Orlando Lombana", Edad:55, Experiencia:"3 Años"},
            EntrenadorMedico:{Nombre:"Camilo Cifuentes", Edad:30, Experiencia:"5 Años"}
        },
        {
            NombreEquipo: "Los Gatos",
            EntrenadorFisico:{Nombre:"Ivan Marin", Edad:35, Experiencia:"1 Año"},
            EntrenadorMedico:{Nombre:"Holman Pinto", Edad:36, Experiencia:"2 Años"}
        },
        {
            NombreEquipo: "Los Leones",
            EntrenadorFisico:{Nombre:"Hugo Arias", Edad:45, Experiencia:"10 Años"},
            EntrenadorMedico:{Nombre:"Daniel Becerra", Edad:36, Experiencia:"3 Años"}
        },
        {
            NombreEquipo: "Los Pajaros",
            EntrenadorFisico:{Nombre:"Lucas Merino", Edad:45, Experiencia:"2 Años"},
            EntrenadorMedico:{Nombre:"Manuel Castillo", Edad:35, Experiencia:"1 Año"}
        },
        {
            NombreEquipo: "Los Pumas",
            EntrenadorFisico:{Nombre:"Jose Luis Diaz", Edad:50, Experiencia:"8 Años"},
            EntrenadorMedico:{Nombre:"Santiago Arias", Edad:35, Experiencia:"5 Años"}
        },
        {
            NombreEquipo: "Los Marranos",
            EntrenadorFisico:{Nombre:"Samuel Martinez", Edad:38, Experiencia:"1 Año"},
            EntrenadorMedico:{Nombre:"Mateo Hernandez", Edad:45, Experiencia:"3 Años"}
        },
        {
            NombreEquipo: "Las Ardillas",
            EntrenadorFisico:{Nombre:"Andres Losano", Edad:30, Experiencia:"4 Años"},
            EntrenadorMedico:{Nombre:"Nicolas Prieto", Edad:42, Experiencia:"2 Años"}
        },
        {
            NombreEquipo: "Las Hormigas",
            EntrenadorFisico:{Nombre:"Pablo Valencia", Edad:45, Experiencia:"6 Años"},
            EntrenadorMedico:{Nombre:"Braulio Medina", Edad:36, Experiencia:"3 Años"}
        }
    ]
)

db.Arbitros.insertMany(
    [
        {
            Nombre:"Tobias Salamanca",
            Edad:40,
            Experiencia:"10 Años"
        },
        {
            Nombre:"Alfonso Rengifo",
            Edad:35,
            Experiencia:"5 Años"
        },
        {
            Nombre:"Rafael Peñuela",
            Edad:50,
            Experiencia:"8 Años"
        },
        {
            Nombre:"Mariana Zuares",
            Edad:36,
            Experiencia:"7 Años"
        },
        {
            Nombre:"Jaime Pava",
            Edad:42,
            Experiencia:"9 Años"
        },
        {
            Nombre:"Guillermo Rodriguez",
            Edad:38,
            Experiencia:"10 Años"
        },
        {
            Nombre:"Jose Ardila",
            Edad:45,
            Experiencia:"8 Años"
        },
        {
            Nombre:"Henrri Espinoza",
            Edad:52,
            Experiencia:"9 años"
        }
    ]
)


db.EncuentrosDepor.insertMany(
    [
        {Fase:"All in All", Observacion:"Llaves de parejas por eliminacion directa"},
        {Fase:"SemiFinal", Observacion:"Equipos ganadores de las llaves de All in All"},
        {Fase:"Final", Observacion:"Clausura y premiacion del ganador"}
    ]
)


db.Resultados.insertMany(
    [
        {
            Fase:"All in ALL",
            Fecha:"2023-10-10T20:00:00Z",
            DuracionPartido:"60 min",
            Enfrentamientos:{
                EquipoA:"Los Perros",
                EquipoB:"Los Gatos"
            },
            AsistenciaEquipo:{
                EquipoA:"OK",
                EquipoB:"OK"
            },
            ArbitroCentral:"Tobias Salamanca",
            ArbitroLateralA:"Henrri Espinoza",
            ArbitroLateralB:"Jose Ardila",
            TarjetaAmarilla:{
                EquipoA:{
                    JugadorA:"Mauricio Arciniegas",
                    JugadorB:"Andres Perez",
                },
                EquipoB:{
                    JugadorA:"Mario Casa", 
                },
                Total:3
            },
            TarjetaRoja:{
                EquipoA:{},
                EquipoB:{},
                Total:0
            },            
            ResultadoPartido:{
                Ganador:"Los Perros",
                Perdedor:"Los Gatos",
                Empate:"NO"
            },
            ResultadoPenaltis:{
                EquipoA:"",
                EquipoB:""
            }
        },
        {
            Fase:"All in ALL",
            Fecha:"2023-10-10T15:00:00Z",
            DuracionPartido:"60 min",
            Enfrentamientos:{
                EquipoA:"Los Leones",
                EquipoB:"Los Pajaros"
            },
            AsistenciaEquipo:{
                EquipoA:"OK",
                EquipoB:"OK"
            },
            ArbitroCentral:"Alfonso Rengifo",
            ArbitroLateralA:"Rafael Peñuela",
            ArbitroLateralB:"Mariana Zuares",
            TarjetaAmarilla:{
                EquipoA:{
                    JugadorA:"Diego Pino",
                    JugadorB:"Diego Pino",
                },
                EquipoB:{},
                Total:2
            },
            TarjetaRoja:{
                EquipoA:{
                    JugadorA:"Diego Pino"
                },
                EquipoB:{},
                Total:1
            },            
            ResultadoPartido:{
                Ganador:"Los Pajaros",
                Perdedor:"Los Leones",
                Empate:"NO"
            },
            ResultadoPenaltis:{
                EquipoA:"",
                EquipoB:""
            }
        },
        {
            Fase:"All in ALL",
            Fecha:"2023-10-11T20:00:00Z",
            DuracionPartido:"60 min",
            Enfrentamientos:{
                EquipoA:"Los Pumas",
                EquipoB:"Los Marranos"
            },
            AsistenciaEquipo:{
                EquipoA:"NO",
                EquipoB:"OK"
            },
            ArbitroCentral:"Guillermo Rodriguez",
            ArbitroLateralA:"Jose Ardila",
            ArbitroLateralB:"Rafael Peñuela",
            TarjetaAmarilla:{
                EquipoA:{},
                EquipoB:{},
                Total:0
            },
            TarjetaRoja:{
                EquipoA:{},
                EquipoB:{},
                Total:0
            },            
            ResultadoPartido:{
                Ganador:"Los Marranos",
                Perdedor:"Los Pumas",
                Empate:"NO"
            },
            ResultadoPenaltis:{
                EquipoA:"",
                EquipoB:""
            }
        },
        {
            Fase:"All in ALL",
            Fecha:"2023-10-11T15:00:00Z",
            DuracionPartido:"60 min",
            Enfrentamientos:{
                EquipoA:"Las Ardillas",
                EquipoB:"Las Hormigas"
            },
            AsistenciaEquipo:{
                EquipoA:"OK",
                EquipoB:"OK"
            },
            ArbitroCentral:"Guillermo Rodriguez",
            ArbitroLateralA:"Jose Ardila",
            ArbitroLateralB:"Henrri Espinoza",
            TarjetaAmarilla:{
                EquipoA:{
                    JugadorA:"Pedro Fernandez"
                },
                EquipoB:{
                    JugadorA:"Guillermo Castillo", 
                },
                Total:2
            },
            TarjetaRoja:{
                EquipoA:{},
                EquipoB:{},
                Total:0
            },            
            ResultadoPartido:{
                Ganador:"NO",
                Perdedor:"NO",
                Empate:"SI"
            },
            ResultadoPenaltis:{
                EquipoA:"5 Correctos",
                EquipoB:"4 Correctos, 1 Errado"
            }
        },
        {
            Fase:"SemiFinal",
            Fecha:"2023-10-12T15:00:00Z",
            DuracionPartido:"60 min",
            Enfrentamientos:{
                EquipoA:"Los Perro",
                EquipoB:"Los Pajaros"
            },
            AsistenciaEquipo:{
                EquipoA:"OK",
                EquipoB:"OK"
            },
            ArbitroCentral:"Mariana Zuares",
            ArbitroLateralA:"Jaime Pava",
            ArbitroLateralB:"Guillermo Rodriguez",
            TarjetaAmarilla:{
                EquipoA:{},
                EquipoB:{},
                Total:0
            },
            TarjetaRoja:{
                EquipoA:{},
                EquipoB:{},
                Total:0
            },            
            ResultadoPartido:{
                Ganador:"Los Perro",
                Perdedor:"Los Pajaros",
                Empate:"NO"
            },
            ResultadoPenaltis:{
                EquipoA:"",
                EquipoB:""
            }
        },
        {
            Fase:"SemiFinal",
            Fecha:"2023-10-12T20:00:00Z",
            DuracionPartido:"60 min",
            Enfrentamientos:{
                EquipoA:"Los Marranos",
                EquipoB:"Las Ardillas"
            },
            AsistenciaEquipo:{
                EquipoA:"NO",
                EquipoB:"OK"
            },
            ArbitroCentral:"Jose Ardila",
            ArbitroLateralA:"Alfonso Rengifo",
            ArbitroLateralB:"Tobias Salamanca",
            TarjetaAmarilla:{
                EquipoA:{},
                EquipoB:{},
                Total:0
            },
            TarjetaRoja:{
                EquipoA:{},
                EquipoB:{},
                Total:0
            },            
            ResultadoPartido:{
                Ganador:"Las Ardillas",
                Perdedor:"Los Marranos",
                Empate:"NO"
            },
            ResultadoPenaltis:{
                EquipoA:"",
                EquipoB:""
            }
        },
        {
            Fase:"Final",
            Fecha:"2023-10-13T20:00:00Z",
            DuracionPartido:"60 min",
            Enfrentamientos:{
                EquipoA:"Los Perros",
                EquipoB:"Las Ardillas"
            },
            AsistenciaEquipo:{
                EquipoA:"OK",
                EquipoB:"OK"
            },
            ArbitroCentral:"Tobias Salamanca",
            ArbitroLateralA:"Mariana Zuares",
            ArbitroLateralB:"Jaime Pava",
            TarjetaAmarilla:{
                EquipoA:{
                    JugadorA:"Juan Carlos Paez",
                    JugadorB:"Jorge Bravo",
                    JugadorC:"Sebastian Lopez",
                },
                EquipoB:{
                    JugadorA:"Edwin Rozo", 
                    JugadorB:"Pedro Fernandez", 
                },
                Total:5
            },
            TarjetaRoja:{
                EquipoA:{},
                EquipoB:{},
                Total:0
            },            
            ResultadoPartido:{
                Ganador:"NO",
                Perdedor:"NO",
                Empate:"SI"
            },
            ResultadoPenaltis:{
                EquipoA:"4 Correctos, 1 Errado",
                EquipoB:"2 Correctos, 3 Errados"
            }
        }
    ]
)


//Comprobación de la partición 1//
shard1 = new Mongo("localhost:20000")
shard1DB = shard1.getDB("Torneo")
shard1DB.Arbitros.count()


//Comprobación de la partición 2//
shard2= new Mongo("localhost:20001")
shard2DB = shard2.getDB("Torneo")
shard2DB.Arbitros.count()


//Comprobación de la partición 3//
shard3= new Mongo("localhost:20002")
shard3DB = shard3.getDB("Torneo")
shard3DB.Arbitros.count()


//Activamos el Sharding//
shard1 = new Mongo("localhost:20006") 
sh.status() 
sh.enableSharding("Torneo")


//Creamos los indices en las coleccciones//
db.Equipos.ensureIndex({NombreEquipo : 1})
db.Jugadores.ensureIndex({NombreEquipo : 1})
db.Entrenadores.ensureIndex({NombreEquipo : 1})
db.Arbitros.ensureIndex({Nombre : 1})
db.EncuentrosDepor.ensureIndex({Fase : 1})
db.Resultados.ensureIndex({Fecha : 1})


//Determinamos las colecciones //
sh.shardCollection("Torneo.Equipos", {NombreEquipo: 1})
sh.shardCollection("Torneo.Jugadores", {NombreEquipo: 1})
sh.shardCollection("Torneo.Entrenadores", {NombreEquipo: 1})
sh.shardCollection("Torneo.Arbitros", {Nombre: 1})
sh.shardCollection("Torneo.EncuentrosDepor", {Fase: 1})
sh.shardCollection("Torneo.Resultados", {Fecha: 1})


//Activamos el balanceador//
sh.getBalancerState() 
sh.setBalancerState(true) 
sh.getBalancerState() 
sh.isBalancerRunning()


//Visualizamos el estado de Sharing activos//
db.adminCommand( { listShards: 1 } )