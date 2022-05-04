var express = require("express");
var app = express();
var {usuario} = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/", async function(req, res){
  var resultado = await usuario.findAll();
  res.json(resultado);
});

app.post("/", async function(req, res) {
  var resultado = await usuario.create(req.body);
  res.json(resultado);
});

app.put("/:id", async function(req, res) {
  const id = await usuario.findByPk(req.params.id);
  res.json(id.nome="Joao");
  const resultadoSave = await id.save();
  console.log(resultadoSave);
});

app.delete("/:id", async function(req, res) {
 var resultado = usuario.destroy({ where: { id: req.params.id }});
  console.log(resultado);
  res.json(resultado)
});

app.get("/:id", async function(req, res) {
 const id = await usuario.findByPk(req.params.id);
 res.json(id)
});


app.listen(3000, function(){
  console.log("o servidor está no pique da viola")
});

//url temos 3 formas
// https://Projeto-PTAS2.guilhermetombin.repl.co/inserir?id=123 req.query.id
//https://Projeto-PTAS2.guilhermetombin.repl.co/inserir/123 req.params.id
// https://Projeto-PTAS2.guilhermetombin.repl.co/inserir req.body.id