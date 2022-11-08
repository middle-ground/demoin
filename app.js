const express = require("express")
const app = express()
const port = 3000 

app.get("/", (req, res) => {
  console.log("HAI");
  res.status(200).json([{
    id: 1, 
    name: "Pikachoi"
  }])
})

app.listen(port, () => {
  console.log("Aplikasi berjalan");
})