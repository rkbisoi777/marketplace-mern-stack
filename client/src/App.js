//import routing pages in App.js
// then based on the path show each components uesing react-router components
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Home from './marketplace/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import TopNav from './components/TopNav'

/**
 * Lets create TopNavigation/menu bar so that we can easily TopNavigate between pages.
 * Lets Write it in App.js before we move it to its own component
 * 
 */

function App() {
  return (
    <BrowserRouter>
      <TopNav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
