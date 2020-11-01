import etch from '../src/etch';
import creator from './object-creator';

test("Etch: Check the correct output", () => {
    const ob = creator({ length: 100 });
    const eq: any = {};
    etch(ob, (key, value) => {
        eq[key] = value;
    });
    expect(eq).toEqual(ob);
})