import React, { useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useSelector, useDispatch } from 'react-redux';
import { findCateories } from '../../services/Product.service';
import { setCategories } from '../../store/actions/Products.actions';

export default ({ category, setCategory }) => {
	const categories = useSelector((state) => state.Product.categories);
	const dispatch = useDispatch();
	const SetCategories = (categories) => dispatch(setCategories(categories));
	useEffect(() => {
		findCateories().then(({ data }) => SetCategories(data));
	}, []);
	return (
		<FormControl
			component="fieldset"
			style={{ width: '100%', margin: '1em' }}
			onChange={(e) => setCategory(e.target.value)}
		>
			<FormLabel component="legend">Category</FormLabel>
			<RadioGroup row aria-label="position" name="position" defaultValue="1">
				{categories.map((cat) => (
					<FormControlLabel
						key={cat.id}
						value={cat.id}
						control={<Radio color="primary" />}
						label={cat.name}
						labelPlacement="start"
					/>
				))}
			</RadioGroup>
		</FormControl>
	);
};
