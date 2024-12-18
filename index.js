
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = 3000;


app.use(express.json());


const mongoUri = 'mongodb+srv://vinicius:vgss1234@cluster0.bb1kp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


app.use('/products', productRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});