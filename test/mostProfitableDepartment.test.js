describe('mostProfitableDepartment test' , function(){
    it('This function should return the most profitable department' , function(){
        assert.equal(mostProfitableDepartment([
            {department: 'hardware', sales: 4500, day: 'Monday'},
            {department: 'outdoor', sales: 1500, day: 'Monday'},
            {department: 'carpentry', sales: 5500, day: 'Monday'},
        ]), 'carpentry');
    });

});
