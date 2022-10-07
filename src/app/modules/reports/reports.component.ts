import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core'
import { ReportsService } from './reports.service'
import { MatSort } from '@angular/material/sort'
import { ApexOptions } from 'ng-apexcharts'
import { MatTableDataSource } from '@angular/material/table'
import { Subject, takeUntil } from 'rxjs'

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
    accountBalanceOptions: ApexOptions
    recentTransactionsDataSource: MatTableDataSource<any> = new MatTableDataSource()
    recentTransactionsTableColumns: string[] = ['transactionId', 'date', 'name', 'amount', 'status']
    private _unsubscribeAll: Subject<any> = new Subject<any>()

    constructor(private _reportsService: ReportsService) {
    }


    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the data
        this._reportsService.data$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data) => {

                // Store the data
                this.data = data;

                // Store the table data
                this.recentTransactionsDataSource.data = data.recentTransactions;
            });
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void
    {
        // Make the data source sortable
        this.recentTransactionsDataSource.sort = this.recentTransactionsTableMatSort;
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
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
}
