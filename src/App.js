import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Products from './pages/Products/Products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/about' component={About_us} /> */}
        <Route path='/products' component={Products} />
        {/* <Route path='/satellite' component={Satellite} /> */}
        {/* <Route path='/solarwind' component={SolarWind} /> */}
        {/* <Route path='/temperature' component={Temperature} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
