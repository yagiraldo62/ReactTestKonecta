import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { logOut } from '../../utils/helpers/UserStorage';
import ThemeSelector from '../../components/App/ThemeSelector';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default ({ children }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Products
					</Typography>
					<ThemeSelector white={true} />
					<Button color="inherit" onClick={() => logOut()}>
						logout
					</Button>
				</Toolbar>
			</AppBar>
			{children}
		</div>
	);
};
