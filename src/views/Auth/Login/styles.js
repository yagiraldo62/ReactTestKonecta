import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { W100 } from '../../../components/common/Box';
import { TextCentered } from '../../../components/common/Text';

export const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		position: 'relative',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export const ThemeSelectorContaner = styled.div`
	position: absolute;
	top: -3em;
	right: 0;

	.MuiSvgIcon-root {
		font-size: 1.3em !important;
	}
`;

const ForgotPasswordContainer = W100(TextCentered(Box));

export const ForgotPassword = () => (
	<ForgotPasswordContainer>
		<Link href="#" variant="body2">
			¿Olvido su contraseña?
		</Link>
	</ForgotPasswordContainer>
);

export const Copyright = () => {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
};
