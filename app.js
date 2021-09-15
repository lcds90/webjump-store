const APP = require('connect')()
const serveStatic = require('serve-static')
const cors = require('cors');
const PORT = process.env.PORT || 8888;

APP.use(cors())
// Serve up mock-api folder
APP.use('/api', serveStatic('mock-api', {
  'index': false,
  'setHeaders': setJsonHeaders
}))

// Set header to force download
function setJsonHeaders (res, path) {
  res.setHeader('Content-type', 'application/json')
}

// Serve up public folder
APP.use('/', serveStatic('public', {'index': ['index.html', 'index.htm']}))

APP.listen(PORT, function() {
  console.log(`Acesse: http://localhost:${PORT}`)
});
