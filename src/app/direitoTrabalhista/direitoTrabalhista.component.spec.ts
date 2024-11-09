/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DireitoTrabalhistaComponent } from './direitoTrabalhista.component';

describe('DireitoTrabalhistaComponent', () => {
  let component: DireitoTrabalhistaComponent;
  let fixture: ComponentFixture<DireitoTrabalhistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DireitoTrabalhistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DireitoTrabalhistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
