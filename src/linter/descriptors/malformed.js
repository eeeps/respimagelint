import error from '../../util/error';

export default function(item) {
	item.srcset.forEach(({descriptor}) => {
		if (descriptor && !descriptor.match(/^\d+(?:\.\d+)?[wx]$/)) {
			error(__filename, item, {
				descriptor,
			});
		}
	});
}
