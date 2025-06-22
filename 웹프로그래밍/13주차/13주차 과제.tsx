// 과제 1
function map<T, U>(
    arr: T[],
    callback: (value: T, index: number, array: T[]) => U
    ): U[] {
    const result: U[] = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }

    return result;
}

    function myForEach<T>(
        array: T[],
        callback: (value: T, index: number, array: T[]) => void
        ): void {
        for (let i = 0; i < array.length; i++) {
            callback(array[i], i, array);
        }
    }
