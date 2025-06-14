import express from 'express';

const app = express();
const PORT = 3001;

// Test with minimal routes
console.log('Creating basic routes...');

app.get('/', (req, res) => {
  res.json({ message: 'Test server working' });
});

console.log('Basic route created successfully');

app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
});