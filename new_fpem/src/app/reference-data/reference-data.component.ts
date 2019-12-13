import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare var $;
@Component({
  selector: 'app-reference-data',
  templateUrl: './reference-data.component.html',
  styleUrls: ['./reference-data.component.css']
})
export class ReferenceDataComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/referencedata/insert']);
    $(document).ready(function () {
      $("#test").hover(function () {
        $('#exampleModal').modal({
          show: true
        });
      });
    });
  }

}
