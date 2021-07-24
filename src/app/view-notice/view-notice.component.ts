import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticeService } from 'src/shared/notice.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';
import { Comment, Notice } from '../notice';

@Component({
  selector: 'app-view-notice',
  templateUrl: './view-notice.component.html',
  styleUrls: ['./view-notice.component.css']
})
export class ViewNoticeComponent implements OnInit {
  
  routeId = this.route.snapshot.paramMap.get('id') as string
  modalRef!: BsModalRef;
  view!: Notice;
  comments!: Comment[];

  constructor(
    private noticeService: NoticeService,
    private route: ActivatedRoute,
    private modalService: BsModalService
  ) { }

  submitComment(form: NgForm, noticeId: string) {
    console.log(form.value)
    this.noticeService.createComment(form.value, noticeId)
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.noticeService.getNotice(this.routeId).subscribe((res: any) => {
      this.view = res;
      console.log('res',res);
    })

    this.noticeService.getComments(this.routeId).subscribe(res => {
      this.comments = res.map((e: any) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      }) 
    })
  }

}
