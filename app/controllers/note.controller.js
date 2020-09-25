exports.parametersReceiver = function(req, res){
    var parametro1 = req.param('parametro1')
    var parametro2 = req.param('parametro2')
    var parametro3 = req.param('parametro3')

    //TODO HACER AQUI LA LOGICA QUE SE NECESITE HACER CON LOS PARAMETROS RECIBIDOS

    res.sendStatus(200);
    res.send("ok");
}

