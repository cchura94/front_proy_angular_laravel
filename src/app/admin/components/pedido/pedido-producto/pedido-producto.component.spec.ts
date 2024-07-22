import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoProductoComponent } from './pedido-producto.component';

describe('PedidoProductoComponent', () => {
  let component: PedidoProductoComponent;
  let fixture: ComponentFixture<PedidoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PedidoProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
