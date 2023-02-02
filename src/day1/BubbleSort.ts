export default function bubble_sort(arr: number[]): void {
    let end = arr.length - 1;

    while (end > 0) {
        for (let i = 0; i < end; i++) {
            const v1 = arr[i];
            const v2 = arr[i + 1];

            if (v1 > v2) {
                arr[i] = v2;
                arr[i + 1] = v1;
            }
        }
        end -= 1;
    }
}
