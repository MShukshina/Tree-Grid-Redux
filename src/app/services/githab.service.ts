import { Injectable } from '@angular/core';
import {throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitHabService {

  constructor(private http: HttpClient) { }

  getGitHubCommits(userName: string, reposName: string, countCommitItems: number) {
    return this.http.get(`https://api.github.com/repos/${userName}/${reposName}/commits?q=a&per_page=${countCommitItems}&page=1`)
      .pipe(map((rep: any) => rep.map((commit: any) => ({
          parent: reposName, name: commit.commit.message, nodeId: commit.node_id, url: commit.html_url,  level: 3, child: []
        })),
        catchError((error) => {
          console.error(error.message);
          return throwError('Error thrown from catchError');
        })));
  }

  getGitHubRepositories(/*userName: string, countRepositoriesItems: number*/) {
    return this.http.get(`https://api.github.com/users/A/repos?q=a&per_page=5&page=1`)
      .pipe(map((rep: any) => rep.map((repos: any) => ({
          parent: 'A', name: repos.name, nodeId: repos.node_id, url: repos.html_url, level: 2, child: []
        })),
        catchError((error) => {
          console.error(error.message);
          return throwError('Error thrown from catchError');
        })));
  }

  getGitHubUsers(/*countUserItems: number*/) {
    return this.http.get(`https://api.github.com/search/users?q=a&per_page=5&page=1`)
      .pipe(map((us: any) => us.items.map((user: any) => ({
          parent: null, name: user.login, nodeId: user.node_id, url: user.html_url, level: 1, child: []
        })),
        catchError((error) => {
          console.error(error.message);
          return throwError('Error thrown from catchError');
        })));
  }
}
