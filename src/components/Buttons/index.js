import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { grey, purple, red } from '../../constants/colors';

export const PurpleButton = styled(Button)(() => ({
  color: 'white',
  backgroundColor: purple,
  '&:hover': {
    backgroundColor: purple,
  },
  '&:disabled': {
    backgroundColor: grey,
  }
}));

export const RedButton = styled(Button)(() => ({
  color: 'white',
  backgroundColor: red,
  '&:hover': {
    backgroundColor: red,
  },
  '&:disabled': {
    backgroundColor: grey,
  }
}));

export const WhiteButton = styled(Button)(() => ({
  color: purple,
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: 'white',
  },
  '&:disabled': {
    backgroundColor: grey,
  }
}));

