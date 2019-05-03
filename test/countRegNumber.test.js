describe('countRegNumber test.' , function(){
    it('This test  that takes in a string and returns the number of registration numbers in the string.' , function(){
        assert.equal(countRegNumber("CJ7876,CJ8797,CJ8980"), 3);
        assert.equal(countRegNumber("CJ7876,CJ8797"), 2);
        assert.equal(countRegNumber("CJ7876,CJ8797,CA7865,CY4290,GP9087,EP7460"), 6);
    });

});
