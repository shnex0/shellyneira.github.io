const express = require("express");
const app = express();
app.use("/", (req, res) => {
    console.log('Middleware running');
    next();
    res.send('Hello World!')
})

app.use("/add-product", (req,res,next) => {
    const addProductContent = `
    <!doctype html>
    <html lang="en">
    <head>
        <title>Add Product</title>
    </head>
    <body>
        <main>
            <h1>Add Product</h1>
            <section>
                <p>Products Data</p>
            </section>
        </main>

        <footer>
        <a href="/add-product">Go to Add Product page</a>
        </footer>
    </body>

    </html>
    `;
    res.send(addProductContent);
});

const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
