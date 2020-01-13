import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

// Qoutations
export interface QoutationData {
  id: number;
  name: string;
  amount: number;
  duration: string;
}

const ELEMENT_DATA: QoutationData[] = [
  {
    id: 1,
    name: 'Motor third party',
    amount: 50000,
    duration: '365 Days'
  },
  {
    id: 1,
    name: 'Motor third party',
    amount: 50000,
    duration: '365 Days'
  },
  {
    id: 1,
    name: 'Motor third party',
    amount: 50000,
    duration: '365 Days'
  },
  {
    id: 1,
    name: 'Motor third party',
    amount: 50000,
    duration: '365 Days'
  },
  {
    id: 1,
    name: 'Motor third party',
    amount: 50000,
    duration: '365 Days'
  },
  {
    id: 1,
    name: 'Motor third party',
    amount: 50000,
    duration: '365 Days'
  },
  {
    id: 1,
    name: 'Motor third party',
    amount: 50000,
    duration: '365 Days'
  },
  {
    id: 1,
    name: 'Motor third party',
    amount: 50000,
    duration: '365 Days'
  },
  {
    id: 1,
    name: 'Motor third party',
    amount: 50000,
    duration: '365 Days'
  },
  {
    id: 1,
    name: 'Motor third party',
    amount: 50000,
    duration: '365 Days'
  }
];

// Debit note
export interface DebitNoteData {
  id: number;
  name: string;
  amount_paid: number;
  amount_remaining: number;
  duration: string;
}

const DEBIT_DATA: DebitNoteData[] = [
  {
    id: 1,
    name: 'Motor third party',
    amount_paid: 50000,
    amount_remaining: 50000,
    duration: '365 Days'
  },
  {
    id: 1,
    name: 'Motor third party',
    amount_paid: 50000,
    amount_remaining: 50000,
    duration: '365 Days'
  },
  {
    id: 1,
    name: 'Motor third party',
    amount_paid: 50000,
    amount_remaining: 50000,
    duration: '365 Days'
  },
  {
    id: 1,
    name: 'Motor third party',
    amount_paid: 50000,
    amount_remaining: 50000,
    duration: '365 Days'
  },
  {
    id: 1,
    name: 'Motor third party',
    amount_paid: 50000,
    amount_remaining: 50000,
    duration: '365 Days'
  },
  {
    id: 1,
    name: 'Motor third party',
    amount_paid: 50000,
    amount_remaining: 50000,
    duration: '365 Days'
  },
  {
    id: 1,
    name: 'Motor third party',
    amount_paid: 50000,
    amount_remaining: 50000,
    duration: '365 Days'
  },
  {
    id: 1,
    name: 'Motor third party',
    amount_paid: 50000,
    amount_remaining: 50000,
    duration: '365 Days'
  },
];


// Debit note
export interface ReceiptData {
  id: number;
  receipt_number: string;
  name: string;
  product_name: string;
  amount: number;
}

const RECEIPT_DATA: ReceiptData[] = [
  {
    id: 1,
    receipt_number: 'picz5435435',
    name: 'changa',
    product_name: 'Motor Third-Party',
    amount: 50000
  },
  {
    id: 1,
    receipt_number: 'picz5435435',
    name: 'changa',
    product_name: 'Motor Third-Party',
    amount: 50000
  },
  {
    id: 1,
    receipt_number: 'picz5435435',
    name: 'changa',
    product_name: 'Motor Third-Party',
    amount: 50000
  },
  {
    id: 1,
    receipt_number: 'picz5435435',
    name: 'changa',
    product_name: 'Motor Third-Party',
    amount: 50000
  },
  {
    id: 1,
    receipt_number: 'picz5435435',
    name: 'changa',
    product_name: 'Motor Third-Party',
    amount: 50000
  },
  {
    id: 1,
    receipt_number: 'picz5435435',
    name: 'changa',
    product_name: 'Motor Third-Party',
    amount: 50000
  },
  {
    id: 1,
    receipt_number: 'picz5435435',
    name: 'changa',
    product_name: 'Motor Third-Party',
    amount: 50000
  },
  {
    id: 1,
    receipt_number: 'picz5435435',
    name: 'changa',
    product_name: 'Motor Third-Party',
    amount: 50000
  }
];

@Component({
  selector: 'app-reciepting',
  templateUrl: './reciepting.component.html',
  styleUrls: ['./reciepting.component.scss']
})
export class RecieptingComponent implements OnInit {
  // Qoutations columns
  displayedColumns: string[] = ['id', 'name', 'amount', 'duration', 'actions'];

  // Qoutations data source
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  // Qoutation viewChild
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // Debit Note columns
  displayedDebitColumns: string[] = [
    'id',
    'name',
    'amount_paid',
    'amount_remaining',
    'duration',
    'actions'
  ];

  // Debit Note data source
  debitDataSource = new MatTableDataSource(DEBIT_DATA);

  // Debit Note viewChild
  @ViewChild('DebitMatPaginator', { static: true })
  debitPaginator: MatPaginator;
  @ViewChild('DebitMatSort', { static: true }) debitSort: MatSort;

  // Receipt columns
  displayedReceiptColumns: string[] = [
    'id',
    'receipt_number',
    'name',
    'product_name',
    'amount',
    'actions'
  ];

  // Debit Note data source
  receiptDataSource = new MatTableDataSource(RECEIPT_DATA);

  // Debit Note viewChild
  @ViewChild('ReceiptMatPaginator', { static: true })
  receiptPaginator: MatPaginator;
  @ViewChild('ReceiptMatSort', { static: true }) receiptSort: MatSort;
  constructor() {}

  ngOnInit() {
    // Qoutations
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // Debit Note
    this.debitDataSource.paginator = this.debitPaginator;
    this.debitDataSource.sort = this.debitSort;

    // Receipt
    this.receiptDataSource.paginator = this.receiptPaginator;
    this.receiptDataSource.sort = this.receiptSort;
  }

  // Qoutation filter
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Debit Note filter
  applyDebitFilter(filterValue: string) {
    this.debitDataSource.filter = filterValue.trim().toLowerCase();
  }

  // Receipt filter
  applyReceiptFilter(filterValue: string) {
    this.receiptDataSource.filter = filterValue.trim().toLowerCase();
  }

  //
  onSelect() {}
}
