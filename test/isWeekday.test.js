describe('This test will return false if a day starts with "S", otherwise it will return true' , function(){
    it('isWeekday test' , function(){
        assert.equal(isWeekday("Sunday"), false);
    });

});
