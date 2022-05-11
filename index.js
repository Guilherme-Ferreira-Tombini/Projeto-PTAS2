var express = require("express");
var app = express();
var {usuario} = require("./models");
var {empresa} = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))
//Usuarios
app.get("/usuarios", async function(req, res){
  var resultado = await usuario.findAll();
  res.json(resultado);
});

app.post("/usuarios", async function(req, res) {
  var resultado = await usuario.create(req.body);
  res.json(resultado);
});

app.put("/usuarios/:id", async function(req, res) {
  const id = await usuario.findByPk(req.params.id);
  const resultadoSave = await id.update(req.body);
  res.json(resultadoSave);
});

app.delete("/usuarios/:id", async function(req, res) {
 var resultado = usuario.destroy({ where: { id: req.params.id }});
  console.log(resultado);
  res.json(resultado)
});

app.get("/usuarios/:id", async function(req, res) {
 const id = await usuario.findByPk(req.params.id);
 res.json(id)
});

// Empresas
app.get("/empresas", async function(req, res){
  var resultado = await empresa.findAll();
  res.json(resultado);
});

app.post("/empresas", async function(req, res) {
  var resultado = await empresa.create(req.body);
  res.json(resultado);
});

app.put("/empresas/:id", async function(req, res) {
  const id = await empresa.findByPk(req.params.id);
  const resultadoSave = await id.update(req.body);
  res.json(resultadoSave);
});

app.delete("/empresas/:id", async function(req, res) {
 var resultado = empresa.destroy({ where: { id: req.params.id }});
  console.log(resultado);
  res.json(resultado)
});

app.get("/empresas/:id", async function(req, res) {
 const id = await empresa.findByPk(req.params.id);
 res.json(id)
});


app.listen(3000, function(){
  console.log("o servidor está no pique da viola")
});

//url temos 3 formas
// https://Projeto-PTAS2.guilhermetombin.repl.co/inserir?id=123 req.query.id
//https://Projeto-PTAS2.guilhermetombin.repl.co/inserir/123 req.params.id
// https://Projeto-PTAS2.guilhermetombin.repl.co/inserir req.body.id