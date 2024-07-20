import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEditComponent } from './formulario-edit.component';

describe('FormularioEditComponent', () => {
  let component: FormularioEditComponent;
  let fixture: ComponentFixture<FormularioEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
