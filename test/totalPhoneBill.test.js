describe('totalPhoneBill test' , function(){
    it('This test takes in a string calls made and sms sent and calculates the total bill for the data provided.' , function(){
        assert.equal(totalPhoneBill("call"), "R2.75");
        assert.equal(totalPhoneBill("sms"), "R0.65");
        assert.equal(totalPhoneBill("call, sms"), "R3.40");
    });

});
