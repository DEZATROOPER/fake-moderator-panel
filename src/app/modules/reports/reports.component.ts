import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation
} from '@angular/core'
import { ReportsService } from './reports.service'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { Subject, take, takeUntil } from 'rxjs'
import { MatDialog } from '@angular/material/dialog'
import { ReportFormComponent } from './report-form/report-form.component'
import { cloneDeep } from 'lodash-es'

export enum Statuses {
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
    reportsDataSource: MatTableDataSource<any> = new MatTableDataSource()
    reportsTableColumns: string[] = ['date', 'title', 'count', 'status']
    private _unsubscribeAll: Subject<any> = new Subject<any>()


    constructor(private _reportsService: ReportsService,
                private _dialog: MatDialog,
                private _changeDetector: ChangeDetectorRef,
    ) {
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
                this.data = data.reports

                // Store the table data
                this.reportsDataSource.data = this.data
            })
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void {
        // Make the data source sortable
        this.reportsDataSource.sort = this.recentTransactionsTableMatSort
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

    isStatusType(status: Statuses, statusType: 'danger' | 'warning' | 'normal') {
        if (statusType === 'normal') {
            return status === Statuses.NOT_CONFIRMED
        }

        if (statusType === 'warning') {
            return status === Statuses.WARNING
        }

        return ![Statuses.NOT_CONFIRMED, Statuses.WARNING].includes(status)
    }

    openDialog(report: any) {
        const dialogRef = this._dialog.open(ReportFormComponent, {
            panelClass: 'w-1/3',
            data: {
                report: cloneDeep(report)
            }
        })

        dialogRef.afterClosed().pipe(takeUntil(this._unsubscribeAll))
            .subscribe((result) => {
                if (!result.report) {
                    return
                }

                const findIndex = this.data.findIndex(r => r.id === result.report.id)

                if (findIndex >= 0) {
                    this.data[findIndex] = result.report
                } else {
                    this.data.push(result.report)
                }

                this.reportsDataSource.data = this.data
                this._changeDetector.detectChanges()
            })
    }
}
