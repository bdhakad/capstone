const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World! - RED'))
app.listen(80, () => console.log('Server ready'))