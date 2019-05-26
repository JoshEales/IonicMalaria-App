import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CausesPage } from './causes.page';

describe('CausesPage', () => {
  let component: CausesPage;
  let fixture: ComponentFixture<CausesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CausesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CausesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
