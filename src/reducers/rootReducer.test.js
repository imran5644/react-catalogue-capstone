import dogsReducer from './index';

describe('dogsReducer', () => {
  describe('defaultState case', () => {
    it('should return an empty list when nothing is passed to it', () => {
      expect(dogsReducer(undefined, {})).toEqual({
        detail: '', filter: 'dogs-human', list: [], loading: false, message: '', page: 1,
      });
    });
  });

  describe('FILTER CASE', () => {
    const items = [
      { name: 'Dogs playing' },
    ];

    it('should return an array contains a single item that its name equals the name of the item inside the action categories', () => {
      expect(dogsReducer(items, { loading: true })).toEqual([{ name: 'Dogs playing' }]);
    });

    describe('FETCH DOGS FAILURE', () => {
      it('should return false inside the action url', () => {
        expect(dogsReducer(false, {})).toBeFalsy();
      });
    });

    describe('FETCH DOGS SUCCESS', () => {
      it('should return an array containing items inside the action url', () => {
        expect(dogsReducer(['dogs-humans'], {})).toEqual(['dogs-humans']);
      });
    });
  });
});
