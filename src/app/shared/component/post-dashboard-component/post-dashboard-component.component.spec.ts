import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDashboardComponentComponent } from './post-dashboard-component.component';

describe('PostDashboardComponentComponent', () => {
  let component: PostDashboardComponentComponent;
  let fixture: ComponentFixture<PostDashboardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDashboardComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDashboardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
