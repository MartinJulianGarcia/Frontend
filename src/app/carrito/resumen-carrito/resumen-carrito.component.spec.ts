import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenCarritoComponent } from './resumen-carrito.component';

describe('ResumenCarritoComponent', () => {
  let component: ResumenCarritoComponent;
  let fixture: ComponentFixture<ResumenCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumenCarritoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumenCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
