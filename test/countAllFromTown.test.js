describe('countAllFromTown  test' , function(){
    it('This test should return all the registration numbers in the string that is for that town.' , function(){
        assert.equal(countAllFromTown("CL 124,CY 567,CL 345,CJ 456,CL 341","CL"), 3);
        assert.equal(countAllFromTown("CL 124,CY 567,CL 345,CJ 456,CL 341","CJ"), 1);
        assert.equal(countAllFromTown("CL 124,CY 567,CL 345,CJ 456,CL 341","CY"), 1);
    });

});
