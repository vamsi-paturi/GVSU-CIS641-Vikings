import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDocsAddComponent } from './user-docs-add.component';

describe('UserDocsAddComponent', () => {
  let component: UserDocsAddComponent;
  let fixture: ComponentFixture<UserDocsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDocsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDocsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
