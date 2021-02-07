import express from "express";

export default class route {
  public controllers: any;
  public app: express.Application;
  
  constructor(app: express.Application) {
    this.controllers = {};
    this.app = app;
    this.setRoute();
  }

  response(obj: any, req: express.Request, res: express.Response, params = []) {
    if (typeof this.controllers[obj.controller] === 'undefined') {
      const Controller = require('../controllers/' + obj.controller);
      this.controllers[obj.controller] = new Controller();
    }

    this.controllers[obj.controller].setReqRes(req, res);
    this.controllers[obj.controller][obj.action](...params);
  }

  setRoute() {
    this.app.get('/', (req, res) => {
      this.response(
        {
          controller: 'main',
          action: 'index',
        },
        req,
        res
      );
    });

    this.app.get('/init-plans', (req, res) => {
      this.response(
        {
          controller: 'main',
          action: 'initPlans',
        },
        req,
        res
      );
    });

    this.app.post('/create-plan', (req, res) => {
      this.response(
        {
          controller: 'main',
          action: 'createPlan',
        },
        req,
        res
      );
    });

    this.app.get('/all-plans', (req, res) => {
      this.response(
        {
          controller: 'main',
          action: 'allPlans'
        },
        req,
        res
      );
    });


    this.app.get('/plan', (req, res) => {
      this.response(
        {
          controller: 'main',
          action: 'plan'
        },
        req,
        res
      );
    });

    this.app.post('/subscribe', (req, res) => {
      this.response(
        {
          controller: 'main',
          action: 'subscribe'
        },
        req,
        res
      );
    });

    this.app.put('/subscribe', (req, res) => {
      this.response(
        {
          controller: 'main',
          action: 'subscribe'
        },
        req,
        res
      );
    });
  }
}
