

const checkA = (arr10) => {
    let numA = 0;
    for (let i = 0; i < arr10.length; i++) {

        for (let j = 0; j < arr10[i].length; j++) {
            if (arr10[i][j] === 'a') {
                numA = numA + 1
                break
            }
        }

    }
    return numA
}

module.exports = checkA