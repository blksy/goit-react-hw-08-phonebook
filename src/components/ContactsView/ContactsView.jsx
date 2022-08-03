import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import Background from '../../pictures/bg_2.jpg';
import ListContact from '../ListContacts';
import ContactForm from '../ContactForm';
import Filter from '../Filter';

const styles = {
  Container: {
    backgroundImage: `url(${Background})
    `,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    paddingTop: '15px',
  },
};

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

const ContactsView = () => {
  return (
    <Container style={styles.Container}>
      <ThemeProvider theme={theme}>
        <ContactForm color="success" />
        <Filter />
        <ListContact />
      </ThemeProvider>
    </Container>
  );
};

export default ContactsView;
