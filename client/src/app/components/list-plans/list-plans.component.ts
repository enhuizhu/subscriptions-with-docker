import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from '../../models/subscription';

@Component({
  selector: 'app-list-plans',
  templateUrl: './list-plans.component.html',
  styleUrls: ['./list-plans.component.scss']
})
export class ListPlansComponent implements OnInit {
  @Input() allPlans: Subscription[] | undefined;
  @Output() onUpdate = new EventEmitter();
  
  constructor() { 
  }

  ngOnInit(): void {
  }

  updatePlans() {
    this.onUpdate.emit();
  }
}
