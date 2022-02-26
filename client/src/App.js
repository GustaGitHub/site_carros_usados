import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home/home';
import NotFound from './pages/notFound/notFound';
import './index.css'

//Global Components
import Nav from './components/navbar/nav'
import Product from './pages/product/product';


function App() {
  
  return (
    <BrowserRouter>
      <Nav/>
      <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/product/:id' exact component={Product}/>
          <Route path='*' exact component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
