export interface Subscription {
  planCode: string,
  name: string,
  monthlyCost: number,
  yearlyCost: number,
  [key: string]: any,
}
