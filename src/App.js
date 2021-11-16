import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme'
import GlobalStyle from './style/global';
import Modal from './components/modal';
import HeaderComponent from './components/header';
import Footer from './components/footer';
import { useSelector } from 'react-redux';
import MobileMenu from './components/mobileMenu';
import HomePage from './pages/homepage';
import WishlistPage from './pages/wishlist';
import ShopPage from './pages/shop';
import { Routes, Route } from 'react-router-dom';



function App() {


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
