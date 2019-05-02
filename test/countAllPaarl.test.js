describe('countAllPaarl', function(){
    it('This test takes a parameter string with registration numbers separated with commas and returns all the registration numbers in the string for Paarl.' , function(){
        assert.equal(countAllPaarl("CJ345123, CJ2345, CL123-546, CK345, CJ123"), 3);
    });

});
