// Button.js
import { styled } from '@mui/system';

const Button = styled('button')(({ theme }) => ({
  backgroundColor: theme.vars.palette.primary.default,
  border: `1px solid ${theme.vars.palette.primary.dark}`,
  color: theme.vars.palette.text.default,
}));

export default Button;