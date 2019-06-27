import { TestBed } from '@angular/core/testing';

import { GithabService } from './githab.service';

describe('GithabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithabService = TestBed.get(GithabService);
    expect(service).toBeTruthy();
  });
});
