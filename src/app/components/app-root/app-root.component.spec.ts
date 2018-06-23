import { async, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MaterialModule } from '~/shared/material.module';

import { AppRootComponent, components } from '../';
import { containers } from '../../containers';

describe('AppRootComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, MaterialModule, RouterTestingModule],
      declarations: [...components, ...containers],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppRootComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a toolbar', async(() => {
    const fixture = TestBed.createComponent(AppRootComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const title = compiled.querySelector('mat-toolbar-row > span');
    expect(title.textContent).toContain('MPGP');
  }));
});
