import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarRequisicaoComponent } from './cadastrar-requisicao.component';

describe('CadastrarRequisicaoComponent', () => {
  let component: CadastrarRequisicaoComponent;
  let fixture: ComponentFixture<CadastrarRequisicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarRequisicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarRequisicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
