import {initialUsersState, IUserState} from '../state/user.state';
import {
  AddChildRepositories,
  AddChildUsers,
  CommitsGetError,
  GetUsersSuccess,
  RepositoriesGetError,
  UsersGetError
} from '../actions/node.actions';
import {nodesReducers} from './node.reducers';
import {INode} from '../../models/node.interface';


describe('node reducers', () => {
  describe('[Nodes] Get Users Success', () => {
    it('should toggle loading state', () => {
      const nodes: INode[] =  [];
      const action: GetUsersSuccess = new GetUsersSuccess( nodes );
      const newState: IUserState = nodesReducers(initialUsersState, action);
      expect(newState).toEqual({
        ...initialUsersState,
        nodes: action.payload,
      });
    });
  });

  describe('[Nodes] Users Get Error', () => {
    it('should throw an error', () => {
      const action: UsersGetError = new UsersGetError();
      const newState: IUserState = nodesReducers(initialUsersState, action);
      expect(newState).toEqual({
        ...initialUsersState,
        nodes: [],
      });
    });
  });

  describe('[Nodes] Repositories Get Error', () => {
    it('should throw an error', () => {
      const action: RepositoriesGetError = new RepositoriesGetError();
      const newState: IUserState = nodesReducers(initialUsersState, action);
      expect(newState).toEqual({
        ...initialUsersState,
        nodes: [],
      });
    });
  });

  describe('[Nodes] Commits Get Error', () => {
    it('should throw an error', () => {
      const action: CommitsGetError = new CommitsGetError();
      const newState: IUserState = nodesReducers(initialUsersState, action);
      expect(newState).toEqual({
        ...initialUsersState,
        nodes: [],
      });
    });
  });

  describe('[Nodes] Add Child Users', () => {
    it('should toggle loading state', () => {
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
      const nodes: INode[] =  [];
      const action: AddChildUsers = new AddChildUsers(nodes, node);
      const newState: IUserState = nodesReducers(initialUsersState, action);
      expect(newState).toEqual({
        ...initialUsersState,
        nodes: Object.entries({ ...initialUsersState.nodes,
          [action.node.id]: {
            ...action.node,
            child: action.child
          }
        }).map(([id, value]) => (value))
      });
    });
  });

/*  describe('[Nodes] Add Child Repositories', () => {
    it('should toggle loading state', () => {
      const node: INode = {id: 6, parent: 'A', parent_id: 0, name: '10links', level: 2, nodeId: '', url: '', child: []};
      const nodes: INode[] =  [];
      const action = new AddChildRepositories(nodes, node);
      const newState = nodesReducers(initialUsersState, action);
      expect(newState).toEqual({
        ...initialUsersState,
        nodes: Object.entries({...initialUsersState.nodes,
          [action.node.parent_id]: {
            ...initialUsersState.nodes[action.node.parent_id],
            child: Object.entries({
              ...initialUsersState.nodes[action.node.parent_id].child,
              [action.node.id % 5]: {
                ...action.node,
                child: action.child
              }
            }).map(([id, value]) => (value))
          }
        }).map(([id, value]) => (value))
      });
    });
  });*/
});
