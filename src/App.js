import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme'
import GlobalStyle from './style/global';
import Modal from './components/modal';
import HeaderComponent from './components/header';
import Footer from './components/footer';
import { useSelector } from 'react-redux';

import HomePage from './pages/homepage';
import WishlistPage from './pages/wishlist';
import { Routes, Route } from 'react-router-dom';


function App() {


  const modalHidden = useSelector(state => state.modal.hidden);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {modalHidden ? ('') : (
        <Modal />
      )}

      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
