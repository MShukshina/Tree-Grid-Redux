import {NodeEffects} from './node.effects';
import {Observable} from 'rxjs';
import {GitHabService} from '../../services/githab.service';
import {TestBed} from '@angular/core/testing';
import {cold, hot} from 'jasmine-marbles';
import {AddChildRepositories, AddChildUsers, GetCommits, GetRepositories, GetUsers, GetUsersSuccess} from '../actions/node.actions';
import {INode} from '../../models/node.interface';
import {Actions} from '@ngrx/effects';
import {provideMockActions} from '@ngrx/effects/testing';

describe( 'nodes effects', () => {
  let actions: Observable<any>;
  let effects: NodeEffects;
  let service: jasmine.SpyObj<GitHabService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NodeEffects,
        provideMockActions(() => actions),
        {
          provide: GitHabService,
          useValue: {
            getGitHubUsers: jasmine.createSpy(),
            getGitHubRepositories: jasmine.createSpy(),
            getGitHubCommits: jasmine.createSpy()
          }
        }
      ]
    });

    actions = TestBed.get(Actions);
    effects = TestBed.get(NodeEffects);
    service = TestBed.get(GitHabService);
  });

  describe('Node Effects create', () => {
    it('should be created', () => {
      expect(effects).toBeTruthy();
    });
  });

  describe('Get Nodes', () => {
    it('should return an GetUserSuccess action, with the users, on success', () => {
      const users: INode[] = [{
        id: 0,
        parent: null,
        parent_id: null,
        name: 'A',
        level: 1,
        nodeId: '',
        url: '',
        child: []
      }];
      const action: GetUsers = new GetUsers();
      const outcome: GetUsersSuccess = new GetUsersSuccess(users);

      actions = hot('-a', {a: action});
      const response = cold('-a|', { a: users });
      service.getGitHubUsers.and.returnValue(response);
      const expected = cold('--b', {b: outcome});
      expect(effects.getNodes$).toBeObservable(expected);
    });
  });

  describe('Get Child', () => {
    it('should return an AddChildUsers action, with the child and node, on success', () => {
      const child: INode[] = [{
        id: 6,
        parent: 'A',
        parent_id: 0,
        name: '10links',
        level: 2,
        nodeId: '',
        url: '',
        child: []
      }];
      const node: INode = {
        id: 0,
        parent: null,
        parent_id: null,
        name: 'A',
        level: 1,
        nodeId: '',
        url: '',
        child: []
      };
      const action: GetRepositories = new GetRepositories(node);
      const outcome: AddChildUsers = new AddChildUsers(child, node);

      actions = hot('-a', {a: action});
      const response = cold('-a|', { a: child});
      service.getGitHubRepositories.and.returnValue(response);
      const expected = cold('--b', {b: outcome});
      expect(effects.openedRepositories$).toBeObservable(expected);
    });

    it('should return an AddChildRepositories action, with the child and node, on success', () => {
      const child: INode[] = [{
        id: 35,
        parent: '10links',
        parent_id: 6,
        name: 'update',
        level: 3,
        nodeId: '',
        url: '',
        child: []
      }];
      const node: INode = {
        id: 6,
        parent: 'A',
        parent_id: 0,
        name: '10links',
        level: 2,
        nodeId: '',
        url: '',
        child: []
      };
      const action: GetCommits = new GetCommits(node);
      const outcome: AddChildRepositories = new AddChildRepositories(child, node);

      actions = hot('-a', {a: action});
      const response = cold('-a|', { a: child});
      service.getGitHubCommits.and.returnValue(response);
      const expected = cold('--b', {b: outcome});
      expect(effects.openedCommits$).toBeObservable(expected);
    });
  });
});



