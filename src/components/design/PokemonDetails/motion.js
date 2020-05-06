import posed from 'react-pose';

export const DetailsContainer = posed.div({
	enter: {
		opacity: 1,
		transition: {
			duration: 0,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 300,
		},
	},
});

export const Top = posed.div({
	enter: {
		y: 0,
		opacity: 1,
		transition: {
			y: { type: 'spring', stiffness: 50 },
			duration: 400,
		},
	},
	exit: {
		y: '-100%',
		opacity: 0,
		transition: {
			duration: 400,
		},
	},
});

export const Bottom = posed.div({
	enter: {
		top: '50%',
		opacity: 1,
		transition: {
			duration: 400,
		},
	},
	exit: {
		top: '100%',
		opacity: 0,
		transition: {
			duration: 400,
		},
	},
});
