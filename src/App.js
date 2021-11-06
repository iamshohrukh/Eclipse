import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Next from './pages/Next/Products';
import About from './pages/About/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
import Services from './pages/Services/Services';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/next' component={Next} />
        <Route path='/satellite' component={Services} />
        {/* <Route path='/solarwind' component={SolarWind} /> */}
        {/* <Route path='/temperature' component={Temperature} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
