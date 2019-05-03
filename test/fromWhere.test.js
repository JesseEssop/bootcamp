describe('fromWhere test' , function(){
    it('This test that takes a car registration number as a parameter and returns the town the car is from' , function(){
        assert.equal(fromWhere("CY"),"Bellville" );
        assert.equal(fromWhere("CA"),"Cape Town" );
        assert.equal(fromWhere("CJ"),"Paarl" );
    });

});
