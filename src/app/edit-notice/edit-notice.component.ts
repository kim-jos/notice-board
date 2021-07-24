import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NoticeService } from 'src/shared/notice.service';
import { Notice } from '../notice';

@Component({
  selector: 'app-edit-notice',
  templateUrl: './edit-notice.component.html',
  styleUrls: ['./edit-notice.component.css']
})
export class EditNoticeComponent implements OnInit {
  
  prepopulate!: Notice;
  routeId = this.route.snapshot.paramMap.get('id') as string
  
  editNotice(form: NgForm) {
    this.noticeService.updateNotice(form.value, this.routeId)
  }

  constructor(
    private noticeService: NoticeService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log(this.routeId);
    this.noticeService.getNotice(this.routeId).subscribe((res: any) => {
      this.prepopulate = res;
    })
  }

  

}
