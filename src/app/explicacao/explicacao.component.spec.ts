import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplicacaoComponent } from './explicacao.component';

describe('ExplicacaoComponent', () => {
  let component: ExplicacaoComponent;
  let fixture: ComponentFixture<ExplicacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplicacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
