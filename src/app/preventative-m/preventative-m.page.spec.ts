import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventativeMPage } from './preventative-m.page';

describe('PreventativeMPage', () => {
  let component: PreventativeMPage;
  let fixture: ComponentFixture<PreventativeMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreventativeMPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventativeMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
