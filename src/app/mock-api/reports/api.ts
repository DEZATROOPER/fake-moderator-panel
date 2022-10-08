import { Injectable } from '@angular/core'
import { cloneDeep } from 'lodash-es'
import { FuseMockApiService } from '@fuse/lib/mock-api'
import { reports as reportsData } from 'app/mock-api/reports/data'

@Injectable({
    providedIn: 'root'
})
export class ReportsMockApi {
    private _reports: any = reportsData

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService) {
        // Register Mock API handlers
        this.registerHandlers()
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ Sales - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/reports')
            .reply(() => [200, cloneDeep(this._reports)])

        this._fuseMockApiService
            .onPost('api/reports')
            .reply(({request}) => {
                return [200, cloneDeep(request.body)];
            })
    }
}
