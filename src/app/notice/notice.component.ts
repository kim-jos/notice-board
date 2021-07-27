import { Component, OnInit } from '@angular/core';
import { NoticeService } from 'src/shared/notice.service';
import { Notice } from '../notice';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  delNotice(noticeId: string) {
    this.noticeService.deleteNotice(noticeId)
  }

  rows: Notice[] = [];
  
  constructor(
    private noticeService: NoticeService,
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
