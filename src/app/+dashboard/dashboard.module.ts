import {NgModule} from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import {routing} from './dashboard.routing';
import {ComprobantesElectronicosComponent} from "./+comprobantes-electronicos/comprobantes-electronicos.component";

import {SharedModule} from "@app/shared/shared.module";
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {TableModule} from 'primeng/table';
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
    imports: [

        HttpClientModule,
        routing,
        SharedModule,
        DropdownModule,
        CalendarModule,
        TableModule,
        DialogModule,
        InputTextModule

    ],
    declarations: [ComprobantesElectronicosComponent],
    providers: [],
})
export class DashboardModule {

}

