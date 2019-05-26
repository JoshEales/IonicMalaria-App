import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotDeadlyPage } from './not-deadly.page';

describe('NotDeadlyPage', () => {
  let component: NotDeadlyPage;
  let fixture: ComponentFixture<NotDeadlyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotDeadlyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotDeadlyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
