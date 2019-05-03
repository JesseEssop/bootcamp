describe('isWeekday' , function(){
    it('This test will return false if a day starts with "S", otherwise it will return true' , function(){
        assert.equal(isWeekday("Sunday"), false);
        assert.equal(isWeekday("Monday"), true);
        assert.equal(isWeekday("Saturday"), false);
    });

});
