const app = require('connect')();
const serveStatic = require('serve-static');
const cors = require('cors');

const port = process.env.PORT || 8888;

app.use(cors());

// Set header to force download
function setJsonHeaders(res) {
  res.setHeader('Content-type', 'application/json');
}

// Serve up mock-api folder
app.use('/api', serveStatic('mock-api', {
  index: false,
  setHeaders: setJsonHeaders,
}));

// Serve up public folder
app.use('/', serveStatic('public', { index: ['index.html', 'index.htm'] }));

app.listen(port, () => {
  console.log(`Acesse: http://localhost:${port}`);
});
