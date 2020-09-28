import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarAlertsComponent } from './topbar-alerts.component';

describe('TopbarAlertsComponent', () => {
  let component: TopbarAlertsComponent;
  let fixture: ComponentFixture<TopbarAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
