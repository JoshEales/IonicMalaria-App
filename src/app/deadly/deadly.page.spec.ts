import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadlyPage } from './deadly.page';

describe('DeadlyPage', () => {
  let component: DeadlyPage;
  let fixture: ComponentFixture<DeadlyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadlyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadlyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
