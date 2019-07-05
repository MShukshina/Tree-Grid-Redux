import {ITreeState} from '../state/tree.state';
import {Store} from '@ngrx/store';
import {TreeGridComponent} from '../../components/tree-grid/tree-grid.component';
import {selectNodesList} from './node.selectors';

describe('My Selectors', () => {
  describe('Selectors create', () => {
    it('should get selectTotal', () => {
      const store = jasmine.createSpyObj<Store<ITreeState>>('store', ['select']);
      const treeGridNodesList = new TreeGridComponent(store);
      treeGridNodesList.getNodes();

      expect(store.select).toHaveBeenCalledWith(selectNodesList);
    });
  });
});
