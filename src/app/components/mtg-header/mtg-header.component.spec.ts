import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtgHeaderPage } from './mtg-header.page';

describe('MtgHeaderPage', () => {
  let component: MtgHeaderPage;
  let fixture: ComponentFixture<MtgHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtgHeaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtgHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
