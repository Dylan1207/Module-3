// app.js

const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<h1>Welcome to My Express App!</h1>');
});

app.get('/about', (req, res) => {
    res.send('<p>This is a simple Express application for learning purposes.</p>');
});

app.get('/contact', (req, res) => {
    const { name, email, other } = req.query;
    if (name && email && other) {
        res.send(`Thank you, ${name}! We have received your message.`);
    } else {
        res.send(`
            <form action="/contact" method="GET">
                <input type="text" name="name" placeholder="Name" required><br>
                <input type="email" name="email" placeholder="Email" required><br>
                <input type="text" name="other" placeholder="Other Contact" required><br>
                <button type="submit">Submit</button>
            </form>
        `);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});