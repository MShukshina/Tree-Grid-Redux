import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitHabService {

  private counter: number;

  constructor(private http: HttpClient) {
    this.counter = -1;
  }

  getGitHubUsers() {
    return this.http.get(`https://api.github.com/search/users?q=a&per_page=5&page=1`)
      .pipe(map((us: any) => us.items.map((user: any) => ({ id: ++this.counter,
          parent: null,  parent_id: 0, name: user.login, nodeId: user.node_id, url: user.html_url,
          level: 1, child: [], isOpened: false
        })),
        catchError((error) => {
          console.error(error.message);
          return throwError('Error thrown from catchError');
        })));
  }

  getGitHubRepositories(userName: string, parentId: number) {
    return this.http.get(`https://api.github.com/users/${userName}/repos?q=a&per_page=5&page=1`)
      .pipe(map((rep: any) => rep.map((repos: any) => ({ id: ++this.counter,
          parent: userName, parent_id: parentId, name: repos.name, nodeId: repos.node_id, url: repos.html_url,
          level: 2, child: [], isOpened: false
        })),
        catchError((error) => {
          console.error(error.message);
          return throwError('Error thrown from catchError');
        })));
  }

  getGitHubCommits(userName: string, reposName: string, parentId) {
    return this.http.get(`https://api.github.com/repos/${userName}/${reposName}/commits?q=a&per_page=5&page=1`)
      .pipe(map((rep: any) => rep.map((commit: any) => ({ id: this.counter++,
          parent: reposName, parent_id: parentId, name: commit.commit.message, nodeId: commit.node_id,
          url: commit.html_url,  level: 3, child: [], isOpened: false
        })),
        catchError((error) => {
          console.error(error.message);
          return throwError('Error thrown from catchError');
        })));
  }
}
