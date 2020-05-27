import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { findAll } from '../../services/Product.service';
import { setProducts } from '../../store/actions/Products.actions';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
		marginBottom: '2em',
	},
});

export default () => {
	const products = useSelector((state) => state.Product.products);
	const dispatch = useDispatch();
	const SetProducts = (products) => dispatch(setProducts(products));
	useEffect(() => {
		findAll().then(({ data }) => SetProducts(data));
	}, []);
	const classes = useStyles();
	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>#</TableCell>
						<TableCell>Product</TableCell>
						<TableCell>Reference</TableCell>
						<TableCell>Category</TableCell>
						<TableCell>Price$</TableCell>
						<TableCell>Weight(kg)</TableCell>
						<TableCell>Stock</TableCell>
						<TableCell>Last Sale</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{products.map((product) => (
						<TableRow key={product.id}>
							<TableCell component="th" scope="row">
								{product.id}
							</TableCell>
							<TableCell>{product.name}</TableCell>
							<TableCell>{product.reference}</TableCell>
							<TableCell>{product.category}</TableCell>
							<TableCell>{product.price}</TableCell>
							<TableCell>{product.weight}</TableCell>
							<TableCell>{product.stock}</TableCell>
							<TableCell>{product.last_sale_at ? product.last_sale_at : 'Not sold yet'}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
