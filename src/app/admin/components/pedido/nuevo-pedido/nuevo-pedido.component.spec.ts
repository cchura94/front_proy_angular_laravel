import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPedidoComponent } from './nuevo-pedido.component';

describe('NuevoPedidoComponent', () => {
  let component: NuevoPedidoComponent;
  let fixture: ComponentFixture<NuevoPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuevoPedidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
