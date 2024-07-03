import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariodecompraComponent } from './formulariodecompra.component';

describe('FormulariodecompraComponent', () => {
  let component: FormulariodecompraComponent;
  let fixture: ComponentFixture<FormulariodecompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariodecompraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulariodecompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
