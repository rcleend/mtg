import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtgInputPage } from './mtg-input.page';

describe('MtgInputPage', () => {
  let component: MtgInputPage;
  let fixture: ComponentFixture<MtgInputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtgInputPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtgInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
