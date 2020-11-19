const axios = require('axios');

const getLugarLatLng = async (ciudad)=> {
    const encodeUrl=encodeURI(ciudad);
   
    const resp= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&appid=dbc4f09efe61d125531e87b607b1198a&units=metric`)
                            .then(resp=> {
                                return {status:false,data:resp.data}
                            })
                            .catch(err => {
                                return {status:true}
                            })                          

    console.log("Reviseeeeeeeee:  ",resp.status);
    if(resp.status) throw new Error(`No se pudo determinar el clima para: ${ciudad}`);
                            
    const direccion=resp.data.name;
    const lat=resp.data.coord.lat;
    const lon=resp.data.coord.lon;
    const temp=resp.data.main.temp;

    
    return `${direccion} esta a ${temp} grados, sus coordenadas son: Lat(${lat})-Lng(${lon})`

}

module.exports={getLugarLatLng}

//git init
//git status
//agregar ignore y readme
//git add .
