import exists from '../src/exists';


test("Exists: test string , number , regex , function", () => {
    const ob = { a: 123, b: 456, c: 'this is a test', d: 'im amir', e: 12345678, f: '123456789' };
    expect(exists(ob, { a: 123, d: 'im amir' })).toBeTruthy();
    expect(exists(ob, { b: (p) => p > 10 })).toBeTruthy();
    expect(exists(ob, { c: /is/ })).toBeTruthy();
    expect(exists(ob, { a: p => p % 3 === 0, b: 456, c: /\sa\s/, d: 'im amir' })).toBeTruthy();
    expect(exists(ob, { a: 1 })).toBeFalsy();
    expect(exists(ob, { b: () => false })).toBeFalsy();
    expect(exists(ob, { c: /z/ })).toBeFalsy();
    expect(exists(ob, { u: 1, j: 'amir' })).toBeFalsy();
    expect(exists(ob, { a: 123, d: 'im amir', f: 12345689 })).toBeFalsy();
})