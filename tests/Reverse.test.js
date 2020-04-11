const reverse = require('../Reverse')
test('Answer',()=>{
    expect(reverse([1,2,3])).toMatchObject([3,2,1]);
    expect( reverse([1,null,14,"two"])).toMatchObject( ["two",14,null,1] )
})