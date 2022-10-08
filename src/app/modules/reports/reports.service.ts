import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, tap } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Firestore, collection, collectionData } from '@angular/fire/firestore'

@Injectable({
    providedIn: 'root'
})
export class ReportsService
{
    private _data: BehaviorSubject<any> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient, private firestore: Firestore)
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
        const collection1 = collection(this.firestore, 'reports')

        return collectionData(collection1);

        return this._httpClient.get('api/reports').pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }

    store(report: any): Observable<any> {
        return this._httpClient.post('api/reports', report);
    }
}
