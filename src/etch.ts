/**
 * With the help of this function, you can trace object
 * @template {{[key:string]:any}} T
 * @param {T} ob Input object for etch operation
 * @param {(key:string,value:any,{index:number,skip:object})=>void} callbackFn Callback is used to send object information
 * @returns {void} After deleting the values from the object, a new object returns
 */
export default function filter<T = { [key: string]: any }>
    (
        ob: T,
        callbackFn: (
            key: keyof T,
            value: T[keyof T],
            index: number
        ) => void
    ): void {
    Object.entries(ob).forEach((array, index) => {
        callbackFn(array[0] as keyof T, array[1], index)
    });
}
