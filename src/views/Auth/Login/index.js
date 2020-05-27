import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import ThemeSelector from '../../../components/App/ThemeSelector';
import { useStyles, ThemeSelectorContaner, Copyright, ForgotPassword } from './styles';
import { Textfield, PasswordField } from '../../../components/Forms/Input';
import { Button } from '../../../components/common/Button';
// login logic
import LoginWrapper from './wrapper';

const Login = ({ Username, setUsername, Password, setPassword, loading, login }) => {
	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<div className={classes.paper}>
				<ThemeSelectorContaner>
					<ThemeSelector />
				</ThemeSelectorContaner>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Iniciar Sesión
				</Typography>
				<form className={classes.form} noValidate onSubmit={login}>
					<Textfield
						variant="outlined"
						margin="normal"
						required
						fullWidth
						label="Usuario"
						autoComplete="name"
						autoFocus
						value={Username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<PasswordField
						variant="outlined"
						margin={20}
						required
						fullWidth
						name="password"
						label="Contraseña"
						autoComplete="current-password"
						value={Password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						loading={loading}
					>
						Ingresar
					</Button>
					{/* <ForgotPassword /> */}
				</form>
			</div>
			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>
	);
};

export default LoginWrapper(Login);
