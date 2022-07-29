const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        {
            categorie: faker.commerce.productAdjective(),
        },
        {
            categorie: faker.commerce.productAdjective(),
        },
    ]);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        categorie: faker.commerce.productAdjective(),
    });
});

// post
router.post('/', (req, res) => {
    const body = req.body;
    res.json({
        message: 'Creation categories',
        data: body
    });
});

// update complete
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: 'Update complete categories width put',
        data: body,
        id
    });
});

// update patch
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: 'Update partial width patch',
        data: body,
        id
    });
});

// delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'deleted categories',
        id
    });
});

router.get('/:categoryId/products/:productId', (req, res) => {
    const { categoryId, productId } = req.params;
    res.json({
        categoryId,
        productId,
    });
});

module.exports = router;

