const express = require('express');
const routerApi  = require('./routes/index');
const app = express();
const port = 3000;


app.use(express.json());
// mandamos a llamar products
routerApi(app);
//categoriesApi(app);

// la respuesta que le damos al cliente
// (req, res)  es el callback que necesita dos valores

app.get('/', (req, res) => {
    res.send('Hola mi server en express');
});

app.get('/home', (req, res) => {
    res.send('Welcome at my pages de home');
});

app.get('/nueva-ruta', (req, res) => {
    res.send('Hola, mi nueva ruta en server en express');
});


// mandamos llamar user
// users();

/*
// AGREGAR UN RUTA CON ESPECIFICACIONES
app.get('/products', (req, res) => {
    const products = [];
    const { size } = req.query;
    const limit = size || 10;
    for ( let index = 0; index < limit; index++) {
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl(),
        });
    }
    res.json(products);
});
// ruta especifica

app.get('/products/filter' , (req, res) => {
    res.send('Esta es una ruta especifica de filter con app');
})

// ruta dinamica
app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        name: 'Product 2',
        price: 2000
    });
});
*/

/*
app.get('/categories/:categoryId/products/:productId', (req, res) => {
    const { categoryId, productId } = req.params;
    res.json({
        categoryId,
        productId,
    });
});

*/
// mandamos a llamar categories

// query params



// le indicanos en que puerto
app.listen(port, () => {
    // cuando este se este ejecutando nos mande la respuesta
    console.log('Mi port' + port );
  // para mostrar a mas telefonos console.log("http://"+ IP +":" + port + "/");
});
