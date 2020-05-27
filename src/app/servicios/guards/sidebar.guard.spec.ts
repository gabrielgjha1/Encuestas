import { TestBed } from '@angular/core/testing';

import { SidebarGuard } from './sidebar.guard';

describe('SidebarGuard', () => {
  let guard: SidebarGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SidebarGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
