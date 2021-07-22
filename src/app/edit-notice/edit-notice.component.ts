import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticeService } from 'src/shared/notice.service';

@Component({
  selector: 'app-edit-notice',
  templateUrl: './edit-notice.component.html',
  styleUrls: ['./edit-notice.component.css']
})
export class EditNoticeComponent implements OnInit {
  
  prepopulate: any;
  routeId: any = this.route.snapshot.paramMap.get('id');
  editNotice(form: any) {
    this.noticeService.updateNotice(form.value, this.routeId)
  }
  constructor(
    private noticeService: NoticeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.noticeService.getNotice(this.routeId).subscribe((res: any) => {
      this.prepopulate = res;
    })
  }

  

}
