import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Foriegn from './Foriegn'
import Sience from './Sience'
import Journal from './Journal'
import AddUser from './Adduser'
function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
		role="tabpanel"
		hidden={value !== index}
		id={`vertical-tabpanel-${index}`}
		aria-labelledby={`vertical-tab-${index}`}
		{...other}
		>
		{value === index && (
			<Box p={3}>
				<Typography>{children}</Typography>
			</Box>
		)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: 'flex',
		height: '100vh',

	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
		width: '240px',
		height: '100vh',
		position: 'fixed',
		backgroundColor: 'white'
	},
	tabPanalField: {
		width: 'calc(100% - 240px)',
		marginLeft: 'auto'
  }
}));

export default function VerticalTabs() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<Tabs
				orientation="vertical"
				variant="scrollable"
				value={value}
				onChange={handleChange}
				aria-label="Vertical tabs example"
				className={classes.tabs}
			>
				<Tab label="Foriegn Department" {...a11yProps(0)} />
				<Tab label="Sience Department" {...a11yProps(1)} />
				<Tab label="Journal Department" {...a11yProps(2)} />
				<Tab label="Add New User" {...a11yProps(3)} />
				<Tab label="Item Five" {...a11yProps(4)} />
				<Tab label="Item Six" {...a11yProps(5)} />
				<Tab label="Item Seven" {...a11yProps(6)} />
			</Tabs>
			<TabPanel className={classes.tabPanalField} value={value} index={0}>
				<Foriegn />
			</TabPanel>
			<TabPanel className={classes.tabPanalField} value={value} index={1}>
				<Sience />
			</TabPanel>
			<TabPanel className={classes.tabPanalField} value={value} index={2}>
				<Journal/>
			</TabPanel>
			<TabPanel className={classes.tabPanalField} value={value} index={3}>
				<AddUser/>
			</TabPanel>
			<TabPanel className={classes.tabPanalField} value={value} index={4}>
				Item Five
			</TabPanel>
			<TabPanel className={classes.tabPanalField} value={value} index={5}>
				Item Six
			</TabPanel>
			<TabPanel className={classes.tabPanalField} value={value} index={6}>
				Item Seven
			</TabPanel>
		</div>
  );
}
