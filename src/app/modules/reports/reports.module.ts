import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, CurrencyPipe, DatePipe, NgClass, NgForOf } from '@angular/common'
import { ReportsComponent } from './reports.component'
import { Route, RouterModule } from '@angular/router'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { ReportsResolver } from './reports.resolver'
import { MatDividerModule } from '@angular/material/divider'
import { MatTableModule } from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';
import { ReportFormComponent } from './report-form/report-form.component'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatChipsModule } from '@angular/material/chips'
import { ReactiveFormsModule } from '@angular/forms'
import { MatAutocompleteModule } from '@angular/material/autocomplete'

const reportRoutes: Route[] = [
    {
        path     : '',
        component: ReportsComponent,
        resolve: {
            data: ReportsResolver
        }
    }
];

@NgModule({
    declarations: [
        ReportsComponent,
        ReportFormComponent,
    ],
    imports: [
        RouterModule.forChild(reportRoutes),
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatDividerModule,
        CurrencyPipe,
        MatTableModule,
        MatSortModule,
        DatePipe,
        NgClass,
        NgForOf,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatChipsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        AsyncPipe
    ]
})
export class ReportsModule { }
