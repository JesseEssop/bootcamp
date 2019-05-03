describe('regCheck test' , function(){
    it('This test can check if a registration number is for GP, L, EC, MP registration plates.' , function(){
        assert.equal(regCheck("DV 23 NB GP","GP") ,true );
        assert.equal(regCheck("ERT 123 EC","GP") ,false );
        assert.equal(regCheck("ERT 123 EC","EC") ,true );


    });

});
