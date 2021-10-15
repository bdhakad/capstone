const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World! - 1.0.0'))
app.listen(80, () => console.log('Server ready'))