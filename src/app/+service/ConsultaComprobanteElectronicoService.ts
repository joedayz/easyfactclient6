import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ConsultaComprobanteElectronicoInterno} from "@app/+dto/ConsultaComprobanteElectronicoInterno";

@Injectable()
export class ConsultaComprobanteElectronicoService {

    url = 'http://localhost:8999';



    constructor(private http: HttpClient) {
    }


    public consultaInterna(consultaComprobanteInterna:ConsultaComprobanteElectronicoInterno){

        const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

        return this.http.post(`${this.url}/ConsultaComprobanteElectronicoInterno`,
            JSON.stringify(consultaComprobanteInterna), {headers: headers});

    }


}