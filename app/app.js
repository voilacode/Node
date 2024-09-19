const express = require('express');
const app = express();
const indexRoutes = require('./routes/indexRoutes');

app.set('view engine', 'ejs');

app.use('/', indexRoutes);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
