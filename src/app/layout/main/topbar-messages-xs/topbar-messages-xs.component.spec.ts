import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarMessagesXsComponent } from './topbar-messages-xs.component';

describe('TopbarMessagesXsComponent', () => {
  let component: TopbarMessagesXsComponent;
  let fixture: ComponentFixture<TopbarMessagesXsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarMessagesXsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarMessagesXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
