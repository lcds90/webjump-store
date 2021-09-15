const app = require('connect')()
const serveStatic = require('serve-static')
const cors = require('cors');
const port = process.env.PORT || 8888;

app.use(cors())
// Serve up mock-api folder
app.use('/api', serveStatic('mock-api', {
  'index': false,
  'setHeaders': setJsonHeaders
}))

// Set header to force download
function setJsonHeaders (res, path) {
  res.setHeader('Content-type', 'application/json')
}

function setHeaders (res, path) {
    res.setHeader('Cache-Control', 'public, max-age=0')
}

// Serve up public folder
app.use('/', serveStatic('public', {'index': ['index.html', 'index.htm'], setHeaders}))

app.listen(port, function() {
  console.log(`Acesse: http://localhost:${port}`)
});
