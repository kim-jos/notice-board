import { Component, OnInit, TemplateRef } from '@angular/core';
import { NoticeService } from 'src/shared/notice.service';
import { Notice } from '../notice';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class TableComponent implements OnInit {
  headers: string[] = ['Title', 'Author', 'Time'];

  delNotice(noticeId: string) {
    this.noticeService.deleteNotice(noticeId)
  }

  rows: any[] = [];
  
  constructor(
    private noticeService: NoticeService,
  ) { }

  ngOnInit(): void {
    this.noticeService.getNoticeList().subscribe(res => {
      this.rows = res.map((e: any) => {
        // console.log('e', e.payload.doc.data())
        // console.log('id', e.payload.doc.id)
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      })
    })
  }

}
