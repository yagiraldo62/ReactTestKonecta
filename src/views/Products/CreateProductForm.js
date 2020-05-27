import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Textfield } from '../../components/Forms/Input';
import { W100 } from '../../components/common/Box';
import { makeStyles } from '@material-ui/core/styles';
import Categories from './Categories';
import { create } from '../../services/Product.service';
import { Button } from '../../components/common/Button';
const FormControl = W100(Box);

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '50ch',
			maxWidth: '100%',
		},
	},
	margin: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
}));

export default () => {
	const classes = useStyles();
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState('');
	const [reference, setReference] = useState('');
	const [price, setPrice] = useState(0);
	const [weight, setWeight] = useState(0);
	const [stock, setStock] = useState(1);
	const [category, setCategory] = useState(1);

	const data = { name, reference, price, weight, stock, category };

	const save = (e) => {
		e.preventDefault();
		setLoading(true);
		create(data).then((res) => {
			setLoading(false);
			window.location.replace('/');
		});
	};
	return (
		<form className={classes.root} onSubmit={save}>
			<Typography variant="h5" component="h2">
				Create Product
			</Typography>
			<FormControl>
				<Textfield
					value={name}
					onChange={(e) => setName(e.target.value)}
					variant="outlined"
					margin="normal"
					required
					label="Product"
					id="Product"
				/>
				<Textfield
					value={reference}
					onChange={(e) => setReference(e.target.value)}
					variant="outlined"
					margin="normal"
					required
					label="Reference"
					id="Reference"
				/>
				<Textfield
					value={price}
					onChange={(e) => setPrice(e.target.value)}
					variant="outlined"
					margin="normal"
					required
					label="Price"
					id="Price"
					type="number"
				/>
				<Textfield
					value={weight}
					onChange={(e) => setWeight(e.target.value)}
					variant="outlined"
					margin="normal"
					required
					label="Weight"
					id="Weight"
					type="number"
				/>
				<Textfield
					value={stock}
					onChange={(e) => setStock(e.target.value)}
					variant="outlined"
					margin="normal"
					required
					label="Stock"
					id="Stock"
					type="number"
				/>
				<Categories category={category} setCategory={setCategory} />
			</FormControl>
			<Button
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
				className={classes.margin}
				loading={loading}
			>
				Crear Producto
			</Button>
		</form>
	);
};
