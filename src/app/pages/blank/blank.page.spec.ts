import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankPage } from './blank.page';

describe('BlankComponent', () => {
  let component: BlankPage;
  let fixture: ComponentFixture<BlankPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
