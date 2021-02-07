import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSelectedPlansComponent } from './user-selected-plans.component';

describe('UserSelectedPlansComponent', () => {
  let component: UserSelectedPlansComponent;
  let fixture: ComponentFixture<UserSelectedPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSelectedPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSelectedPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
