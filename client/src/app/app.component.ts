import { Component, AfterViewInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Subscription } from './models/subscription';
import { UserSubscription } from './models/userSubscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  public allPlans: Subscription[] = [];
  public userPlan: UserSubscription | undefined;

  constructor(private apiService: ApiService) {
    
  }

  initPlans() {
    this.apiService.initPlans().subscribe((response: any) => {
      if (response.success) {
        this.getAllPlans();
      } else {
        this.handleError(response.msg);
      } 
    }, this.handleError)
  }

  handleError(e: any) {
    console.error(e);
  }

  ngAfterViewInit() {
    this.getUserSubscription(this.getAllPlans.bind(this));
  }

  updatePlans() {
    const selectedPlans = this.allPlans
      .filter(plan => plan.checked);
    
    this.apiService.updateUserSubscription(selectedPlans)
      .subscribe((response: any) => {
        if (response.success) {
          this.getUserSubscription();
        } else {
          this.handleError(response.msg);
        }
      }, this.handleError);
  }

  updateCheckFlags() {
    if (this.userPlan && this.userPlan.subscriptions) {
      const selectedIds = this.userPlan.subscriptions.map((plan: Subscription)  => plan._id);

      this.allPlans.forEach((plan: Subscription) => {
        plan.checked = selectedIds.includes(plan._id);
      });
    }
  }
  

  getAllPlans() {
    this.apiService.getAllPlans().subscribe((response: any) => {
      if (response.success) {
        this.allPlans = response.data;
        this.updateCheckFlags();
      } else {
        this.handleError(response.msg);
      }
    }, this.handleError);
  }

  getUserSubscription(callback?: Function) {
    this.apiService.getUserSubscription().subscribe((response: any) => {
      if (response.success) {
        if (response.data.length > 0) {
          this.userPlan = response.data[0];
        }
        
        callback && callback();
      } else {
        this.handleError("no plan");
      }
    }, this.handleError);
  }
}
