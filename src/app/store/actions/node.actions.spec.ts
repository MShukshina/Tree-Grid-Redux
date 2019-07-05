import {ENodeActions} from './node.actions';

describe( 'nodes actions', () => {
  describe( '[Nodes] Get Users', () => {
    it('should create an action get users', () => {
      expect(ENodeActions.GetUsers).toEqual('[Nodes] Get Users');
    });
  });

  describe( '[Nodes] Get Users Success', () => {
    it('should create an action get users success', () => {
      expect(ENodeActions.GetUsersSuccess).toEqual('[Nodes] Get Users Success');
    });
  });

  describe( '[Nodes] Users Get Error', () => {
    it('should create an action users get error', () => {
      expect(ENodeActions.UsersGetError).toEqual('[Nodes] Users Get Error');
    });
  });

  describe( '[Nodes] Get Repositories', () => {
    it('should create an action get repositories', () => {
      expect(ENodeActions.GetRepositories).toEqual('[Nodes] Get Repositories');
    });
  });

  describe( '[Nodes] Repositories Get Error', () => {
    it('should create an action repositories get error', () => {
      expect(ENodeActions.RepositoriesGetError).toEqual('[Nodes] Repositories Get Error');
    });
  });

  describe( '[Nodes] Get Commits', () => {
    it('should create an action get commit', () => {
      expect(ENodeActions.GetCommits).toEqual('[Nodes] Get Commits');
    });
  });

  describe( '[Nodes] Commits Get Error', () => {
    it('should create an action commits get error', () => {
      expect(ENodeActions.CommitsGetError).toEqual('[Nodes] Commits Get Error');
    });
  });

  describe( '[Nodes] Add Child Users', () => {
    it('should create an action add child users', () => {
      expect(ENodeActions.AddChildUsers).toEqual('[Nodes] Add Child Users');
    });
  });

  describe( '[Nodes] Add Child Repositories', () => {
    it('should create an action add child repositories', () => {
      expect(ENodeActions.AddChildRepositories).toEqual('[Nodes] Add Child Repositories');
    });
  });
});
