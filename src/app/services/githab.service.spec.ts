import { TestBed } from '@angular/core/testing';

import { GitHabService } from './githab.service';

describe('GitHabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitHabService = TestBed.get(GitHabService);
    expect(service).toBeTruthy();
  });
});
