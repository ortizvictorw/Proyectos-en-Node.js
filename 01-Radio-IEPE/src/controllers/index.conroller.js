const indexCtrl = {};
const pool = require('../database');


let nombre= ()=>{
    if(fecha==1){
        return 'Juventud Cristiana'
    }else if(fecha==6){
       return 'Culto del Sabado' 
    }else if(fecha==0){
       return 'Culto del Domingo' 
       
}else{
   return 'Arriba Hermanos !!' 
}
}
var fecha =new Date().getDay();


indexCtrl.renderIndex = async(req, res) => {
        const linksIndex =await pool.query('SELECT * FROM links');
        console.log(linksIndex)
        res.render('index', { nombre,linksIndex});
    }



module.exports = indexCtrl;
