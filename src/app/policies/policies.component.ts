import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

// Policy
export interface PolicyData {
  ref: string;
  client_name: string;
  product: string;
  number_of_vehicles: number;
  total_premium: number;
  start_date: string;
  end_date: string;
}

const POLICY_DATA: PolicyData[] = [
  {
    ref: 'pics4354353',
    client_name: 'john willy',
    product: 'Motor Third Party',
    number_of_vehicles: 10,
    total_premium: 7002,
    start_date: '2020/01/10',
    end_date: '2020/12/30'
  },
  {
    ref: 'pics4354353',
    client_name: 'john willy',
    product: 'Motor Third Party',
    number_of_vehicles: 10,
    total_premium: 7002,
    start_date: '2020/01/10',
    end_date: '2020/12/30'
  },
  {
    ref: 'pics4354353',
    client_name: 'john willy',
    product: 'Motor Third Party',
    number_of_vehicles: 10,
    total_premium: 7002,
    start_date: '2020/01/10',
    end_date: '2020/12/30'
  },
  {
    ref: 'pics4354353',
    client_name: 'john willy',
    product: 'Motor Third Party',
    number_of_vehicles: 10,
    total_premium: 7002,
    start_date: '2020/01/10',
    end_date: '2020/12/30'
  },
  {
    ref: 'pics4354353',
    client_name: 'john willy',
    product: 'Motor Third Party',
    number_of_vehicles: 10,
    total_premium: 7002,
    start_date: '2020/01/10',
    end_date: '2020/12/30'
  },
  {
    ref: 'pics4354353',
    client_name: 'john willy',
    product: 'Motor Third Party',
    number_of_vehicles: 10,
    total_premium: 7002,
    start_date: '2020/01/10',
    end_date: '2020/12/30'
  },
  {
    ref: 'pics4354353',
    client_name: 'john willy',
    product: 'Motor Third Party',
    number_of_vehicles: 10,
    total_premium: 7002,
    start_date: '2020/01/10',
    end_date: '2020/12/30'
  },
  {
    ref: 'pics4354353',
    client_name: 'john willy',
    product: 'Motor Third Party',
    number_of_vehicles: 10,
    total_premium: 7002,
    start_date: '2020/01/10',
    end_date: '2020/12/30'
  }
];

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent implements OnInit {
  // Policies columns
  displayedColumns: string[] = [
    'ref',
    'product',
    'client_name',
    'number_of_vehicles',
    'total_premium',
    'start_date',
    'end_date',
    'actions'
  ];

  // Policies data source
  dataSource = new MatTableDataSource(POLICY_DATA);

  // Poloicies viewChild
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor() {}

  ngOnInit() {
    //  Poloicies
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //  Poloicies filter
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
