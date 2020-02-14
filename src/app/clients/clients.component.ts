import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CreateClientComponent } from '../create-client/create-client.component';
import { ViewIndividualClientComponent } from '../view-individual-client/view-individual-client.component';
import { CreateCorporateClientComponent } from '../create-corporate-client/create-corporate-client.component';
import { ViewCorporateClientComponent } from '../view-corporate-client/view-corporate-client.component';

// individual Client
export interface ClientData {
  id: number;
  name: string;
  identitification: string;
  phone_number: string;
}

const ELEMENT_DATA: ClientData[] = [
  {
    id: 1,
    name: 'changa',
    identitification: 'dddd',
    phone_number: '456547657657'
  },
  {
    id: 1,
    name: 'changa',
    identitification: 'dddd',
    phone_number: '456547657657'
  },
  {
    id: 1,
    name: 'changa',
    identitification: 'dddd',
    phone_number: '456547657657'
  },
  {
    id: 1,
    name: 'changa',
    identitification: 'dddd',
    phone_number: '456547657657'
  },
  {
    id: 1,
    name: 'changa',
    identitification: 'dddd',
    phone_number: '456547657657'
  },
  {
    id: 1,
    name: 'changa',
    identitification: 'dddd',
    phone_number: '456547657657'
  },
  {
    id: 1,
    name: 'changa',
    identitification: 'dddd',
    phone_number: '456547657657'
  },
  {
    id: 1,
    name: 'changa',
    identitification: 'dddd',
    phone_number: '456547657657'
  },
  {
    id: 1,
    name: 'changa',
    identitification: 'dddd',
    phone_number: '456547657657'
  },
  {
    id: 1,
    name: 'changa',
    identitification: 'dddd',
    phone_number: '456547657657'
  },
  {
    id: 1,
    name: 'changa',
    identitification: 'dddd',
    phone_number: '456547657657'
  },
  {
    id: 1,
    name: 'changa',
    identitification: 'dddd',
    phone_number: '456547657657'
  },
  {
    id: 1,
    name: 'changa',
    identitification: 'dddd',
    phone_number: '456547657657'
  },
  {
    id: 1,
    name: 'changa',
    identitification: 'dddd',
    phone_number: '456547657657'
  }
];

// Corporate client
export interface CorporateClientData {
  id: number;
  name: string;
  registration: string;
  contact: string;
  email: string;
}

const CORPORATE_DATA: CorporateClientData[] = [
  {
    id: 1,
    name: 'dhanga',
    registration: 'dddd',
    contact: '456547657657',
    email: 'c@a.b'
  },
  {
    id: 1,
    name: 'changa',
    registration: 'dddd',
    contact: '456547657657',
    email: 'c@a.b'
  },
  {
    id: 1,
    name: 'changa',
    registration: 'dddd',
    contact: '456547657657',
    email: 'c@a.b'
  },
  {
    id: 1,
    name: 'changa',
    registration: 'dddd',
    contact: '456547657657',
    email: 'c@a.b'
  },
  {
    id: 1,
    name: 'changa',
    registration: 'dddd',
    contact: '456547657657',
    email: 'c@a.b'
  },
  {
    id: 1,
    name: 'changa',
    registration: 'dddd',
    contact: '456547657657',
    email: 'c@a.b'
  },
  {
    id: 1,
    name: 'changa',
    registration: 'dddd',
    contact: '456547657657',
    email: 'c@a.b'
  },
  {
    id: 1,
    name: 'changa',
    registration: 'dddd',
    contact: '456547657657',
    email: 'c@a.b'
  },
  {
    id: 1,
    name: 'changa',
    registration: 'dddd',
    contact: '456547657657',
    email: 'c@a.b'
  },
  {
    id: 1,
    name: 'changa',
    registration: 'dddd',
    contact: '456547657657',
    email: 'c@a.b'
  },
  {
    id: 1,
    name: 'changa',
    registration: 'dddd',
    contact: '456547657657',
    email: 'c@a.b'
  },
  {
    id: 2,
    name: 'dhang',
    registration: 'dddd',
    contact: '456547657657',
    email: 'c@a.b'
  }
];


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  // Individual client columns
  displayedColumns: string[] = [
    'id',
    'name',
    'identitification',
    'phone_number',
    'actions'
  ];

  // Corporate Client Columns
  displayedCorporateColumns: string[] = [
    'id',
    'name',
    'registration',
    'contact',
    'email',
    'actions'
  ];

  // individual client data source
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  // corporate client data source
  corporateDataSource = new MatTableDataSource(CORPORATE_DATA);

  // individual client viewChild
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // corporate viewChild
  @ViewChild(MatPaginator, { static: true }) corporatePaginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) corporateSort: MatSort;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    // corporate client
    this.corporateDataSource.paginator = this.corporatePaginator;
    this.corporateDataSource.sort = this.corporateSort;

    // individual client
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // individual client filter
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // corporate client filter
  applyCorporateFilter(filterValue: string) {
    this.corporateDataSource.filter = filterValue.trim().toLowerCase();
  }

  // create user
  onOpenDialog() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(CreateClientComponent, dialogConfig);
  }

  // create corporate client
  onOpenCorporateDialog() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(CreateCorporateClientComponent, dialogConfig);
  }

  // view user
  onOpenDetailsDialog() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(ViewIndividualClientComponent, dialogConfig);
  }

  // view user
  onOpenCorporateDetailsDialog() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(ViewCorporateClientComponent, dialogConfig);
  }

  // edit user
  onOpenEditDialog() {}
}
