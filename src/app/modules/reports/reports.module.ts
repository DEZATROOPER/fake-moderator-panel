import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component'
import { Route, RouterModule } from '@angular/router'

const reportRoutes: Route[] = [
    {
        path     : '',
        component: ReportsComponent
    }
];

@NgModule({
    declarations: [
        ReportsComponent
    ],
    imports     : [
        RouterModule.forChild(reportRoutes)
    ]
})
export class ReportsModule { }
