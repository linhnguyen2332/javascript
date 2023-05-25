/**
 * chunk: Cho một mảng đầu vào, viết một function để chia đều mảng theo số phần chỉ định
 * @param {array} array 
 * @param {num} target 
 * @returns 
 */

function remakeChunk(array, target) {
    if (target <= 0) return [array];
    const numberArray = Math.floor(array.length / target);
    const remainder = array.length % target;
    const chunks = [];
    let startIndex = 0;
    for (let i = 0; i < target; i++) {
        const chunkSize = numberArray + (i < remainder ? 1 : 0);
        const endIndex = startIndex + chunkSize;
        chunks.push(array.slice(startIndex, endIndex));
        startIndex = endIndex;
    }
    return chunks;
}

module.exports = remakeChunk;