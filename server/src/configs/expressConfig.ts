import session from 'client-sessions';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

export default function expressSetting(app: express.Application ) {
  app.use(cors({origin: true, credentials: true}));
  
  app.use(
    session({
      cookieName: 'session',
      secret: 'eg[isfd-8yF9-7w2315df{}+Ijsli;;to8',
      duration: 30 * 60 * 1000,
      activeDuration: 5 * 60 * 1000,
    })
  );

  app.use(bodyParser.json());

  app.use((req: any, res: express.Response, next) => {
    const contentType = req.headers['content-type'] || '';
    const mime = contentType.split(';')[0];

    if (mime !== 'text/plain') {
      return next();
    }

    let data = '';
    req.setEncoding('utf8');

    req.on('data', (chunk: any) => {
      data += chunk;
    });

    req.on('end', () => {
      req.rawBody = data;
      next();
    });
  });

  app.use(
    bodyParser.urlencoded({
      // to support URL-encoded bodies
      extended: true,
    })
  );

  app.use(bodyParser.raw());
}
