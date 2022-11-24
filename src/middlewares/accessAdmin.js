let admins = ['Greta','Ada','Tim','Vin']
module.exports = (req,res,next) => {
    if (admins.includes(req.query.user)) {
        next()
    }else{
        res.render('desconocido')
    }

}