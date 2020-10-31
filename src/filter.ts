/**
 * With the help of this function, you can trace and delete desired from object
 * @template {{[key:string]:any}} T
 * @param {T} ob Input object for filter operation
 * @param {(key:string,value:any,{index:number,skip:object})=>{key:string|number,value:any}} callbackFn Callback is used to change the values sent . If you want to skip the value sent, return the skip value
 * @returns {{[key:string]:any}} After deleting the values from the object, a new object returns
 */
export default function filter<T = { [key: string]: any }>
    (
        ob: T,
        callbackFn: (key: keyof T, value: T[keyof T], index: number) => boolean
    ): T {
    const result: { [key: string]: any } = {};
    Object.entries(ob).forEach((array, index) => {
        if (callbackFn(array[0] as keyof T, array[1], index))
            result[array[0]] = array[1];
    });
    return <T>result;
}
