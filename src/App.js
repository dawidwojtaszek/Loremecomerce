import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme'
import GlobalStyle from './style/global';
import Modal from './components/modal';
import HeaderComponent from './components/header';
import HeroSection from './components/heroSection';
import BenefitsSection from './components/benefitsSection';
import Bestsellers from './components/bestsellers';
import Footer from './components/footer';
import { useDispatch, useSelector } from 'react-redux';
import { setItemsList } from './redux/items';
import SHOP_DATA from './assets/data/shopData';

function App() {
  const dispatch = useDispatch();
  dispatch(setItemsList(SHOP_DATA));
  const bestsellers = SHOP_DATA.filter(item => (item.bestseller === true));
  const modalHidden = useSelector(state => state.modal.hidden);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {modalHidden ? ('') : (
        <Modal />
      )}

      <HeaderComponent />
      <HeroSection />
      <BenefitsSection />
      <Bestsellers bestsellerList={bestsellers} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
