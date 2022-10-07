import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, tap } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class ReportsService
{
    private _data: BehaviorSubject<any> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for data
     */
    get data$(): Observable<any>
    {
        return this._data.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get data
     */
    getData(): Observable<any>
    {
        return this._httpClient.get('api/reports').pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }
}
