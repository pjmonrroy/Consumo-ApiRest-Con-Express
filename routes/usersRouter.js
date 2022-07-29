/*
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const { limit, offset } = req.query;
    if (limit && offset) {
        res.json({
            limit,
            offset,
        });
    }else {
        res.send('No hay parametros por usuarios');
    }
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
        res.json({
            id,
            name: 'Jeans',
            age: 32,
            role: 'Front-End'
        });
});

module.exports = router;
*/

// nuevo metodo
const express = require('express');
const router = express.Router();
const faker = require('faker');
// users
router.get('/', (req, res) => {
    const users = [];
    const {size} = req.query;
    const limit = size || 10;
    for (let i = 0; i < limit; i++) {
        users.push({
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        image: faker.image.imageUrl(),
        });
    }
    res.json(users);
});

// user
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        image: faker.image.imageUrl(),
    });
});

// post
router.post('/', (req, res) => {
    const body = req.body;
    res.json({
        message: 'Creation new user',
        data: body
    });
});

// update complete
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: 'Update complete width put',
        data: body,
        id
    });
});

// update patch
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: 'Update width patch',
        data: body,
        id
    });
});

// delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'deleted user',
        id
    });
});

module.exports = router;

