const express = require('express');
const app = express();

const port = process.env.PORT || 8444;

// Example route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Additional routes can be added here
app.get('/about', (req, res) => {
    res.send('About Us');
});

// Catch-all route for 404 errors
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const server = app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});

server.on('error', (err) => {
    console.error('Server error:', err);
});
