//node app -d "New York"
const axios = require('axios');

const argv=require('yargs').options({
    direccion:{
        alias:'d',
        desc:'Direccion de la ciudad para obtener el clima',
        demand:true
    }
}).argv;

//node app -d "San Jose"
console.log(argv.direccion);

const encodeUrl=encodeURI(argv.direccion);

//https://openweathermap.org/current
//axios promesas 

axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&appid=dbc4f09efe61d125531e87b607b1198a`)
    .then(response => console.log('aqui',response))
    .catch(err => console.log(err.message));

////ejemcplo con headers
// const instance = axios.create({
//     baseURL: 'url que necesite encabezado',   
//     headers: {'X-Custom-Header': 'foobar'}
// });
// instance.get()
//     .then(resp=>{})
//     .catch(err =>{});