/**
 *Group by: Cho đầu vào là 1 collection ( array of object ), Viết một function để trả ra 1 OBJECT mới chứa dữ liệu được group theo trường chỉ định.
 * @param {Array} collection
 * @param {string} prop
 */
function groupBy(collection, prop) {
    return collection.reduce(function (acc, obj) {
        let key = obj[prop];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}
module.exports = groupBy;