describe('mostProfitableDepartment test' , function(){
    it('should show you how to use MochaJS' , function(){
        assert.equal(mostProfitableDepartment([
            {department: 'hardware', sales: 4500, day: 'Monday'},
            {department: 'outdoor', sales: 1500, day: 'Monday'},
        ]), 'hardware');
    });

});
