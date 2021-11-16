import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme'
import GlobalStyle from './style/global';
import Modal from './components/modal';
import HeaderComponent from './components/header';
import Footer from './components/footer';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setItemsList } from './redux/items';
import MobileMenu from './components/mobileMenu';
import HomePage from './pages/homepage';
import WishlistPage from './pages/wishlist';
import ShopPage from './pages/shop';
import { Routes, Route } from 'react-router-dom';
import SHOP_DATA from './assets/data/shopData';



function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setItemsList(SHOP_DATA));
  }, [])

  const modalHidden = useSelector(state => state.modal.hidden);
  const menuHidden = useSelector(state => state.menu.hidden);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {modalHidden ? ('') : (
        <Modal />
      )}
      {menuHidden ? ('') : (
        <MobileMenu />
      )}

      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
