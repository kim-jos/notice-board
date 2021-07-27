import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/shared/auth.service';
import { AppComponent } from './app.component';

// router link tests

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(
          [
            { path: 'add-notice', component: DummyComponent}
          ]
        )
      ],
      declarations: [
        AppComponent, 
        DummyComponent
      ],
      providers: [
        { provide: AngularFirestore }
      ]
    }).compileComponents();
  });
  
});

@Component({template: '' })
class DummyComponent {}