import { TestBed} from '@angular/core/testing';
import { GitHabService } from './githab.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('GitHabService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [GitHabService],
    schemas: [ NO_ERRORS_SCHEMA ]
  }));

  describe('GitHabService create', () => {
    it('should be created', () => {
      const service: GitHabService = TestBed.get(GitHabService);
      expect(service).toBeTruthy();
    });
  });
});
