import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AddNoticeComponent } from './add-notice.component';

describe('AddNoticeComponent', () => {
  let component: AddNoticeComponent;
  let fixture: ComponentFixture<AddNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNoticeComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});

class MockNoticeService {

}
