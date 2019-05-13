// import dependencies
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

// require models for syncing
const db = require("./models");

// set up necessarily middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// tell server to ignore any requests being made to anything in the "public" folder
app.use(express.static("public"));

// set up templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');



require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

// set up wildcard (404) route
app.get('*', function(req, res) {
  res.json({
    status: 404,
    message: "You've come to the wrong place!"
  });
});

// Sync sequelize models, then start express app
<<<<<<< HEAD
=======

>>>>>>> 8b488ab24b9426c5676a72cfe68f663a663eec35
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, () => console.log(`🌍 => listening to http://localhost:${PORT}`));
});




