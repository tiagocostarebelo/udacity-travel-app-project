const app = require('./server');

const PORT = process.env.PORT || 8010;
app.listen(PORT, function() {
    console.log(`server is listening on localhost ${PORT}`)
});