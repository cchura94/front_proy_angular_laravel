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
                label: 'UI Components',
                items: [
                    { label: 'Perfil', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/perfil'] },
                    { label: 'Usuarios', icon: 'pi pi-fw pi-user', routerLink: ['/admin/usuario'] },
                    { label: 'Persona', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
                    
                ]
            },
            {
                label: 'Gestión',
                items: [
                    { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW' },
                    { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
                ]
            },
            {
                label: 'Utilities',
                items: [
                    { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/utilities/icons'] },
                    { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
                ]
            }
        ];
    }
}