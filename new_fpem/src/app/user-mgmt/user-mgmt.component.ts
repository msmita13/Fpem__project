import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $

@Component({
  selector: 'app-user-mgmt',
  templateUrl: './user-mgmt.component.html',
  styleUrls: ['./user-mgmt.component.css']
})
export class UserMgmtComponent implements OnInit {

  constructor(private router: Router) { }







  // obj = { "/user/user-overview": "Overview", "/user/AllUsers": "Users", "/user/roles": " Roles" }
  ngOnInit() {

    this.router.navigate(['/usermgmt/users']);
    $(document).ready(function () {
      $("#test").hover(function () {
        $('#exampleModal').modal({
          show: true
        });
      });
    });
  }

}