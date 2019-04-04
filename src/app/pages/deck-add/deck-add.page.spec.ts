import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckAddPage } from './deck-add.page';

describe('DeckAddPage', () => {
  let component: DeckAddPage;
  let fixture: ComponentFixture<DeckAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
