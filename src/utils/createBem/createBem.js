// import className from 'classnames';

function createBem(block) {
	function useElement(element, modifier) {
		if (element) {
			if (modifier) {
				return `${block}__${element}--${modifier}`;
			}

			return `${block}__${element}`;
		}

		if (modifier) {
			return `${block} ${block}--${modifier}`;
		}

		return `${block}`;
	}

	return useElement;
}

export default createBem;
