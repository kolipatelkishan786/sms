import {Component, OnInit} from '@angular/core';
import {IDataEntry} from '../interfaces/IDataEntry';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.scss']
})
export class DataEntryComponent implements OnInit {
  data: IDataEntry = <any>{};
  datas: IDataEntry[] = [
    {
      first_name: 'kishan',
      last_name: 'patel',
      email: 'skpatel@gmail.com',
      address: 'zolapur',
    }
  ];
  constructor() {
  }

  ngOnInit() {
    /* this.loadDummyData();*/
  }

  onSaveData() {
    // console.log(this.data);
    this.datas.push(this.data);
    this.data = <any> {};
    console.log(this.datas);
  }
}
