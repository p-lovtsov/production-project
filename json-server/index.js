const jsonServer = require('json-server');
const path = require('path');
const fs = require('fs');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 800);
  });

  next();
});

server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;

    const db = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8')
    );
    const { users } = db;

    const userFromDB = users.find(
      (user) => user.username === username && user.password === password
    );

    if (userFromDB) {
      return res.json(userFromDB);
    }

    return res.status(403).json({ message: 'User not found' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }
  next();
});

server.use(router);

server.listen(8000, () => {
  console.log('JSON Server is running on 8000 port');
});
