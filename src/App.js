import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme'
import GlobalStyle from './style/global';
import HeaderComponent from './components/header';
import HeroSection from './components/heroSection';
import BenefitsSection from './components/benefitsSection';
import Bestsellers from './components/bestsellers';
import Footer from './components/footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeaderComponent />
      <HeroSection />
      <BenefitsSection />
      <Bestsellers />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
