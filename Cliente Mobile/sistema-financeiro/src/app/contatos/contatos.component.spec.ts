import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosComponent } from './contatos.component';

describe('ContatosComponent', () => {
  let component: ContatosComponent;
  let fixture: ComponentFixture<ContatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatosComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
