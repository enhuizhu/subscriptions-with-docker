import { Subscription } from './subscription';

export interface UserSubscription {
  userIP: string,
  subscriptions: Subscription[],
  [key: string]: any,
}
