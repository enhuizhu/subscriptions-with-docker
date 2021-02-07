import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from '../../models/subscription';
import { UserSubscription } from '../../models/userSubscription';

@Component({
  selector: 'app-user-selected-plans',
  templateUrl: './user-selected-plans.component.html',
  styleUrls: ['./user-selected-plans.component.scss']
})
export class UserSelectedPlansComponent implements OnInit {
  @Input() userPlan: UserSubscription | undefined;
  
  public MONTHLY = 1;
  public YEARLY = 2;

  public currentSelection = this.YEARLY;

  constructor() { }

  ngOnInit(): void {
  }

  getTotal(): number {
    return this.userPlan 
      && this.userPlan.subscriptions.reduce((total: number, subscription: Subscription) => {
        return total += (this.currentSelection === this.YEARLY ? subscription.yearlyCost : subscription.monthlyCost);
      }, 0) || 0
  }
}
