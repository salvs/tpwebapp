import { Component, OnInit, Input } from '@angular/core';

import { Cleanup } from './cleanup';
import { CleanupService } from './cleanup.service';

@Component({
  selector: 'app-cleanup',
  templateUrl: './cleanup.component.html',
  styleUrls: ['./cleanup.component.css'],
  providers: [ CleanupService ]
})
export class CleanupComponent implements OnInit {

  constructor(private cleanupService: CleanupService) {
    
   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getPersonCleanup();
  }

  @Input() personId: number;
  cleanup: Array<Cleanup>;
  error: any;

  getPersonCleanup() {
    console.log(this.personId);
    if (this.personId == undefined) {
      this.cleanupService.getCleanup().subscribe(
        data => {
          this.cleanup = data as Cleanup[];
          console.log(data);
        },
        error => {
          error: this.error;
          console.log(this.error);  
        }
      )
    } else {
      this.cleanupService.getPersonCleanup(this.personId).subscribe(
        data => {
          this.cleanup = data as Cleanup[];
          console.log(data);
        },
        error => {
          error: this.error;
          console.log(this.error);  
        }
      )
    }
  }

}
