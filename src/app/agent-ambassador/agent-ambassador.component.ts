import { Component, OnInit,ViewChild} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {SelectionModel} from '@angular/cdk/collections';

export interface partners {
  name:string;
  charge:number;
  time:number;
  timeunit:string;
  selected:string;
}


const elementData : partners[] = [
{name:'Barakatele Sacco',charge:1,time:5,timeunit:'days',selected:'Choose'},
{name:'Wakadiri Sacco',charge:2,time:1,timeunit:'day',selected:'Choose'},
{name:'Stima Sacco',charge:3,time:4,timeunit:'hours',selected:'Choose'},
{name:'KCD - Sacco',charge:4,time:1,timeunit:'hours',selected:'Choose'},
{name:'Mwalimu - Sacco',charge:5,time:3,timeunit:'days',selected:'Choose'},
{name:'Police Sacco',charge:5,time:2,timeunit:'days',selected:'Choose'},
{name:'Kikwetu Sacco',charge:8,time:6,timeunit:'hours',selected:'Choose'},
{name:'Kangeta Farmers Sacco',charge:5,time:6,timeunit:'hours',selected:'Choose'},
{name:'Mkulima Sacco',charge:5,time:14,timeunit:'hours',selected:'Choose'},
{name:'Wakaridi Sacco',charge:2,time:7,timeunit:'days',selected:'Choose'}
];

@Component({
  selector: 'app-agent-ambassador',
  templateUrl: './agent-ambassador.component.html',
  styleUrls: ['./agent-ambassador.component.css']
})
export class AgentAmbassadorComponent implements OnInit {
  displayedColumns : string[] = ['name','charge','time','selected'];
  dataSource = new MatTableDataSource<partners>(elementData);

  @ViewChild(MatPaginator,{static:true}) paginator : MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
