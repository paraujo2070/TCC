import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarRequisicaoEDAEUSGComponent } from './cadastrar-requisicao-edaeusg.component';

describe('CadastrarRequisicaoEDAEUSGComponent', () => {
  let component: CadastrarRequisicaoEDAEUSGComponent;
  let fixture: ComponentFixture<CadastrarRequisicaoEDAEUSGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarRequisicaoEDAEUSGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarRequisicaoEDAEUSGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
