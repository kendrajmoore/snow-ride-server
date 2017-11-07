
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const handlebars = require('handlebars');
handlebars.registerHelper('dateformat', require('helper-dateformat'));
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

require('./controller/trips.js')(app);



mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/backSnow');



app.listen(3000, function () {
  console.log('Portfolio App listening on port 3000!')
})
