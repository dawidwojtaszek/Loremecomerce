import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme'
import GlobalStyle from './style/global';
import HeaderComponent from './components/header';
import HeroSection from './components/heroSection';
import BenefitsSection from './components/benefitsSection';
import Bestsellers from './components/bestsellers';
import Footer from './components/footer';
import { useDispatch } from 'react-redux';
import { setItemsList } from './redux/items';
import SHOP_DATA from './assets/data/shopData';

function App() {
  const dispatch = useDispatch();
  dispatch(setItemsList(SHOP_DATA));
  const bestsellers = SHOP_DATA.filter(item => (item.bestseller === true));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeaderComponent />
      <HeroSection />
      <BenefitsSection />
      <Bestsellers bestsellerList={bestsellers} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
