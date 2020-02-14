import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogConfig } from '@angular/material';
import { AddQueryComponent } from '../add-query/add-query.component';

// Query
export interface QueryData {
  id: number;
  query_title: string;
  client_name: string;
  phone: string;
  date: string;
  query_status: string;
}

const QUERY_DATA: QueryData[] = [
  {
    id: 1,
    query_title: 'john willy',
    client_name: 'ewrew',
    phone: '0977323421',
    date: '2020/01/10',
    query_status: 'rer'
  },
  {
    id: 1,
    query_title: 'john willy',
    client_name: 'ewrew',
    phone: '0977323421',
    date: '2020/01/10',
    query_status: 'rer'
  },
  {
    id: 1,
    query_title: 'john willy',
    client_name: 'ewrew',
    phone: '0977323421',
    date: '2020/01/10',
    query_status: 'rer'
  },
  {
    id: 1,
    query_title: 'john willy',
    client_name: 'ewrew',
    phone: '0977323421',
    date: '2020/01/10',
    query_status: 'rer'
  },
  {
    id: 1,
    query_title: 'john willy',
    client_name: 'ewrew',
    phone: '0977323421',
    date: '2020/01/10',
    query_status: 'rer'
  },
  {
    id: 1,
    query_title: 'john willy',
    client_name: 'ewrew',
    phone: '0977323421',
    date: '2020/01/10',
    query_status: 'rer'
  },
  {
    id: 1,
    query_title: 'john willy',
    client_name: 'ewrew',
    phone: '0977323421',
    date: '2020/01/10',
    query_status: 'rer'
  },
  {
    id: 1,
    query_title: 'john willy',
    client_name: 'ewrew',
    phone: '0977323421',
    date: '2020/01/10',
    query_status: 'rer'
  }
];

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'query_title',
    'client_name',
    'phone',
    'date',
    'query_status',
    'actions'
  ];

  dataSource = new MatTableDataSource(QUERY_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onOpenDialog() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(AddQueryComponent, dialogConfig);
  }
}
