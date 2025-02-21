import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastresePage } from './cadastrese.page';

describe('CadastresePage', () => {
  let component: CadastresePage;
  let fixture: ComponentFixture<CadastresePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastresePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastresePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
