import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingeditComponent } from './postingedit.component';

describe('PostingeditComponent', () => {
  let component: PostingeditComponent;
  let fixture: ComponentFixture<PostingeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostingeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostingeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
