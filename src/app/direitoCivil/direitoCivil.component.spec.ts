/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DireitoCivilComponent } from './direitoCivil.component';

describe('DireitoCivilComponent', () => {
  let component: DireitoCivilComponent;
  let fixture: ComponentFixture<DireitoCivilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DireitoCivilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DireitoCivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
