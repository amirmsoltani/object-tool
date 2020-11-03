declare module "etch" {
    /**
     * With the help of this function, you can trace object
     * @template {{[key:string]:any}} T
     * @param {T} ob Input object for etch operation
     * @param {(key:string,value:any,{index:number,skip:object})=>void} callbackFn Callback is used to send object information
     * @returns {void} After deleting the values from the object, a new object returns
     */
    export default function filter<T = {
        [key: string]: any;
    }>(ob: T, callbackFn: (key: keyof T, value: T[keyof T], index: number) => void): void;
}
declare module "filter" {
    /**
     * With the help of this function, you can trace and delete desired from object
     * @template {{[key:string]:any}} T
     * @param {T} ob Input object for filter operation
     * @param {(key:string,value:any,{index:number,skip:object})=>{key:string|number,value:any}} callbackFn Callback is used to change the values sent . If you want to skip the value sent, return the skip value
     * @returns {{[key:string]:any}} After deleting the values from the object, a new object returns
     */
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
     * @returns {O} After change and deleting the values from the object, a new object returns
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
declare module "mapToArray" {
    const skip: {
        key: string;
        value: string;
    };
    /**
     * With the help of this function, you can trace and change your desired object
     * @template {{[key:string]:any}} T
     * @template {any} R
     * @param {T} ob Input object for map operation
     * @param {(key:string,value:any,{index:number,skip:object})=>{key:string|number,value:any}} callbackFn Callback is used to change the values sent . If you want to skip the value sent, return the skip value
     * @returns {O} After change and deleting the values from the object, a new object returns
     */
    export default function map<T = {
        [key: string]: any;
    }, R = any>(ob: T, callbackFn: (key: keyof T, value: T[keyof T], options: {
        skip: typeof skip;
        index: number;
    }) => R | typeof skip): R[];
}
declare module "len" {
    /**
     * This function is used to get the number of values inside the object
     * @param {{[key:string]:any}}ob
     * @returns {number}
     */
    export default function len<T = {
        [key: string]: any;
    }>(ob: T): number;
}
declare module "keys" {
    /**
     * This function is used to capture the array of entity keys inside the object.
     * @param {{[key:string]:any}}ob
     * @returns {String[]}
     */
    export default function len<T = {
        [key: string]: any;
    }>(ob: T): Array<keyof T>;
}
declare module "index" { }
