import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

// Claim
export interface ClaimData {
  id: number;
  risk: string;
  policy_number: string;
  client_name: string;
  date_of_loss: string;
  status: string;
}

const CLAIM_DATA: ClaimData[] = [
  {
    id: 1,
    risk: 'Hit and run',
    policy_number: 'ddd232jj243',
    client_name: 'changa lesa',
    date_of_loss: '2020/01/21',
    status: 'open'
  },
  {
    id: 1,
    risk: 'Hit and run',
    policy_number: 'ddd232jj243',
    client_name: 'changa lesa',
    date_of_loss: '2020/01/21',
    status: 'open'
  },
  {
    id: 1,
    risk: 'Hit and run',
    policy_number: 'ddd232jj243',
    client_name: 'changa lesa',
    date_of_loss: '2020/01/21',
    status: 'open'
  },
  {
    id: 1,
    risk: 'Hit and run',
    policy_number: 'ddd232jj243',
    client_name: 'changa lesa',
    date_of_loss: '2020/01/21',
    status: 'open'
  },
  {
    id: 1,
    risk: 'Hit and run',
    policy_number: 'ddd232jj243',
    client_name: 'changa lesa',
    date_of_loss: '2020/01/21',
    status: 'open'
  },
  {
    id: 1,
    risk: 'Hit and run',
    policy_number: 'ddd232jj243',
    client_name: 'changa lesa',
    date_of_loss: '2020/01/21',
    status: 'open'
  },
  {
    id: 1,
    risk: 'Hit and run',
    policy_number: 'ddd232jj243',
    client_name: 'changa lesa',
    date_of_loss: '2020/01/21',
    status: 'open'
  },
  {
    id: 1,
    risk: 'Hit and run',
    policy_number: 'ddd232jj243',
    client_name: 'changa lesa',
    date_of_loss: '2020/01/21',
    status: 'open'
  },
  {
    id: 1,
    risk: 'Hit and run',
    policy_number: 'ddd232jj243',
    client_name: 'changa lesa',
    date_of_loss: '2020/01/21',
    status: 'open'
  }
];


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


// Policy
export interface RiskData {
  ref: string;
  vehicle_make: string;
  vehicle_model: string;
  number_plate: string;
}

const RISK_DATA: RiskData[] = [
  {
    ref: 'rsks4354353',
    vehicle_make: 'Toyota',
    vehicle_model: 'Camry',
    number_plate: 'abx 9070'
  },
  {
    ref: 'rsks4354353',
    vehicle_make: 'Toyota',
    vehicle_model: 'Camry',
    number_plate: 'abx 9070'
  },
  {
    ref: 'rsks4354353',
    vehicle_make: 'Toyota',
    vehicle_model: 'Camry',
    number_plate: 'abx 9070'
  },
  {
    ref: 'rsks4354353',
    vehicle_make: 'Toyota',
    vehicle_model: 'Camry',
    number_plate: 'abx 9070'
  },
  {
    ref: 'rsks4354353',
    vehicle_make: 'Toyota',
    vehicle_model: 'Camry',
    number_plate: 'abx 9070'
  },
  {
    ref: 'rsks4354353',
    vehicle_make: 'Toyota',
    vehicle_model: 'Camry',
    number_plate: 'abx 9070'
  },
  {
    ref: 'rsks4354353',
    vehicle_make: 'Toyota',
    vehicle_model: 'Camry',
    number_plate: 'abx 9070'
  },
  {
    ref: 'rsks4354353',
    vehicle_make: 'Toyota',
    vehicle_model: 'Camry',
    number_plate: 'abx 9070'
  },
  {
    ref: 'rsks4354353',
    vehicle_make: 'Toyota',
    vehicle_model: 'Camry',
    number_plate: 'abx 9070'
  }
];



@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss']
})
export class ClaimsComponent implements OnInit {
  panelOpenState = false;

  // Claims columns
  displayedColumns: string[] = [
    'id',
    'risk',
    'policy_number',
    'client_name',
    'date_of_loss',
    'status',
    'actions'
  ];

  // Claims data source
  dataSource = new MatTableDataSource(CLAIM_DATA);

  // Claims viewChild
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // Individual client columns
  displayedIndividualColumns: string[] = [
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
  individualDataSource = new MatTableDataSource(ELEMENT_DATA);

  // corporate client data source
  corporateDataSource = new MatTableDataSource(CORPORATE_DATA);

  // individual client viewChild
  @ViewChild('individualPaginator', { static: true })
  individualPaginator: MatPaginator;
  @ViewChild('individualSort', { static: true }) individualSort: MatSort;

  // corporate viewChild
  @ViewChild('corporatePaginator', { static: true })
  corporatePaginator: MatPaginator;
  @ViewChild('corporateSort', { static: true }) corporateSort: MatSort;

  // Policies columns
  displayedPolicyColumns: string[] = [
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
  policyDataSource = new MatTableDataSource(POLICY_DATA);

  // Poloicies viewChild
  @ViewChild('PolicyPaginator', { static: true }) policyPaginator: MatPaginator;
  @ViewChild('PolicySort', { static: true }) policySort: MatSort;

  // Risks columns
  displayedRiskColumns: string[] = [
    'ref',
    'vehicle_make',
    'vehicle_model',
    'number_plate',
    'actions'
  ];

  // Policies data source
  riskDataSource = new MatTableDataSource(RISK_DATA);

  // Poloicies viewChild
  @ViewChild('RiskPaginator', { static: true }) riskPaginator: MatPaginator;
  @ViewChild('RiskSort', { static: true }) riskSort: MatSort;

  constructor() {}

  ngOnInit() {
    // Claims client
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // corporate client
    this.corporateDataSource.paginator = this.corporatePaginator;
    this.corporateDataSource.sort = this.corporateSort;

    // individual client
    this.individualDataSource.paginator = this.individualPaginator;
    this.individualDataSource.sort = this.individualSort;

    //  Poloicies
    this.policyDataSource.paginator = this.policyPaginator;
    this.policyDataSource.sort = this.policySort;

    //  Risks
    this.riskDataSource.paginator = this.riskPaginator;
    this.riskDataSource.sort = this.riskSort;
  }

  // Claims filter
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // individual client filter
  applyIndividualFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // corporate client filter
  applyCorporateFilter(filterValue: string) {
    this.corporateDataSource.filter = filterValue.trim().toLowerCase();
  }

  //  Poloicies filter
  applyPolicyFilter(filterValue: string) {
    this.policyDataSource.filter = filterValue.trim().toLowerCase();
  }

  //  Poloicies filter
  applyRiskFilter(filterValue: string) {
    this.riskDataSource.filter = filterValue.trim().toLowerCase();
  }
}
