import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsPage } from './buttons.page';

describe('ButtonsPage', () => {
  let component: ButtonsPage;
  let fixture: ComponentFixture<ButtonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
