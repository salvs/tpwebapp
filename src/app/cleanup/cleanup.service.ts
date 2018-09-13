import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };



@Injectable()
export class CleanupService {

    cleanupUrl = 'http://localhost:8080/api/tp/cleanup';
    personCleanupUrl = 'http://localhost:8080/api/tp/person/c/';
    
    constructor (private http: HttpClient) {}

    getCleanup() {
      return this.http.get(this.cleanupUrl, httpOptions);
    }

    getPersonCleanup(id: number) {
        return this.http.get(this.personCleanupUrl + id, httpOptions);
    }
    

}

