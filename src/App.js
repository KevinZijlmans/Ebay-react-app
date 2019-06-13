import React from 'react';
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom';
import store from './store'
import AdvertsListContainer from './components/Adverts/AdvertsListContainer'
import AdvertDetailsContainer from './components/Advert/AdvertDetailsContainer'
import CreateAdvertFormContainer from './components/Adverts/CreateAdvertFormContainer'
// import Navigation from './components/Navigation/Navigation';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div>
          {/* <nav>
            <Navigation />
          </nav> */}
          <Route path="/" exact component={AdvertsListContainer} />
          <Route path="/adverts/:id" component={AdvertDetailsContainer} />
          <Route path="/" exact component={CreateAdvertFormContainer } />
        </div>
      </Provider>
    </div>
  );
}
export default App;
