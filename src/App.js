import React from 'react';
import Router from './layouts/AnimatedRouter';
import Views from './views/';
import { Redirect } from '@reach/router';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import useTheme from './utils/hooks/theme';
import PrivateRoute from './layouts/PrivateRoute';
import UnprotectedRoute from './layouts/UnprotectedRoute';

const { Login, Product, CreateProduct } = Views;

function App() {
	const theme = useTheme();
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />

			<Router>
				<UnprotectedRoute path="/login" Component={Login} />
				<PrivateRoute path="/" Component={Product} />

				<PrivateRoute path="/new" Component={CreateProduct} />
				<Redirect noThrow from="*" to="/login" />
			</Router>
		</ThemeProvider>
	);
}

export default App;
