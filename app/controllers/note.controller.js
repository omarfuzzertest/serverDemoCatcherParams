exports.parametersReceiver = function(req, res){
    var parametro1 = req.param('parametro1')
    var parametro2 = req.param('parametro2')
    var parametro3 = req.param('parametro3')
    res.send({
        "parametro1":parametro1,
        "parametro2":parametro2,
        "parametro3":parametro3
    });
        
}

exports.getArticles = function (req, res) {

    console.log(req.body)
    if (!req.body) {
        res.send({
            "codeOperation":-1,
            "description":"No se recibieron parametros en el servicio",
            "articles":[]
        });
    }else{
        if(req.body.catalogo=="electronicos"){
            res.send({
                "codeOperation":0,
                "description":"Operacion exitosa",
                "articles":[
                    {
                        "id":1,
                        "img":"https://www.soriana.com/medias/sys_master/images/images/h04/hea/8802761932830/Product-Image-34264485686-515.jpg",
                        "nombre":"plancha"
                    },
                    {
                        "id":2,
                        "img":"https://www.soriana.com/medias/sys_master/images/images/h08/h06/9018805780510/7501744612373-515x515.jpg",
                        "nombre":"lavadora"},
                    {
                        "id":3,
                        "img":"https://www.soriana.com/medias/sys_master/images/images/h44/h8c/9018803421214/7501744620224-515x515.jpg",
                        "nombre":"refrigerador"
                    }
                ]
            });
        }
    }
}


