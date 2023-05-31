const check = require('./longestCommonSubstring')
test('Find longest common substring', ()=>{
    expect(check(['abcdef', 'abczyzcdef'], 2)).toEqual('ef')
})