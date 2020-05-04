import colors from '../colors';
import color from 'color';

const bg = ([c1, c2], both = false) =>
	both ? `linear-gradient(to left,${c1} 0% 50%,${c2} 40% 100%)` : `linear-gradient(65deg,${c1},${c2})`;
export const BG = ([t1, t2]) => {
	const both = t1 && t2;
	const bgColors = [
		both ? colors[t1] : color(colors[t1]).darken(0.3).hex(),
		both ? colors[t2] : color(colors[t1]).lighten(0.1).hex(),
	];

	return bg(bgColors, both);
};

export const pokeNameColor = (Colors) => {
	const [t1, t2] = Colors;

	return [
		color(colors[t1]).lighten(0.4).hex(),
		t2 ? color(colors[t2]).darken(0.7).hex() : color(colors[t1]).darken(0.7).hex(),
	];
};
