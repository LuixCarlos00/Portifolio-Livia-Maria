/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MaisInformacoesGabrieleDassaComponent } from './MaisInformacoesGabrieleDassa.component';

describe('MaisInformacoesGabrieleDassaComponent', () => {
  let component: MaisInformacoesGabrieleDassaComponent;
  let fixture: ComponentFixture<MaisInformacoesGabrieleDassaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisInformacoesGabrieleDassaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisInformacoesGabrieleDassaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
