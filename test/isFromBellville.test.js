describe('isFromBellville test', function () {
    it('This test returns true if a registration number is for Bellville otherwise returns false. Registration numbers for Bellville starts with CY.', function () {
        assert.equal(isFromBellville("CY 3545"), true);
        assert.equal(isFromBellville("CL 3545"), false);
        assert.equal(isFromBellville("CY 3545"), true);
    });

});
