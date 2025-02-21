import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesadicionaisPage } from './informacoesadicionais.page';

describe('InformacoesadicionaisPage', () => {
  let component: InformacoesadicionaisPage;
  let fixture: ComponentFixture<InformacoesadicionaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacoesadicionaisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacoesadicionaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
