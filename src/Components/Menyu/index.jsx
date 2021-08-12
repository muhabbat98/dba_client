import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Zoom from '@material-ui/core/Zoom';
import CardMedia from '@material-ui/core/CardMedia';
import Logo from '../../assets/dba.png'
import { Link } from 'react-router-dom'
import LanguageDropDown from './langDropdown'
import { languages, useLanguage } from '../../Providers/LangProvider'

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'fixed',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	},
	media: {
		width: "200px",
		height: '40px',
		objectFit: 'cover'
	},
	grow: {
		flexGrow: 1,
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: "rgba(42,42, 80, 0.2)",
		transition: "0.5s all ease",
		'&:hover': {
			backgroundColor: "rgba(42,42, 80, 0.5)",
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
		color: "var(--main-text-color)"
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: "var(--main-text-color)"
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
	navbar_appbar: {
		background: 'white',
		//   position:'relative'
	},
	navbar_root_dropdown: {
		zIndex: 5
	}

}));

function ScrollTop(props) {
	const { children, window } = props;
	const classes = useStyles();
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 100,
	});

	const handleClick = (event) => {
		const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

		if (anchor) {
			anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};

	return (
		<Zoom in={trigger}>
			<div onClick={handleClick} role="presentation" className={classes.root}>
				{children}
			</div>
		</Zoom>
	);
}

ScrollTop.propTypes = {
	children: PropTypes.element.isRequired,

	window: PropTypes.func,
};

export default function BackToTop(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);
	const [language] = useLanguage(false)
	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};
	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}

		prevOpen.current = open;
	}, [open]);
	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar position="static" className={classes.navbar_appbar}>
				<Toolbar>
					<CardMedia
						className={classes.media}
						image={Logo}
						title="Paella dish"
					/>
					<p className="navbar-site-name">{languages[language].logo}</p>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<ul className="navbar-menyu-links">
							<li><Link to="/">{languages[language].home}</Link></li>
							<li>
								<div className='navbar-department-link'>
									<Button
										ref={anchorRef}
										aria-controls={open ? 'menu-list-grow' : undefined}
										aria-haspopup="true"
										onClick={handleToggle}
										className="navbar-toggle-menyu"
									>
										{languages[language].departments}
									</Button>
									<Popper className={classes.navbar_root_dropdown} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
										{({ TransitionProps, placement }) => (
											<Grow
												{...TransitionProps}
												style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
											>
												<Paper>
													<ClickAwayListener onClickAway={handleClose}>
														<MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
															<MenuItem onClick={handleClose}>
																<Link to="/science">{languages[language].science}</Link>
															</MenuItem>
															<MenuItem onClick={handleClose}>
																<Link to="/foriegn">{languages[language].foreign}</Link>
															</MenuItem>
															<MenuItem onClick={handleClose}>
																<Link to="/journals">{languages[language].journals}</Link>
															</MenuItem>
														</MenuList>
													</ClickAwayListener>
												</Paper>
											</Grow>
										)}
									</Popper>
								</div>
							</li>
							<li><Link to="/">{languages[language].aboutUs}</Link></li>
							<li><Link to="/login">{languages[language].signIn}</Link></li>
							<li><LanguageDropDown /></li>
						</ul>
					</div>
				</Toolbar>
			</AppBar>
			<Toolbar id="back-to-top-anchor" />

			<ScrollTop {...props}>
				<Fab color="secondary" size="small" aria-label="scroll back to top">
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
		</React.Fragment>
	);
}
