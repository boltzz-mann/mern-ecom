const express = require('express')
const products = require('./data/products')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const dirname = path.dirname(__dirname)

// app.get('/', (req, res) => {
//     res.send('API is running')
// })

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

app.use(express.static(path.join(dirname, '/frontend/build')))

app.get('*', function (req, res) {
    res.sendFile(path.resolve(dirname, 'frontend', 'build', 'index.html'))
})

const PORT = process.env.PORT || 5000
const NODE_ENV = process.env.NODE_ENV

app.listen(PORT, console.log(`Server running in ${NODE_ENV} on port ${PORT}`))
