import keys from '../src/keys';
import creator from './object-creator';

test("Keys: Check the correct output keys", () => {
    const ob = creator({ length: 100 });
    expect(keys(ob)).toEqual(Object.keys(ob));
})