import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
// const cloudinaryConfig = require('./server/Utils/cloudinayConfig')
// const routes = require('./server/routes')
import { cloudinaryConfig } from './Utils/cloudinayConfig';
import routes from './routes'

// Set up the express app
const app = express();

dotenv.config();
app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('*', cloudinaryConfig);
app.use('/', routes);
// app.use(express.static(path.join(__dirname, '../frontend')));

// require('./server/routes')(app)
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.use((req, res, next) => {
    const error = new Error('not found');
    error.status = 404;
    next(error);
  });
  
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
  });

const port = process.env.PORT || 3000;

// if (!module.parent) {
  app.listen(port, () => {
    console.log(`server listening on port ${port}`);
  });
// }
// module.exports = app;
export default app;