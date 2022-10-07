import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, NgClass, NgForOf } from '@angular/common'
import { ReportsComponent } from './reports.component'
import { Route, RouterModule } from '@angular/router'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { ReportsResolver } from './reports.resolver'
import { MatDividerModule } from '@angular/material/divider'
import { MatTableModule } from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort'

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
        ReportsComponent
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
        NgForOf
    ]
})
export class ReportsModule { }
