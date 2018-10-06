import {Component, OnInit} from '@angular/core';
import {ConsultaComprobanteElectronicoService} from "@app/+service/ConsultaComprobanteElectronicoService";
import {Cabecera} from "@app/+dto/Cabecera";
import {SelectItem} from "primeng/api";
import {ConsultaComprobanteElectronicoInterno} from "@app/+dto/ConsultaComprobanteElectronicoInterno";

@Component({
    selector: 'comprobantes-electronicos',
    templateUrl: 'comprobantes-electronicos.component.html',
    providers : [ConsultaComprobanteElectronicoService]
})

export class ComprobantesElectronicosComponent implements OnInit {

    consultaComprobanteInterna: ConsultaComprobanteElectronicoInterno = new ConsultaComprobanteElectronicoInterno();

    cabeceras : Cabecera[] = [];

    tipoDocumentos: SelectItem[];

    constructor( private consultaComprobanteElectronicoService: ConsultaComprobanteElectronicoService) {
    }

    ngOnInit() {

        this.tipoDocumentos = [];
        this.tipoDocumentos.push({label:'Todos', value:null});
        this.tipoDocumentos.push({label:'Factura', value:'01'});
        this.tipoDocumentos.push({label:'Boleta de Venta', value:'03'});
        this.tipoDocumentos.push({label:'Nota de Credito', value:'07'});
        this.tipoDocumentos.push({label:'Nota de Debito', value:'08'});
        this.tipoDocumentos.push({label:'Retenciones', value:'20'});
    }


    consultar(){

        this.consultaComprobanteElectronicoService.consultaInterna(this.consultaComprobanteInterna).subscribe(
            (data: Cabecera[]) => {


                this.cabeceras = data;
            },
            error => {
                console.log(error);

            }
        );
    }

}