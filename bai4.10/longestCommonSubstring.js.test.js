const longestCommonSubString = require('./longestCommonSubstring')
test('Find longest common substring', ()=>{
    expect(longestCommonSubString(['abcdef', 'abczyzcdef'], 2)).toEqual('ef')
})