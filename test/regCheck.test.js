describe('This test can check if a registration number is for GP, L, EC, MP registration plates.' , function(){
    it('regCheck test' , function(){
        assert.equal(regCheck("DV 23 NB GP","GP") ,true );
        assert.equal(regCheck("ERT 123 EC","GP") ,false );

    });

});
