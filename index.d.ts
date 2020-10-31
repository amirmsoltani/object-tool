declare module "filter" {
    export default function filter<T = {
        [key: string]: any;
    }>(ob: T, callbackFn: (key: keyof T, value: T[keyof T], index: number) => boolean): T;
}
declare module "map" {
    const skip: {
        key: string;
        value: string;
    };
    /**
     * With the help of this function, you can trace and change your desired object
     * @template {{[key:string]:any}} T
     * @template {{[key:string]:any}} O
     * @param {T} ob Input object for map operation
     * @param {(key:string,value:any,{index:number,skip:object})=>{key:string|number,value:any}} callbackFn Callback is used to change the values sent . If you want to skip the value sent, return the skip value
     * @returns {O} After deleting the values from the object, a new object returns
     */
    export default function map<T = {
        [key: string]: any;
    }, O = {
        [key: string]: any;
    }>(ob: T, callbackFn: (key: keyof T, value: T[keyof T], options: {
        skip: typeof skip;
        index: number;
    }) => {
        key: string | number;
        value: any;
    } | typeof skip): O;
}
declare module "index" { }
