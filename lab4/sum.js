function sumFor(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

function sumForOf(...args) {
    let sum = 0;
    for (const num of args) {
        sum += num;
    }
    return sum;
}

function sumWhile(...args) {
    let sum = 0;
    let i = 0;
    while (i < args.length) {
        sum += args[i];
        i++;
    }
    return sum;
}

function sumDoWhile(...args) {
    let sum = 0;
    let i = 0;
    if (args.length === 0) {
        return 0;
    }
    do {
        sum += args[i];
        i++;
    } while (i < args.length);
    return sum;
}

function sumMethod(...args) {
    return args.reduce((acc, v) => acc + v, 0);
}