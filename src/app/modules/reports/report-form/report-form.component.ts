import { Component, Inject, OnDestroy, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { Statuses } from '../reports.component'
import { COMMA, ENTER } from '@angular/cdk/keycodes'
import { FormControl } from '@angular/forms'
import { map, Observable, ReplaySubject, startWith, takeUntil } from 'rxjs'
import { MatChipInputEvent } from '@angular/material/chips'
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete'
import { ReportsService } from '../reports.service'

@Component({
    selector: 'app-report-form',
    templateUrl: './report-form.component.html',
    styleUrls: ['./report-form.component.scss']
})
export class ReportFormComponent implements OnInit, OnDestroy {
    report: any
    formFieldHelpers: string[] = ['']
    allStatuses = []
    separatorKeysCodes: number[] = []
    statusCtrl = new FormControl('')
    statuses$: Observable<string[]>
    private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

    constructor(public dialogRef: MatDialogRef<ReportFormComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private _reportsService: ReportsService,
                ) {

        this.report = data.report
        this.statuses$ = this.statusCtrl.valueChanges
            .pipe(
                // startWith(null),
                map((statusInput: string | null) => this._filter(statusInput))
            )
    }

    ngOnDestroy(): void {
        this.destroyed$.next(true);
    }

    ngOnInit(): void {
        this.allStatuses = Object.values(Statuses)
    }


    remove(status: string) {
        this.report.statuses = this.report.statuses.filter(_ => _ !== status)
    }

    add($event: MatChipInputEvent) {
        this.report.statuses.push($event.value)
        this.statusCtrl.reset()
    }

    selected($event: MatAutocompleteSelectedEvent) {
        console.log($event)
        this.report.statuses.push($event.option.value)
    }

    private _filter(statusInput: string | null) {
        // disable the statuses select if the report not confirmed
        if (this.report.statuses.includes(Statuses.NOT_CONFIRMED)) {
            return []
        }

        const uniqueStatuses = this.allStatuses.filter(_ => {
            if (_ === Statuses.NOT_CONFIRMED && this.report.statuses?.length) {
                return false
            }

            return !this.report.statuses.includes(_)
        })

        if (statusInput) {
            return uniqueStatuses.filter((_: string) => _.toLowerCase().includes(statusInput.toLowerCase()))
        }

        return uniqueStatuses
    }

    save() {
        this._reportsService.store(this.report).pipe(takeUntil(this.destroyed$))
            .subscribe((report) => {
                this.report = report
                console.log(this.report)
                this.dialogRef.close({report: this.report})
            })
    }
}
