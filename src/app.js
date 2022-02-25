const cors = require('cors');
const express = require('express');
const apiRoutes = require('./routes/index');

require('dotenv').config()
const app = express();
const PORT = process.env.PORT

// app.use(cors())
let whiteList = ['http://localhost:3000']
let corsOption = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }  
}

app.use(express.json())
app.use('/api/v1', cors(corsOption),apiRoutes)

app.listen(PORT, () => {
  console.log(`Server runninh on port ${PORT}`)
})
