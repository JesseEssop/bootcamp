describe('isFromBellville test', function () {
    it('This test returns true if a registration number is for Bellville otherwise returns false. Registration numbers for Bellville starts with CY.', function () {
        assert.equal(isFromBellville("CY 3545"), true);
        assert.equal(isFromBellville("CA 7966 "), false);
    });
    it('This test returns false if a registration number is not from Bellville otherwise returns true. Registration numbers for Bellville starts with CY.', function () {
        assert.equal(isFromBellville("CL 3545"), false);
        assert.equal(isFromBellville("CA 8690 "), false);
});
    it('This test returns false if the string is empty. Registration numbers for Bellville starts with CY.', function () {
        assert.equal(isFromBellville(" "), false);
});
});