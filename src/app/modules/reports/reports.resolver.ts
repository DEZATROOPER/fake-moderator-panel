import { Injectable } from '@angular/core'
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router'
import { Observable, of } from 'rxjs'
import { ReportsService } from './reports.service'

@Injectable({
    providedIn: 'root'
})
export class ReportsResolver implements Resolve<boolean> {

    constructor(private _reportService: ReportsService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this._reportService.getData()
    }
}
