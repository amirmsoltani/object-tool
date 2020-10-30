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
