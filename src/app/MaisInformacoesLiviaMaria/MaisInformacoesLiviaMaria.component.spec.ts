/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MaisInformacoesLiviaMariaComponent } from './MaisInformacoesLiviaMaria.component';

describe('MaisInformacoesLiviaMariaComponent', () => {
  let component: MaisInformacoesLiviaMariaComponent;
  let fixture: ComponentFixture<MaisInformacoesLiviaMariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisInformacoesLiviaMariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisInformacoesLiviaMariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
