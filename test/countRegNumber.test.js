describe('This test can check if a registration number is for GP, L, EC, MP registration plates.' , function(){
    it('countRegNumber test' , function(){
        assert.equal(countRegNumber("CJ7876,CJ8797,CJ8980"), 3);
        assert.equal(countRegNumber("CJ7876,CJ8797"), 2);
    });

});
