// const PORT=process.env.PORT || 8080;
const PORT = 8080;

// console.log(process.env.PORT);

const productList = [
    { productID: 111, productName: "Chair", min: 2, max: 10, current: 6, unitPrice: 250 },
    { productID: 222, productName: "Pencil", min: 70, max: 410, current: 55, unitPrice: 4 },
];

var express = require('express'),
    path = require('path'),
    cors = require('cors')
    ;

var app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, '/dist/products-client-server')));

app.use(express.json());

app.get('/product', (req, res) => {
    res.send(productList);
});

app.get('/product/:minPrice/:maxPrice/:minAmt/:maxAmt', (req, res) => {
    var q = req.params;
    var filteredList = productList.filter(product => product.current >= q.minAmt && product.current <= q.maxAmt &&
        product.unitPrice >= q.minPrice && product.unitPrice <= q.maxPrice);
    res.send(filteredList);
});

app.get('/product/:id', (req, res) => {
    try {
        var product = productList.find(p => p.productID == req.params.id);
        if (product)
            res.send(product);
        else {
            res.status(404);
            res.send({ message: 'Not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Server error' });
    }
});

app.delete('/product/:id', (req, res) => {
    try {
        console.log("Delete");
        var index = productList.findIndex(p => p.productID == req.params.id);
        if (index > -1) {
            productList.splice(index, 1);
            res.send({ message: 'Delete OK' });
        }
        else {
            res.status(404);
            res.send({ message: 'Not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Server error' });
    }
});


app.use('/product', (req, res, next) => {
    var error = {};
    var lenBefore = Object.keys(error).length;
    if (req.body.productID > 10000 || req.body.productID < 11)
        error.productID = "Illegal ID";
    if (req.body.productName.length < 3)
        error.productName = "Product name is too short";
    if (req.body.min > req.body.max) {
        error.min = "Minimum has to be less than the maximum";
        error.max = "Minimum has to be less than the maximum";
    };
    var lenAfter = Object.keys(error).length;
    if (lenAfter > lenBefore)
        next(error);
    else
        next();
});


// Another method:
// Object.keys(obj).length === 0 && obj.constructor === Object

app.use((err, req, res, next) => {

    if (err) {
        console.log(err);
        res.status(400);
        res.send(err);
    }
    else
        next();
});

app.post('/product', (req, res) => {
    try {
        productList.push(req.body);
        console.log(req.body);
        res.send({ message: 'Post OK' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Server error' });
    }
})

app.put('/product/:id', (req, res) => {
    try {
        var product = productList.find(p => p.productID == req.params.id);
        if (product) {
            product.productID = req.body.productID;
            product.productName = req.body.productName;
            product.min = req.body.min;
            product.max = req.body.max;
            product.current = req.body.current;
            product.unitPrice = req.body.unitPrice;
            res.send({ message: 'Put OK' });
        }
        else {
            res.status(404);
            res.send({ message: 'Not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Server error' });
    }
})

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});

















// app.use('/*',function(req, res) {
//     res.sendFile(path.join(__dirname + '/src/index.html'));
// });

// app.use('/', express.static('src', { redirect: false }));

// app.use('*',function(req, res) {
//     res.sendFile(path.resolve('/src/index.html'));
// });

// app.use('*',function(req, res) {
//     res.sendFile(path.join(__dirname + '/dist/products-client-server/index.html'));
//     // res.redirect('/src'); // return to main page
// });