import map from '../src/map';
import creator from './object-creator';

test("Map: Test skip if return skip", () => {
    const ob = creator({ length: 100 });
    const eq: any = {};
    expect(map(ob, (key, value, { skip }) => {
        if (value % 2 == 0) {
            eq[key] = value;
            return { key, value };
        }
        return skip;
    })).toEqual(eq);
});

test("Map: Test return value after map", () => {
    const ob = creator({});
    const al = creator({});
    expect(map(ob, (key) => {
        return { key, value: al[key] }
    })).toEqual(al);
})