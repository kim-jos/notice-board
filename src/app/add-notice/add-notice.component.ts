import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoticeService } from 'src/shared/notice.service';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.css']
})
export class AddNoticeComponent implements OnInit {

  submitNotice(form: NgForm) {
    this.noticeService.createNotice(form.value)
  }
  constructor(private noticeService: NoticeService) { }

  ngOnInit(): void {
  }

}
