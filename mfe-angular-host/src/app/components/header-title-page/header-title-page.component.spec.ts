import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTitlePageComponent } from './header-title-page.component';

describe('HeaderTitlePageComponent', () => {
  let component: HeaderTitlePageComponent;
  let fixture: ComponentFixture<HeaderTitlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTitlePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderTitlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
