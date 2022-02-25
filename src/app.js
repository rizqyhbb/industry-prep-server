const cors = require('cors');
const express = require('express');
const apiRoutes = require('./routes/index');

require('dotenv').config()
const app = express();
const PORT = process.env.PORT

app.use(express.json())

// app.use(cors())
// let whiteList = ['http://localhost:3000']
// let corsOptionsDelegate = function (req, callback) {
//   let corsOptions;
//   if (whiteList.indexOf(req.header('Origin')) !== -1) {
//     corsOptions = { origin: true }
//   } else {
//     corsOptions = { origin: false }
//   }
//   callback(null, corsOptions)
// }

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*")
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.get()

app.use('/api/v1', apiRoutes)

app.listen(PORT, () => {
  console.log(`Server runninh on port ${PORT}`)
})
