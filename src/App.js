import {ThemeProvider} from 'styled-components';
import {theme} from './style/theme'
import GlobalStyle from './style/global';
import HeaderComponent from './components/header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeaderComponent>
        
      </HeaderComponent>
    </ThemeProvider>
  );
}

export default App;
