import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme'
import GlobalStyle from './style/global';
import HeaderComponent from './components/header';
import HeroSection from './components/heroSection';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeaderComponent />
      <HeroSection />
    </ThemeProvider>
  );
}

export default App;
