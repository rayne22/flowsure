import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ClientsComponent } from '../../clients/clients.component';
import { CreateClientComponent } from '../../create-client/create-client.component';
import { ViewIndividualClientComponent } from '../../view-individual-client/view-individual-client.component';
import { CreateCorporateClientComponent } from '../../create-corporate-client/create-corporate-client.component';
import { ViewCorporateClientComponent } from '../../view-corporate-client/view-corporate-client.component';
import { InsuranceCompaniesComponent } from '../../insurance-companies/insurance-companies.component';
import { ProductsComponent } from '../../products/products.component';
import { MotorThirdPartyComponent } from '../../motor-third-party/motor-third-party.component';
import { RecieptingComponent } from '../../reciepting/reciepting.component';

export const AdminLayoutRoutes: Routes = [
         { path: 'dashboard', component: DashboardComponent },
         { path: 'clients', component: ClientsComponent },
         { path: 'create-clients', component: CreateClientComponent },
         {
           path: 'view-individual-client',
           component: ViewIndividualClientComponent
         },
         {
           path: 'create-corporate-clients',
           component: CreateCorporateClientComponent
         },
         {
           path: 'view-corporate-client',
           component: ViewCorporateClientComponent
         },
         {
           path: 'view-insurance-companies',
           component: InsuranceCompaniesComponent
         },
         {
           path: 'products',
           component: ProductsComponent
         },
         {
           path: 'motor-third-party',
           component: MotorThirdPartyComponent
         },
         {
           path: 'receipting',
           component: RecieptingComponent
         },
         { path: 'user-profile', component: UserProfileComponent },
         { path: 'table-list', component: TableListComponent },
         { path: 'typography', component: TypographyComponent },
         { path: 'icons', component: IconsComponent },
         { path: 'maps', component: MapsComponent },
         { path: 'notifications', component: NotificationsComponent },
         { path: 'upgrade', component: UpgradeComponent }
       ];

