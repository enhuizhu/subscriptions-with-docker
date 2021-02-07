import { controller } from '../core/controller';

module.exports = class main extends controller {
  constructor(req: any, res: any) {
    super();
    this.loadModel('subscriptions');
    this.loadModel('subscribed');
  }

  index() {
    this.res.end('Hi, api is working');
  }

  createPlan() {
    const payload = this.getRequestPayload();
    
    this.models['subscriptions'].cratePlan(payload).then((result: any) => {
      this.sendSuccessMsg(result);
    }).catch((error: any) => {
      this.sendErrorMsg(error);
    });
  }

  allPlans() {
    this.models['subscriptions'].allPlans().then((response: any) => {
      this.sendSuccessMsg(response);
    }).catch((error: any) => {
      this.sendErrorMsg(error);
    })
  }

  initPlans() {
    const plans =[
      {
        planCode: 'gb',
        name: 'UK',
        monthlyCost: 10,
        yearlyCost: 50,
      },
      {
        planCode: 'fr',
        name: 'France',
        monthlyCost: 10,
        yearlyCost: 60,
      },
      {
        planCode: 'de',
        name: 'Germany',
        monthlyCost: 15,
        yearlyCost: 75,
      },
      {
        planCode: 'us',
        name: 'USA',
        monthlyCost: 25,
        yearlyCost: 150,
      },
      {
        planCode: 'jp',
        name: 'Japan',
        monthlyCost: 15,
        yearlyCost: 65,
      }
    ];

    this.models['subscriptions'].initPlans(plans).then((results: any) => {
      this.sendSuccessMsg(results);
    }).catch((e: any) => {
      this.sendSuccessMsg(e);
    });
  }

  plan() {
    this.models['subscribed'].getSubscribedPlan(this.req.ip)
      .then((result: any) => {
        this.sendSuccessMsg(result);
      }).catch((error: any) => {
        this.sendErrorMsg(error);
      });
  }

  subscribe() {
    const payload = this.getRequestPayload();
    
    this.models['subscribed'].subscribe({userIP: this.req.ip, payload}).then((response: any) => {
      this.sendSuccessMsg(response);
    }).catch((error: any) => {
      this.sendErrorMsg(error);
    });
  }
};
