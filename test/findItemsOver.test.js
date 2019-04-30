describe('findItemsOver test', function () {
    it('should show you how to use MochaJS', function () {
        assert.deepEqual(findItemsOver([
            { name: 'pears', qty: 3 },
            { name: 'bananas', qty: 27 },
        ], 25), [
                { name: 'bananas', qty: 27 }
            ]);
    });

});
