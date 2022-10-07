import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core'
import { ReportsService } from './reports.service'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { Subject, takeUntil } from 'rxjs'

enum StatusType {
    'danger', 'warning', 'normal'
}

export enum statuses {
    'NOT_CONFIRMED' = 'NOT CONFIRMED',
    'WARNING' = 'WARNING',
    'MISLEADING' = 'MISLEADING',
    'PARTLY_FALSE' = 'PARTLY FALSE',
    'FALSE' = 'FALSE',
    'MISSING CONTEXT' = 'MISSING CONTEXT',
    'PHOTOMONTAGE' = 'PHOTOMONTAGE',
    'ALTERED PHOTO' = 'ALTERED PHOTO',
}

@Component({
    selector: 'reports',
    templateUrl: './reports.component.html',
    // styleUrls: ['./reports.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('recentTransactionsTable', {read: MatSort}) recentTransactionsTableMatSort: MatSort

    data: any
    recentTransactionsDataSource: MatTableDataSource<any> = new MatTableDataSource()
    recentTransactionsTableColumns: string[] = ['date', 'title', 'count', 'status']
    private _unsubscribeAll: Subject<any> = new Subject<any>()


    constructor(private _reportsService: ReportsService) {
    }


    /**
     * On init
     */
    ngOnInit(): void {
        // Get the data
        this._reportsService.data$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data) => {

                // Store the data
                this.data = data

                console.log(this.data)
                // Store the table data
                this.recentTransactionsDataSource.data = data.recentTransactions
            })
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void {
        // Make the data source sortable
        this.recentTransactionsDataSource.sort = this.recentTransactionsTableMatSort
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null)
        this._unsubscribeAll.complete()
    }


    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index
    }

    isStatusType(status: string, statusType: 'danger' | 'warning' | 'normal') {
        if (statusType === 'normal') {
            return status === statuses.NOT_CONFIRMED
        }

        if (statusType === 'warning') {
            return status === statuses.WARNING
        }

        return true;
    }
}
