describe("Test Module d3", function() {

	var mod = "d3";

	var injectModule = __YFjs.injectModule;
	var resetNodes = __YFjs.resetNodes;
	var resetModuleNode = __YFjs.resetModuleNode;

	after(function() {
		resetNodes();
	});

	describe("from original", function() {

		var D3, error;

		before(function(done) {
			injectModule(mod, {'data-basecss': false, 'data-debug': true}, function(err, mdD3) {
				error = err;
				D3 = mdD3;
				done();
			});
		});
		
		after(function() {
			resetModuleNode(mod);
		});

		it("can be required", function() {
			should.not.exist(error);
			should.exist(D3);
		});

	});

	describe("from minified", function() {

		var D3, error;

		before(function(done) {
			injectModule(mod, {'data-basecss': false}, function(err, mdD3) {
				error = err;
				D3 = mdD3;
				done();
			});
		});
		
		after(function() {
			resetModuleNode(mod);
		});

		it("can be required", function() {
			should.not.exist(error);
			should.exist(D3);
		});

	});

});