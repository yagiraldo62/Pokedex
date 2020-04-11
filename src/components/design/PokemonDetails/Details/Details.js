import React from 'react';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Stats from './Stats';
import './style.scss';

const StyledTabs = withStyles({
	indicator: {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		'& > div': {
			maxWidth: 40,
			width: '100%',
			backgroundColor: '#635ee7',
		},
	},
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles((theme) => ({
	root: {
		textTransform: 'none',
		fontWeight: theme.typography.fontWeightBold,
		fontSize: theme.typography.pxToRem(15),
		marginRight: theme.spacing(1),
		'&:focus': {
			opacity: 1,
		},
	},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	padding: {
		padding: theme.spacing(3),
	},
}));
function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && <Box p={3}>{children}</Box>}
		</Typography>
	);
}
TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}
export default ({ pokemon }) => {
	const classes = useStyles();

	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			{pokemon && (
				<div className={classes.demo2}>
					<StyledTabs
						value={value}
						variant="fullWidth"
						onChange={handleChange}
						aria-label="styled tabs example"
					>
						<StyledTab label="Stats" {...a11yProps(0)} />
						<StyledTab label="Moves" {...a11yProps(1)} />
						<StyledTab label="Evolution" {...a11yProps(2)} />
					</StyledTabs>
					<TabPanel value={value} index={0} dir={theme.direction}>
						<Stats pokemon={pokemon} />
					</TabPanel>
					<TabPanel value={value} index={1} dir={theme.direction}>
						Moves
					</TabPanel>
					<TabPanel value={value} index={2} dir={theme.direction}>
						Item Three
					</TabPanel>
				</div>
			)}
		</div>
	);
};
