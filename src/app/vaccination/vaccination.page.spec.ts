import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationPage } from './vaccination.page';

describe('VaccinationPage', () => {
  let component: VaccinationPage;
  let fixture: ComponentFixture<VaccinationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
