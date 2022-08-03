import { useSelector } from 'react-redux';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar } from '@mui/material';
import { authSelectors } from '../../redux/auth';
import UserMenu from '../UserMenu';
import Navigation from './Navigation';
import AuthNav from './AuthNav';

const theme = createTheme({
  palette: {
    primary: {
      light: '#4436ac',
      main: '#35379d',
      dark: '#1900be',
      contrastText: '#fff',
    },
    secondary: {
      light: '#61ff81',
      main: '#19a11f',
      dark: '#022d01',
      contrastText: '#000',
    },
  },
});

const HeaderAppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar
          color="primary"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
export default HeaderAppBar;
