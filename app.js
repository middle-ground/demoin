const express = require("express")
const app = express()
const port = 3000 

app.get("/pokemons", (req, res) => {
  res.status(200).json([{
    id: 1, 
    name: "Pikachoi"
  }])
})

app.get("/pokemons/:id", (req, res) => {
  console.log("HIAAA");
  res.status(200).json([{
    id: 1, 
    name: "Pikachoi"
  }])
})

app.post("/pokemons", (req, res) => {
  res.status(201).json({message: "Sucess add pokemon"})
})

app.get("/courses", (req, res) => {
  res.status(200).json([])
})

app.listen(port, () => {
  console.log("Aplikasi berjalan 40000");
})