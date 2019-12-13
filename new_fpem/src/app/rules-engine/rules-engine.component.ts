import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare var $;
@Component({
  selector: 'app-rules-engine',
  templateUrl: './rules-engine.component.html',
  styleUrls: ['./rules-engine.component.css']
})
export class RulesEngineComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/rules/createrule']);
    $(document).ready(function () {
      $("#test").hover(function () {
        $('#exampleModal').modal({
          show: true
        });
      });
    });
  }

}
