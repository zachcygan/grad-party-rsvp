const express = require('express');
const routes = require('./routes');
const path = require('path');
const db = require('./config/connection');
const exphbs = require('express-handlebars');

const app = express();

const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers })

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server is running on port ${PORT}!`);
      });
})

