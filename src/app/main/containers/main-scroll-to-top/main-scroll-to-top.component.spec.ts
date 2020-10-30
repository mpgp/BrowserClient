import { TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { vendorImports } from '../../main.module';

import { MainScrollToTopComponent } from './main-scroll-to-top.component';

describe('MainScrollToTopComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, RouterTestingModule, ...vendorImports],
      declarations: [MainScrollToTopComponent],
    }).compileComponents();
  }));

  it('should render', waitForAsync(() => {
    const fixture = TestBed.createComponent(MainScrollToTopComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});
