import mongoose from 'mongoose';

const { Schema }  = mongoose;

const subscribedSchema = new Schema({
  userIP: {
    type: String,
    required: true,
    index: true,
  },

  subscriptions: [{
    type: Schema.Types.ObjectId,
    ref: 'subscription',
  }]
});

export const subscribed = mongoose.model('subscribed', subscribedSchema);


module.exports = class subscriptionModel {
  public model: mongoose.Model<any>;

  constructor() {
    this.model = subscribed;
  }

  async subscribe(data: any): Promise<any> {
    // need to check if it's already exist or not
    const count = await this.model.countDocuments({userIP: data.userIP});

    if (count > 0) {
      return this.updateSubscribedPlan(data.userIP, data);
    } else {
      return this.model.create({userIP: data.userIP, subscriptions: data.payload.map((d: any) => d._id)});
    }
  }

  updateSubscribedPlan(userIP: string, newPlans: any) {
    return this.model.findOneAndUpdate({ userIP }, {subscriptions: newPlans.payload.map((plan: any) => plan._id)}, { new: true});
  }

  getSubscribedPlan(userIP: any): Promise<any> {
    return this.model
      .find({userIP})
      .populate({
        path: 'subscriptions',
      }).exec();
  }
}
