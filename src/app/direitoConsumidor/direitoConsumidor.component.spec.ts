/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DireitoConsumidorComponent } from './direitoConsumidor.component';

describe('DireitoConsumidorComponent', () => {
  let component: DireitoConsumidorComponent;
  let fixture: ComponentFixture<DireitoConsumidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DireitoConsumidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DireitoConsumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
