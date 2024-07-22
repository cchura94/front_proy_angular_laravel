import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Administración',
                items: [
                    { label: 'Admin', icon: 'pi pi-fw pi-home', routerLink: ['/admin'] }
                ]
            },
            {
                label: 'Gestión de Usuarios',
                items: [
                    { label: 'Perfil', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/perfil'] },
                    { label: 'Usuarios', icon: 'pi pi-fw pi-user', routerLink: ['/admin/usuario'] },
                    { label: 'Persona', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/admin/persona'] },
                    
                ]
            },
            {
                label: 'Gestión Productos',
                items: [
                    { label: 'Categoria', icon: 'pi pi-fw pi-eye', routerLink: ['/admin/categoria'] },
                    { label: 'Productos', icon: 'pi pi-fw pi-globe', routerLink: ['/admin/producto'] },
                ]
            },
            {
                label: 'Gestión Pedidos',
                items: [
                    { label: 'Lista Pedidos', icon: 'pi pi-fw pi-eye', routerLink: ['/admin/pedido'] },
                    { label: 'Nuevo Pedido', icon: 'pi pi-fw pi-globe', routerLink: ['/admin/pedido/nuevo'] },
                ]
            }
        ];
    }
}
