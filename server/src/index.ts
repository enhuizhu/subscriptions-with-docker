import express from 'express';
import mongoose from 'mongoose';
import expressSetting from './configs/expressConfig';
import Route from './routes/route';

const app: express.Application = express();

mongoose
  .connect(`mongodb://${process.env.DB_SERVERS}/${process.env.DB}`, {useNewUrlParser: true, useUnifiedTopology: true})
  .catch(error => {
    console.log('connection error', error)
  })
  .then(() => {
    expressSetting(app);
    new Route(app);
    app.listen(3000, () => {
      console.log('listening on port 3000');
    });
  });



