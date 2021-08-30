import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { PaymentsService } from 'src/app/services/payments.service';

export interface UserData {
  id: string;
  title: string;
  completed: string;
  userId: string;
}
 

@Component({
  selector: 'app-all-payments',
  templateUrl: './all-payments.component.html',
  styleUrls: ['./all-payments.component.css']
})
export class AllPaymentsComponent implements OnInit {

  isLoadingResults: boolean = true;

  totalRecords: number = 0;

  displayedColumns: string[] = ['id', 'title', 'completed', 'userId'];

  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: PaymentsService) {}

  ngOnInit(): void {

    this.getToDos();

  }

  getToDos() {

    this.service.getTodos().subscribe(result => {

    this.dataSource = new MatTableDataSource(result);

    this.totalRecords = result.length;

    this.dataSource.paginator = this.paginator;
    
    this.dataSource.sort = this.sort;

    this.isLoadingResults = false;
    
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
