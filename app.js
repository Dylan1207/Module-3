const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Home route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to My Express App!</h1>');
});

// About route
app.get('/about', (req, res) => {
    res.send('<p>This is a simple Express application for learning purposes.</p>');
});

// Contact form route (GET)
app.get('/contact', (req, res) => {
    res.send(`
        <form action="/contact" method="POST">
            <input type="text" name="name" placeholder="Name" required><br>
            <input type="email" name="email" placeholder="Email" required><br>
            <input type="text" name="other" placeholder="Other Contact" required><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

// Contact form submission (POST)
app.post('/contact', (req, res) => {
    const { name, email, other } = req.body;
    if (name && email && other) {
        res.send(`Thank you, ${name}! We have received your message.`);
    } else {
        res.send('Please provide all required information.');
    }
});

// New services route
app.get('/services', (req, res) => {
    res.send('<h2>Our Services</h2><ul><li>Web Development</li><li>Mobile App Development</li><li>SEO Optimization</li></ul>');
});

// 404 error handling route
app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1><p>Sorry, the page you are looking for does not exist.</p>');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
