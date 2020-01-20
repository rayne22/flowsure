import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ClientsComponent } from '../../clients/clients.component';
import { CreateClientComponent } from '../../create-client/create-client.component';
import { ViewIndividualClientComponent } from '../../view-individual-client/view-individual-client.component';
import { CreateCorporateClientComponent } from '../../create-corporate-client/create-corporate-client.component';
import { ViewCorporateClientComponent } from '../../view-corporate-client/view-corporate-client.component';
import { MenuItemComponent } from '../../menu-item/menu-item.component';
import { InsuranceCompaniesComponent } from '../../insurance-companies/insurance-companies.component';
import { ProductsComponent } from '../../products/products.component';
import { MotorThirdPartyComponent } from '../../motor-third-party/motor-third-party.component';
import { RecieptingComponent } from '../../reciepting/reciepting.component';
import { CreateRecieptComponent } from '../../create-reciept/create-reciept.component';
import { CreateDebitNoteComponent } from '../../create-debit-note/create-debit-note.component';
import { PoliciesComponent } from '../../policies/policies.component';
import { ClaimsComponent } from '../../claims/claims.component';
import { QueriesComponent } from '../../queries/queries.component';
import { AddQueryComponent } from '../../add-query/add-query.component';

import {
  MatIconModule,
  MatButtonModule,
  MatTooltipModule,
  MatTabsModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatSelectModule,
  MatCardModule,
  MatMenuModule,
  MatButtonToggleModule,
  MatStepperModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatExpansionModule
} from '@angular/material';





@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot(),
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule
  ],
  declarations: [
    DashboardComponent,
    ClientsComponent,
    CreateClientComponent,
    ViewIndividualClientComponent,
    CreateCorporateClientComponent,
    ViewCorporateClientComponent,
    MenuItemComponent,
    UserProfileComponent,
    TableListComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    InsuranceCompaniesComponent,
    ProductsComponent,
    MotorThirdPartyComponent,
    RecieptingComponent,
    CreateRecieptComponent,
    CreateDebitNoteComponent,
    PoliciesComponent,
    ClaimsComponent,
    QueriesComponent,
    AddQueryComponent
  ]
})
export class AdminLayoutModule {}
