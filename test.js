let answer = 10;
let arr = [];

for (let i = 0; i < n+1; i++) {
    arr[i] = i;
    if (arr[i] % 2 == 0) {
        answer += arr[i]
    }
}
