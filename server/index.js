const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const aiRoutes = require('./routes/ai');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/ai', aiRoutes);

app.get('/', (req, res) => {
  res.send('Klod AI API Running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));

