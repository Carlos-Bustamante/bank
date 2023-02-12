import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from '../models/client';

@Injectable({
    providedIn: 'root'
})
export class ClientService{
    private url = 'http://localhost:5066';
    
    
    constructor(private http: HttpClient){}

    getClient(): Observable<Cliente[]>{
        return this.http.get<Cliente[]>(`${this.url}/Client`);
    }
    getId(id: string): Observable<any>{
        return this.http.get(`${this.url}/Client/${id}`);
    }
    
    // postClient( client: Cliente): Observable<any>{
    //     return this.http.post(this.url , client);
    // }

    postClient( client: Cliente): Observable<Cliente[]>{
        return this.http.post<Cliente[]>(`${this.url}/client`, client);
    }

    putClient( client: Cliente, id: string): Observable<any>{
        return this.http.put(`${this.url}/client/${id}`, client);
    }

    deletClient(id: string): Observable<any>{
        return this.http.delete(`${this.url}/Client/${id}`);
    }

}