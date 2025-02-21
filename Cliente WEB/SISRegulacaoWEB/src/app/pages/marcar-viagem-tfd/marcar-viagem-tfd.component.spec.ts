import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcarViagemTFDComponent } from './marcar-viagem-tfd.component';

describe('MarcarViagemTFDComponent', () => {
  let component: MarcarViagemTFDComponent;
  let fixture: ComponentFixture<MarcarViagemTFDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcarViagemTFDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcarViagemTFDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
