import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { BehaviorSubject, Observable } from 'rxjs';

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

// individual Client
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
  selector: 'app-motor-third-party',
  templateUrl: './motor-third-party.component.html',
  styleUrls: ['./motor-third-party.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    }
  ]
})
export class MotorThirdPartyComponent implements OnInit {
  // Individual Form Groups
  CoverTypeFormGroup: FormGroup;
  vehicleForm: FormGroup;

  // Individual Form Groups
  CorporateCoverTypeFormGroup: FormGroup;
  CorporateVehicleForm: FormGroup;

  // variables
  productType: string;
  durationDate: Date;

  // start date coverType
  minDate = new Date();
  maxDate = new Date(2020, 1, 2);

  // Individual client columns
  displayedColumns: string[] = [
    'id',
    'name',
    'identitification',
    'phone_number',
    'actions'
  ];

  // Corporate client columns
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
  user_id: () => any;

  // corporate viewChild
  @ViewChild(MatPaginator, { static: true }) corporatePaginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) corporateSort: MatSort;

  constructor(private _formBuilder: FormBuilder) {
    // individual cover type
    this.CoverTypeFormGroup = this._formBuilder.group({
      productType: ['', Validators.required],
      curency: ['', Validators.required],
      durationDate: ['', Validators.required],
      covering: ['', Validators.required]
    });

    // individual vehicle registration form
    this.vehicleForm = this._formBuilder.group({
      vehicleModel: ['', Validators.required],
      vehicleMake: ['', Validators.required],
      color: ['', Validators.required],
      manufuctureYear: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      insuredName: ['', Validators.required],
      vehicleChasisNumber: ['', Validators.required],
      vehicleEngineNumber: ['', Validators.required],
      vehicleRegistrationNumber: ['', Validators.required]
    });

    // corporate cover type
    this.CorporateCoverTypeFormGroup = this._formBuilder.group({
      productType: ['', Validators.required],
      curency: ['', Validators.required],
      durationDate: ['', Validators.required],
      covering: ['', Validators.required]
    });

    // corporate vehicle registration form
    this.CorporateVehicleForm = this._formBuilder.group({
      vehicleModel: ['', Validators.required],
      vehicleMake: ['', Validators.required],
      color: ['', Validators.required],
      manufuctureYear: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      insuredName: ['', Validators.required],
      vehicleChasisNumber: ['', Validators.required],
      vehicleEngineNumber: ['', Validators.required],
      vehicleRegistrationNumber: ['', Validators.required]
    });
  }

  public getFromLocalStrorage() {
    const users = JSON.parse(localStorage.getItem('userId'));
    return users;
  }

  ngOnInit() {
    // individual client
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.user_id = JSON.parse(localStorage.getItem('userId'));

    // corporate client
    this.corporateDataSource.paginator = this.corporatePaginator;
    this.corporateDataSource.sort = this.corporateSort;
  }

  // individual client filter
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // corporate client filter
  applyCorporateFilter(filterValue: string) {
    this.corporateDataSource.filter = filterValue.trim().toLowerCase();
  }

  // select individual client
  onSelect(row) {
    const userId = row.id;

    const object = {};
    object['userId'] = userId;

    localStorage.setItem('userId', userId);
  }

  // Cover type

  onCover() {
    localStorage.setItem(
      'productType',
      this.CoverTypeFormGroup.value.productType
    );
    localStorage.setItem(
      'durationDate',
      this.CoverTypeFormGroup.value.durationDate
    );
    localStorage.setItem('curency', this.CoverTypeFormGroup.value.curency);
    localStorage.setItem('coverType', this.CoverTypeFormGroup.value.coverType);
    localStorage.setItem('covering', this.CoverTypeFormGroup.value.covering);
    console.log(this.CoverTypeFormGroup.value.durationDate);
  }

  // vehicle registration
  attatch() {
    const myObj = {};
    // localStorage.setItem('vehicle', JSON.stringify(myObj));
    // for (let i = 0; i < localStorage.length; i++) {
    //   const key = localStorage.key(i);
    //   const value = localStorage.getItem(key);
    //   console.log(i++);
    // }
    if (localStorage.length > 6) {
      // We have items
      console.log('new');
    } else {
      // No items
      localStorage.setItem('vehicle', JSON.stringify(myObj));
      console.log('value');
    }
  }
  confirm() {}
}
