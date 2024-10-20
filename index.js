const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Use CORS middleware
server.use(cors());
server.use(middlewares);
server.use(router);

// Custom CORS headers (if needed)
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Update '*' to your frontend's origin for production
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
