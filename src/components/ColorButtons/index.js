import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple, red } from '../../constants/colors';

export const PurpleButton = styled(Button)(({ theme }) => ({
  color: 'white',
  backgroundColor: purple,
  '&:hover': {
    backgroundColor: purple,
  },
}));

export const RedButton = styled(Button)(({ theme }) => ({
  color: 'white',
  backgroundColor: red,
  '&:hover': {
    backgroundColor: red,
  },
}));

