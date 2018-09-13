import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'

    })
  };



@Injectable()
export class PersonService {

    personUrl = 'http://localhost:8080/api/tp/person/';
    personCleanupUrl = this.personUrl + 'c/';
    
    constructor (private http: HttpClient) {}

    getPersons() {
         return this.http.get(this.personUrl, httpOptions);
    }

    getPersonCleanup(id: number) {
      return this.http.get(this.personCleanupUrl + id, httpOptions);
  }
    

}

