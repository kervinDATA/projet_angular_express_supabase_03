const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:4200', // Modifier si nécessaire pour d'autres origines
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;
