const fs = require('fs')
const path = require('path')
let fecha = new Date
module.exports = (req,res,next) => {
  fs.appendFileSync(path.join(__dirname,'../logs/userLogs.txt'),'El usuario ingreso a la ruta: '+ req.url/* PATH es lo mismo */ + ' ------ el dia: '+ fecha+ '\n')
  next()

}

