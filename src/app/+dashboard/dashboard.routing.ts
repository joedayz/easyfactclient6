
import {Routes, RouterModule} from '@angular/router';
import {ComprobantesElectronicosComponent} from "./+comprobantes-electronicos/comprobantes-electronicos.component";


export const routes: Routes = [
    {
        path: '', redirectTo: 'analytics', pathMatch: 'full'
    },
    {
        path: 'comprobantesElectronicos',
        component: ComprobantesElectronicosComponent,
        data: {pageTitle: 'Comprobantes Elecronicos'}

    }
];

export const routing = RouterModule.forChild(routes);
