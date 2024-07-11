import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioarticuloComponent } from './formularioarticulo.component';

describe('FormularioarticuloComponent', () => {
  let component: FormularioarticuloComponent;
  let fixture: ComponentFixture<FormularioarticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioarticuloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioarticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
