import useBem from '.';

describe('use-bem unit test', function () {
	const block = useBem('block');

	it('return given argument at the first time ("block")', function () {
		expect(block()).toEqual('block');
	});

	it('return the merged "block" and "element" by double underscore ("block__element")', function () {
		expect(block('element')).toEqual('block__element');
	});

	it('return the merged "block" and "element" by double underscore and modifier by double dash ("block__element--modify")', function () {
		expect(block('element', 'modify')).toEqual('block__element--modify');
	});
});
