import { Component, OnInit } from '@angular/core';
import { ManualService } from '../../service/manual.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxSpinnerService } from 'ngx-spinner';
declare var $: any;
@Component({
  selector: 'app-manual-journal',
  templateUrl: './manual-journal.component.html',
  styleUrls: ['./manual-journal.component.css']
})
export class ManualJournalComponent implements OnInit {

  constructor(private toastr: ToastrManager, private manualService: ManualService, private spinner: NgxSpinnerService, ) { }

  fpemUser;
  allFields;
  Journal = [];
  store;
  file_id;
  table_data = [];
  keys = [];
  values = [];
  new_line = {};
  header = {};
  temp;
  TotalTableFields = [];
  journal_header_field = [];
  journal_non_header_field = [];
  FieldNameToId: Map<String, String> = new Map<String, String>();
  async  ngOnInit() {

    this.fpemUser = JSON.parse(localStorage.getItem('fpemUser'));
    this.getconfiguredJournalInfo();
    this.getconfiguredFields();
    
  }

  async add() {
    var obj = Object.assign({}, this.new_line)
    this.table_data.push(obj)
  }

  delete(i) {
    this.table_data.splice(i, 1)
  }

  submit() {

    var arr = [];
    for (let i = 0; i < this.table_data.length; i++) {

      this.keys = (Object.keys(this.table_data[i]));
      this.values = (Object.values(this.table_data[i]));

      var obj = new Object();

      for (let i = 0; i < this.keys.length; i++) {
        var key = this.keys[i];
        this.temp = this.FieldNameToId.get(key);
        obj[this.temp] = this.values[i];
      }


      this.keys = (Object.keys(this.header));
      this.values = (Object.values(this.header));

      for (let i = 0; i < this.keys.length; i++) {
        var key = this.keys[i];
        this.temp = this.FieldNameToId.get(key);
        obj[this.temp] = this.values[i];
      }
      arr.push(obj);
    }
    console.log(arr)
  }



  async  getconfiguredFields() {
    var resp1 = await this.manualService.getconfiguredFields(this.fpemUser.acct_id);
    this.allFields = resp1.data;
  }
  async getconfiguredJournalInfo() {

    var resp = await this.manualService.getconfiguredJournalInfo(this.fpemUser.acct_id);

    this.Journal = resp.data;
    this.journal_non_header_field = [];
    this.journal_header_field = [];
    this.TotalTableFields = [];
    for (let i = 0; i < this.Journal.length; i++) {
      this.store = this.Journal[i].store;
      this.file_id = this.Journal[i].file_id;
      if (this.Journal[i].is_header == 1) {
        this.journal_header_field.push(this.Journal[i]);

      }
      else {
        this.journal_non_header_field.push(this.Journal[i]);
        this.TotalTableFields.push(this.Journal[i].business_field_name);
      }
    }


    for (let i = 0; i < this.TotalTableFields.length; i++) {
      this.new_line[this.TotalTableFields[i]] = '';
    }

    for (let i = 0; i < this.journal_header_field.length; i++) {
      this.header[this.journal_header_field[i].business_field_name] = '';
    }
   //create map
    this.FieldNameToId.clear();
    for (let i = 0; i < this.Journal.length; i++) {
      this.FieldNameToId.set(this.Journal[i].business_field_name, 'c_' + this.Journal[i].field_id);
    }
  }

}
