import React from 'react';
import Container from '@material-ui/core/Container';
import ProductsTable from './ProductsTable';
import Fab from '@material-ui/core/Fab';
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from '@reach/router';
import Home from '../Home/';
const useStyles = makeStyles((theme) => ({
	fab: {
		position: 'absolute',
		bottom: theme.spacing(3),
		right: theme.spacing(3),
	},
}));

export default () => {
	const classes = useStyles();
	return (
		<Home>
			<Container maxWidth="md" style={{ marginTop: '2em' }}>
				<ProductsTable />
				<Link to="new">
					<Fab className={classes.fab} color="primary" title="Create new product">
						<AddTwoToneIcon />
					</Fab>
				</Link>
			</Container>
		</Home>
	);
};
