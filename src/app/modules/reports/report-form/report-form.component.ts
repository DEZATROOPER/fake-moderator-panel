import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

@Component({
    selector: 'app-report-form',
    templateUrl: './report-form.component.html',
    styleUrls: ['./report-form.component.scss']
})
export class ReportFormComponent implements OnInit {

    public report: any;
    constructor(public dialogRef: MatDialogRef<ReportFormComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {

        this.report = data.report;
    }

    ngOnInit(): void {
    }

}
