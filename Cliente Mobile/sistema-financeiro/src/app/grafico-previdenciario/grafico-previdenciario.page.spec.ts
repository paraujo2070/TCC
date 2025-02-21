import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Chart } from 'chart.js';
import { Component, ViewChild } from '@angular/core';
import { GraficoPrevidenciarioPage } from './grafico-previdenciario.page';

describe('GraficoPrevidenciarioPage', () => {
  let component: GraficoPrevidenciarioPage;
  let fixture: ComponentFixture<GraficoPrevidenciarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoPrevidenciarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoPrevidenciarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

