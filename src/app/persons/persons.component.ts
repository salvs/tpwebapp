import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service';


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
  providers: [ PersonService ]
})
export class PersonsComponent implements OnInit {

  persons: Array<Person>;
  error: any;
  selectedPerson: number;

  constructor(private personService: PersonService) { 
    this.getPersons();
  }

  ngOnInit() {
  }

  getPersons() {
    console.log('getting persons');
    this.personService.getPersons().subscribe(
      data => {
        this.persons = data as Person[];
      },
      error => {
        error: error;
        console.log("Erorr" + error);
      }
   )
  }

  onSelectPerson(id: number) {
    this.selectedPerson = id;
  }

}
