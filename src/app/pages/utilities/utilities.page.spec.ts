import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitiesPage } from './utilities.page';

describe('UtilitiesAnimationPage', () => {
  let component: UtilitiesPage;
  let fixture: ComponentFixture<UtilitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilitiesPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
