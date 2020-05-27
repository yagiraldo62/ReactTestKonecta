import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

export const Textfield = (props) => <TextField {...props} />;

export const PasswordField = (props) => {
	const [show, setShow] = useState(false);
	const { label, margin } = props;
	const handleClickShowPassword = () => setShow(!show);
	const w100 = { width: '100%' };
	return (
		<FormControl variant="outlined" style={{ ...w100, marginTop: `${margin}px` }}>
			<InputLabel htmlFor={`${label}-password`}>{label}</InputLabel>
			<OutlinedInput
				style={{ ...w100 }}
				id={`${label}-password`}
				type={show ? 'text' : 'password'}
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							onClick={handleClickShowPassword}
							edge="end"
						>
							{!show ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				}
				{...props}
				margin={'none'}
			/>
		</FormControl>
	);
};
