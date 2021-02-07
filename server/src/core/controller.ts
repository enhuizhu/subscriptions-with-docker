import express from 'express';

export class controller {
  public models: any;
  public req: any;
  public res: any;

  constructor() {
    this.models = {};
    this.sendErrorMsg = this.sendErrorMsg.bind(this);
    this.sendSuccessMsg = this.sendSuccessMsg.bind(this);
  }

  getRequestPayload() {
    if (this.req.rawBody) {
      return JSON.parse(this.req.rawBody);
    }

    return this.req.body;
  }
  
  setReqRes(req: express.Request, res: express.Response) {
    this.req = req;
    this.res = res;
  }

  loadModel(modelName: string) {
    const Model = require('../models/' + modelName);
    this.models[modelName] = new Model();
  }

  checkRawbody() {
    try {
      var obj = JSON.parse(this.req.rawBody);
    } catch (e) {
      this.res.end('invalid JSON');
      return;
    }

    return obj;
  }

  sendErrorMsg(msg?: string) {
    this.res.send({
      success: false,
      msg: msg || 'unknown error',
    });
  }

  sendSuccessMsg(result: any) {
    let obj: any = {
      success: true,
    };

    if (result) {
      obj.data = result;
    }

    this.res.send(obj);
  }

  sendStandApiResponse(result: any) {
    if (!result) {
      this.sendErrorMsg();
    } else if (typeof result === 'string') {
      this.sendErrorMsg(result);
    } else {
      this.sendSuccessMsg(result);
    }
  }
}
