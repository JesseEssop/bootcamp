describe('transportFee test' , function(){
    it('should return the right price based on the shift you are working' , function(){
        assert.equal(transportFee("morning"), "R20" );
        assert.equal(transportFee("afternoon"), "R10" );
        assert.equal(transportFee("night"), "free" );
    });

});
