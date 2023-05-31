/**
 * MapKey: Cho 1 mảng các key, vào 1 mảng các object , Viết một function để trả ra một mảng các object theo thứ tự mảng các key. ( Yêu cầu dùng hàm map )
 * @param {object, array} collections
 * @param {array} keys
 */
function mapKey(collections, keys) {
    let objs = collections.map((obj) => {
        return keys.reduce((acc, key) => {
            acc[key] = obj[key];
            return acc;
        }, {});
    });
    return objs.filter((obj) =>
        Object.values(obj).every((val) => val !== undefined)
    );
}
module.exports = mapKey;