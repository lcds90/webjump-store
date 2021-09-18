var app = require('connect')()
var serveStatic = require('serve-static')
var cors = require('cors');
var port = process.env.PORT || 8888

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

// Serve up public folder
app.use('/', serveStatic('public', {'index': ['index.html', 'index.htm']}))

app.listen(port, function() {
    console.log('Acesse: http://localhost:8888')
});
