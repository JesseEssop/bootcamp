describe('findItemsOver20 test' , function(){
    it('should show you how to use MochaJS' , function(){
        assert.deepEqual(findItemsOver20([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ]),[{name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}] );
    });

});
