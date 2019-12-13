import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $
@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {

  constructor(private router: Router) { }





  obj = { "/user/user-overview": "Overview", "/user/AllUsers": "Users", "/user/roles": " Roles" }
  ngOnInit() {

    this.router.navigate(['/source/registerSource']);
    $(document).ready(function () {
      $("#test").hover(function () {
        $('#exampleModal').modal({
          show: true
        });
      });
    });
  }

}