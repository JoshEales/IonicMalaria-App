import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsPage } from './what-is.page';

describe('WhatIsPage', () => {
  let component: WhatIsPage;
  let fixture: ComponentFixture<WhatIsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
