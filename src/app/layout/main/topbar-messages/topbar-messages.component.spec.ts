import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarMessagesComponent } from './topbar-messages.component';

describe('TopbarMessagesComponent', () => {
  let component: TopbarMessagesComponent;
  let fixture: ComponentFixture<TopbarMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
