import { Component, OnInit, TemplateRef } from '@angular/core';
import { NoticeService } from 'src/shared/notice.service';
import { Notice } from '../notice';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})

export class TableComponent implements OnInit {
  rows: any[] = [];

  delNotice(noticeId: string) {
    this.noticeService.deleteNotice(noticeId)
  }

  onScroll() {
    console.log('scrolled');
    this.spinner.show();
    this.noticeService.getNoticeList(this.rows[this.rows.length - 1].time).subscribe(res => {
      this.spinner.hide();
      console.log('res',res)
      this.rows.push(...res.map((e: any) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      }))
      console.log('rows',this.rows);
    })
  }

  constructor(
    private noticeService: NoticeService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.noticeService.getNoticeList().subscribe(res => {
      this.rows = res.map((e: any) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      })
    })
  }

}
