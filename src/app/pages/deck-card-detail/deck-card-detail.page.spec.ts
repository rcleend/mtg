import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckCardDetailPage } from './deck-card-detail.page';

describe('DeckCardDetailPage', () => {
  let component: DeckCardDetailPage;
  let fixture: ComponentFixture<DeckCardDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckCardDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckCardDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
