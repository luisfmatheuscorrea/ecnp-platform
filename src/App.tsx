import Routes from './routes';
import GlobalStyles from './assets/styles/global';
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <CookiesProvider>
      <Routes />
      <GlobalStyles />
    </CookiesProvider>
  );
}

export default App;
