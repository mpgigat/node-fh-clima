
const  argv = require("./config/yargs").argv;
const lugar=require('./lugar/lugar')


lugar.getLugarLatLng(argv.direccion)
    .then(console.log)
    .catch(err => console.log(err.message))
