const express = require("express")
const app = express()
const port = 3000 

app.get("/pokemons", (req, res) => {
  console.log("HAI");
  res.status(200).json([{
    id: 1, 
    name: "Pikachoi"
  }])
})

app.put("/pokemons/:id", (req, res) => {
  res.status(200).json({message: "Update pokemon PUT"})
})

app.patch("/pokemons/:id", (req, res) => {
  res.status(200).json({message: "Update pokemon PATCH"})
})

app.get("/pokemons/:id", (req, res) => {
  console.log("HAI");
  res.status(200).json([{
    id: 1, 
    name: "Pikachoi"
  }])
})

app.listen(port, () => {
  console.log("Aplikasi berjalan");
})