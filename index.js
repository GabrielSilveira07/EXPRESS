const express = require("express");  //importando express
const app = express();  //iniciando express 


app.get("/", function (requisicao, resposta) {
    resposta.send("bem vindo ao site")
})


app.get("/blog/:artigo?", function (requisicao, resposta) {

    var artigo = requisicao.params.artigo

    if (artigo) {
        resposta.send("<h2>artigo: " + artigo + "<h2>")
    } else

        resposta.send("<h1>bem vindo ao blog<h1>")

})


app.get("/canal/youtube", function (requisicao, resposta) {
    resposta.send("bem vindo ao canal")
})


app.get("/ola/:nome/:empresa", function (requisicao, resposta) {
    //REQ=>DADOS ENVIADOS PELO USUARIO
    //RES=>RESPOSTA QUE VAI SER ENVIADA AO USER
    var nome = requisicao.params.nome
    var empresa = requisicao.params.empresa
    resposta.send("<h1>oi " + nome + " do " + empresa + " <h1> ")
})







app.listen(4000, function (erro) {
    if (erro) {
        console.log("ocorreu um erro");
    } else {
        console.log("iniciado com sucesso");
    }
})
