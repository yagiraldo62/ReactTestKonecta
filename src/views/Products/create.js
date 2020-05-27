import React from 'react';
import Container from '@material-ui/core/Container';
import CreateProductForm from './CreateProductForm';
import { makeStyles } from '@material-ui/core/styles';
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
				<CreateProductForm />
			</Container>
		</Home>
	);
};
