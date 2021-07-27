import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { NoticeService } from 'src/shared/notice.service';
import { Notice } from '../notice';

import { TableComponent } from './table.component';

//Table testing requirements: 
//notice service
//  create dummy service to see if it works
//routing to view-notice
//edit/delete drop down 
//onScroll()
//spinner

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      imports: [ /*import modules here*/ ],
      providers: [
        {
          provide: NoticeService, 
          useClass: fakeNoticeService 
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});

class fakeNoticeService {
  getNoticeList(): Observable<Notice[]> {
    return of([])
  }
}