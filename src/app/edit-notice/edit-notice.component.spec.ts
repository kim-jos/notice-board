import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { NoticeService } from 'src/shared/notice.service';

import { EditNoticeComponent } from './edit-notice.component';

describe('EditNoticeComponent', () => {
  let component: EditNoticeComponent;
  let fixture: ComponentFixture<EditNoticeComponent>;
  let noticeServiceStub: any;

  beforeEach(async () => {
    noticeServiceStub = jasmine.createSpyObj('NoticeService', ['getNotice', 'updateNotice']);
    (<jasmine.Spy>noticeServiceStub.getNotice).and.returnValue(of({
      id: 'jfkdlsa',
      title: 'title',
      notice: 'notice content',
      author: 'joseph',
      time: '12/12/12',
    }));
    (<jasmine.Spy>noticeServiceStub.updateNotice).and.returnValue(of({
      id: 'updated it',
      title: 'updated title',
      notice: 'updated notice',
      author: 'updated author',
      time: 'updated time',
    }));

    const activatedRouteStub = {
      snapshot: {
        paramMap: {
          get: (str: string) => {
            return 'abc';
          }
        }
      }
    };

    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ EditNoticeComponent ],
      providers: [
        { provide: NoticeService, useValue: noticeServiceStub },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
      ],
      schemas:[NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  })

  it('should create', () => {
    let app = fixture.componentInstance;
    expect(app).toBeTruthy()
  })


  it ('editNotice() should', ()=>{
    const form = { value: "hi" } as any;
    component.editNotice(form);
    expect((<jasmine.Spy>noticeServiceStub.getNotice)).toHaveBeenCalled();
    expect((<jasmine.Spy>noticeServiceStub.getNotice)).toHaveBeenCalledWith([form.value, component.routeId]);
  })


  
});
