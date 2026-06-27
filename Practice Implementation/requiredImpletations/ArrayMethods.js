function each(elements, callback) {
    if (!Array.isArray(elements)) {
        throw new TypeError("Expected an array");
    }

    if (typeof callback !== "function") {
        throw new TypeError("Expected a callback function");
    }

    const length = elements.length;

    for (let i = 0; i < length; i++) {
        if (i in elements) {
            callback(elements[i], i, elements);
        }
    }
}


function map(elements, callback) {
    if (!Array.isArray(elements)) {
        throw new TypeError("Expected an array");
    }

    if (typeof callback !== "function") {
        throw new TypeError("Expected a callback function");
    }

    const length = elements.length;
    const result = new Array(length);

    for (let i = 0; i < length; i++) {
        if (i in elements) {
            result[i] = callback(elements[i], i, elements);
        }
    }

    return result;
}

function filter(elements, callback) {
    if (!Array.isArray(elements)) {
        throw new TypeError("Expected an array");
    }

    if (typeof callback !== "function") {
        throw new TypeError("Expected a callback function");
    }

    const result = [];
    const length = elements.length;

    for (let i = 0; i < length; i++) {
        if (i in elements) {
            if (callback(elements[i], i, elements)) {
                result.push(elements[i]);
            }
        }
    }

    return result;
}


function find(elements, callback) {
    if (!Array.isArray(elements)) {
        throw new TypeError("Expected an array");
    }

    if (typeof callback !== "function") {
        throw new TypeError("Expected a callback function");
    }

    const length = elements.length;

    for (let i = 0; i < length; i++) {
        if (i in elements) {
            if (callback(elements[i], i, elements)) {
                return elements[i];
            }
        }
    }

    return undefined;
}


function reduce(elements, callback, initialValue) {
    if (!Array.isArray(elements)) {
        throw new TypeError("Expected an array");
    }

    if (typeof callback !== "function") {
        throw new TypeError("Expected a callback function");
    }

    const length = elements.length;
    let accumulator;
    let startIndex = 0;

    if (initialValue !== undefined) {
        accumulator = initialValue;
    } else {
        while (startIndex < length && !(startIndex in elements)) {
            startIndex++;
        }

        if (startIndex >= length) {
            throw new TypeError("Reduce of empty array with no initial value");
        }

        accumulator = elements[startIndex];
        startIndex++;
    }

    for (let i = startIndex; i < length; i++) {
        if (i in elements) {
            accumulator = callback(accumulator, elements[i], i, elements);
        }
    }

    return accumulator;
}


function flatten(elements) {
    if (!Array.isArray(elements)) {
        throw new TypeError("Expected an array");
    }

    const result = [];

    function helper(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (!(i in arr)) {
                continue;
            }

            if (Array.isArray(arr[i])) {
                helper(arr[i]);
            } else {
                result.push(arr[i]);
            }
        }
    }

    helper(elements);

    return result;
}


function keys(obj) {
    if (obj === null || typeof obj !== "object") {
        throw new TypeError("Expected an object");
    }

    const result = [];

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result.push(key);
        }
    }

    return result;
}

function values(obj) {
    if (obj === null || typeof obj !== "object") {
        throw new TypeError("Expected an object");
    }

    const result = [];

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result.push(obj[key]);
        }
    }

    return result;
}


function entries(obj) {
    if (obj === null || typeof obj !== "object") {
        throw new TypeError("Expected an object");
    }

    const result = [];

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result.push([key, obj[key]]);
        }
    }

    return result;
}

function fromEntries(entries) {
    if (!Array.isArray(entries)) {
        throw new TypeError("Expected an array");
    }

    const result = {};

    for (let i = 0; i < entries.length; i++) {
        if (!(i in entries)) {
            continue;
        }

        const entry = entries[i];

        if (!Array.isArray(entry) || entry.length !== 2) {
            throw new TypeError("Each entry must be a [key, value] pair");
        }

        const [key, value] = entry;
        result[key] = value;
    }

    return result;
}

function sort(elements, callback) {
    if (!Array.isArray(elements)) {
        throw new TypeError("Expected an array");
    }

    if (callback !== undefined && typeof callback !== "function") {
        throw new TypeError("Expected a callback function");
    }

    const compare = callback || ((a, b) => String(a).localeCompare(String(b)));

    const length = elements.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (compare(elements[j], elements[j + 1]) > 0) {
                const temp = elements[j];
                elements[j] = elements[j + 1];
                elements[j + 1] = temp;
            }
        }
    }

    return elements;
}