export function randInt(max: number, min: number = 0) {
    return Math.floor(Math.random() * (max - min)) + min;
}


export default function ({ length = 10, min = 0, max = 1000 }: { length?: number, min?: number, max?: number }) {
    const ob: { [key: string]: number } = {};
    let add = 0;
    let flag: null | number = null;
    for (let i = 65; i + 57 * add < length + 65; i++) {
        if (i > 122) {
            add++;
            i = 65;
            continue;
        }
        else if (i > 90 && i < 97)
            flag = i - 43;
        if (flag === null) {
            ob[String.fromCharCode(i) + (add || '')] = randInt(max, min);
        }
        else {
            ob['_' + String.fromCharCode(flag) + (add || '')] = randInt(max, min);
            flag = null;
        }

    }
    return ob;
}