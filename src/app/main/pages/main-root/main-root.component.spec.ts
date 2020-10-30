import { TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { AccountService } from '~/core/services/account.service';

import { MainRootComponent, pages } from '../';
import { components } from '../../components';
import { containers } from '../../containers';
import { vendorImports } from '../../main.module';

describe('MainRootComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, RouterTestingModule, ...vendorImports],
      declarations: [...components, ...containers, ...pages],
      providers: [{provide: AccountService, useValue: {isLoggedIn: true}}],
    }).compileComponents();
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(MainRootComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a toolbar', waitForAsync(() => {
    const fixture = TestBed.createComponent(MainRootComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const title = compiled.querySelector('.mat-toolbar-row > span');
    expect(title.textContent).toContain('MPGP');
  }));
});
