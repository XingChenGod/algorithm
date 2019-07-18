// 是否一个对象
function isObject(v) {
    return v !== null && typeof v === 'object';
}

function looseEqual(a, b) {
    if (a === b) return true;
    var objectA = isObject(a),
        objectB = isObject(b);
    if (objectA && objectB) {
        // 都是对象
        try {
            var arrayA = Array.isArray(a);
            var arrayB = Array.isArray(b);
            if (arrayA && arrayB) {
                // 两个都是数组
                return a.length === b.length && a.every((e, i) => {
                    return looseEqual(e, b[i]);
                });
            } else if (a instanceof Date && b instanceof Date) {
                return a.getTime() === b.getTime();
            } else if (!arrayA && !arrayB) {
                // 两个都不是数组，那就是对象咯
                var keyA = Object.keys(a);
                var keyB = Object.keys(b);
                return keyA.length === keyB.length && keyA.every(key => {
                    return looseEqual(a[key], b[key]);
                });
            }
        } catch (e) {
            return false;
        }
    } else if (!objectA && !objectB) {
        // 两者都不是对象，都是基础数据类型
        return String(a) === String(b);
    } else {
        return false;
    }
}
