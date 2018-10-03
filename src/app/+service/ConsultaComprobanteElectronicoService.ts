import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConsultaComprobanteElectronicoInterno} from "@app/+dto/ConsultaComprobanteElectronicoInterno";

@Injectable()
export class ConsultaComprobanteElectronicoService {

    url = 'http://localhost:8999';

    constructor(private http: HttpClient) {
    }


    public consultaInterna(consultaComprobanteInterna:ConsultaComprobanteElectronicoInterno){


        debugger;
        return this.http.post(`${this.url}/ConsultaComprobanteElectronicoInterno`,
            JSON.stringify(consultaComprobanteInterna));

    }


}