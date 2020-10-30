const skip = { key: 'skip', value: 'skip' };

/**
 * With the help of this function, you can trace and change your desired object
 * @template {{[key:string]:any}} T
 * @template {{[key:string]:any}} O
 * @param {T} ob Input object for map operation
 * @param {(key:string,value:any,{index:number,skip:object})=>{key:string|number,calue:any}} callbackFn Callback is used to change the values sent . If you want to skip the value sent, return the skip value
 * @returns {O} After deleting the values from the object, a new object returns
 */
export default function map<T = { [key: string]: any }, O = { [key: string]: any }>
    (
        ob: T,
        callbackFn: (key: keyof T, value: T[keyof T], options: { skip: typeof skip, index: number }) => { key: string | number, value: any } | typeof skip
    ): O {
    const result: { [key: string]: any } = {};
    Object.entries(ob).forEach((array, index) => {
        const response = callbackFn(array[0] as keyof T, array[1], { index, skip });
        if (response !== skip)
            result[response.key] = response.value;
    });
    return <O>result;
}

