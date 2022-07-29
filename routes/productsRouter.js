const express = require('express');
const faker = require('faker');
const ProductService = require('./../services/product.service')
const router = express.Router();
const service = new ProductService();

router.get('/', async (req, res) => {
    const products = await service.find();
    res.json(products);
});

router.get('/module', (req, res) => {
    const products = [];
    for ( let index = 0; index < 5; index++) {
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 5),
            imageUrl: faker.image.imageUrl(),
            image: faker.image.cats(),
            datatype: faker.datatype.json()
        });
    }
    res.json(products);
});


// ruta especifica

router.get('/filter' , (req, res) => {
    res.send('Esta es una ruta especifica de filter');
});

// ruta dinamica
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
});
// Metodo post
router.post('/', async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
});

// metodo put es igual al metodo patch
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: 'update complete width method put',
        data: body,
        id,
    });
});

// Metodo path
router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const product = await service.update(id, body);
        res.json(product);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
});

// Metodo delete
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);
});


module.exports = router;