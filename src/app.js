const cors = require('cors');
const express = require('express');
const apiRoutes = require('./routes/index');

require('dotenv').config()
const app = express();
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())
app.use('/api/v1', apiRoutes)

app.listen(PORT, () => {
  console.log(`Server runninh on port ${PORT}`)
})
