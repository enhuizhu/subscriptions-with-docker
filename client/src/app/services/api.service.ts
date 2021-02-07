import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from '../models/subscription';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { 

  }

  getAllPlans() {
    return this.httpClient.get(this.getPath('all-plans'));
  }

  getUserSubscription() {
    return this.httpClient.get(this.getPath('plan'));
  }

  updateUserSubscription(newPlans: Subscription[]) {
    return this.httpClient.put(this.getPath('subscribe'), newPlans);
  }

  initPlans() {
    return this.httpClient.get(this.getPath('init-plans'));
  }

  getPath(path: string): string {
    return `${this.baseUrl}/${path}`;
  }
}
