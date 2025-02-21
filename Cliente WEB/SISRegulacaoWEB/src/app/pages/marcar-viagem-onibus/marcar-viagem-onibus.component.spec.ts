import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcarViagemOnibusComponent } from './marcar-viagem-onibus.component';

describe('MarcarViagemOnibusComponent', () => {
  let component: MarcarViagemOnibusComponent;
  let fixture: ComponentFixture<MarcarViagemOnibusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcarViagemOnibusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcarViagemOnibusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
