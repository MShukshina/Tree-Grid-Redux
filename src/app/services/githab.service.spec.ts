import {inject, TestBed} from '@angular/core/testing';
import { GitHabService } from './githab.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('GitHabService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [GitHabService],
    schemas: [ NO_ERRORS_SCHEMA ]
  }));

  it('should be created', () => {
    const service: GitHabService = TestBed.get(GitHabService);
    expect(service).toBeTruthy();
  });

/*  it('should get Users', inject([GitHabService, HttpTestingController], (service: GitHabService, beckend: HttpTestingController) => {
    const mockUsers = [{ name: 'A'}];

    service.getGitHubUsers().subscribe(users => {
      expect(users).toEqual(mockUsers);
    });
    beckend.expectOne({
      method: 'GET',
      url: 'https://api.github.com/search/users?q=a&per_page=5&page=1'
    }).flush(mockUsers);
  }));

  it('should get Repositories', inject([GitHabService, HttpTestingController], (service: GitHabService, backend: HttpTestingController) => {
    const mockRepos = [{ login: '10links'}];

    service.getGitHubUsers().subscribe(repos => {
      expect(repos).toEqual(mockRepos);
    });
    backend.expectOne({
      method: 'GET',
      url: 'https://api.github.com/users/A/repos?q=a&per_page=5&page=1'
    }).flush(mockRepos);
  }));

  it('should get Commits', inject([GitHabService, HttpTestingController], (service: GitHabService, backend: HttpTestingController) => {
    const mockCommits = [{ name: 'update'}];

    service.getGitHubUsers().subscribe(commits => {
      expect(commits).toEqual(mockCommits);
    });
    backend.expectOne({
      method: 'GET',
      url: 'https://api.github.com/repos/A/10links/commits?q=a&per_page=5&page=1'
    }).flush(mockCommits);
  }));*/
});
