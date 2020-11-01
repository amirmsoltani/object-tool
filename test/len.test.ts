import len from '../src/len';
import creator from './object-creator';

test("Len: Check the correct output len object", () => {
    const ob = creator({ length: 100 });
    expect(len(ob)).toBe(100);
})