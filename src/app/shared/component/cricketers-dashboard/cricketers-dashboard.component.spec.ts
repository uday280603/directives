import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketersDashboardComponent } from './cricketers-dashboard.component';

describe('CricketersDashboardComponent', () => {
  let component: CricketersDashboardComponent;
  let fixture: ComponentFixture<CricketersDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CricketersDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CricketersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
