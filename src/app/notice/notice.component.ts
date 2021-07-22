import { Component, OnInit } from '@angular/core';
import { NoticeService } from 'src/shared/notice.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

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
