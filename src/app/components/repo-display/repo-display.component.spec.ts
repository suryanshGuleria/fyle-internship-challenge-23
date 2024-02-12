import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoDisplayComponent } from './repo-display.component';

describe('RepoDisplayComponent', () => {
  let component: RepoDisplayComponent;
  let fixture: ComponentFixture<RepoDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepoDisplayComponent]
    });
    fixture = TestBed.createComponent(RepoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
