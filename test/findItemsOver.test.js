describe('findItemsOver test', function () {
    it('The function should return products that have quantity higher than the threshold.', function () {
        assert.deepEqual(findItemsOver([
            { name: 'pears', qty: 3 },
            { name: 'bananas', qty: 27 },
        ], 25), [
                { name: 'bananas', qty: 27 }
            ]);
    });

});
