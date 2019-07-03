import {NodeEffects} from './node.effects';
import {Observable} from 'rxjs';
import {GitHabService} from '../../services/githab.service';
import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {cold, hot} from 'jasmine-marbles';
import {GetUsers, GetUsersSuccess} from '../actions/node.actions';
import {INode} from '../../models/node.interface';


describe( 'nodes effects', () => {
  let actions: Observable<any>;
  let effects: NodeEffects;
  let githubService: GitHabService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NodeEffects,
        provideMockActions(() => actions),
        {
          provide: GitHabService,
          /*nodValue: {
            getGitHubUsers: jest.fn(),
          }*/
        }
      ]
    });

    effects = TestBed.get(NodeEffects);
    githubService = TestBed.get(GitHabService);
  });

  describe('Node Effects create', () => {
    it('should be created', () => {
      expect(effects).toBeTruthy();
    });
  });

  describe('Get Nodes', () => {
    it('should return an GetUserSuccess action, with the user, on success', () => {
      const users: INode[] = [];
      const action: GetUsers = new GetUsers();
      const outcome: GetUsersSuccess = new GetUsersSuccess(users);

      /*const mockFn = jest.fn(scalar => 42 + scalar);*/

      actions = hot('-a', {a: action});
      /*const response = cold('-a|', { a: users });*/
      const expected = cold('--b', {b: outcome});
      /*githubService.getGitHubUsers = jest.fn(() => response);*/

      expect(effects.getNodes$).toEqual(expected);
    });
  });
});



