const express = require('express')
const products = require('./data/products')
const path = require('path')

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

app.listen(5000, console.log(`Server running on port 5000`))
