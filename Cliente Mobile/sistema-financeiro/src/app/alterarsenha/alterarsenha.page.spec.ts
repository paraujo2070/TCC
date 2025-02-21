import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarsenhaPage } from './alterarsenha.page';

describe('AlterarsenhaPage', () => {
  let component: AlterarsenhaPage;
  let fixture: ComponentFixture<AlterarsenhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarsenhaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarsenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
