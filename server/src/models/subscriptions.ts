import mongoose from 'mongoose';

const { Schema } = mongoose;

export const planCodes = [
  'gb',
  'fr',
  'de',
  'us',
  'jp'
];

const subscriptionSchema = new Schema({
  planCode: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
    enum: planCodes,
  },
  name: {
    type: String,
    required: true,
  },
  monthlyCost: {
    type: Number,
    required: true,
  },
  yearlyCost: {
    type: Number,
    required: true,
  }
});

export const subscription = mongoose.model('subscription', subscriptionSchema);

module.exports = class subscriptionModel {
  public model: mongoose.Model<any>;

  constructor() {
    this.model = subscription;
  }

  cratePlan(data: any): Promise<any> {
    return this.model.create(data);
  }

  allPlans(): Promise<any> {
    return this.model.find().exec();
  }

  initPlans(dataArr: any[]) {
    const promises = dataArr.map(data => {
      return this.cratePlan(data);
    })

    return Promise.all(promises);
  }
}
