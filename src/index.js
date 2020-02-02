import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import Navigator from './routes/routes';
import NavigationService from './services/navigationService';

const AppContainer = createAppContainer(Navigator);

class App extends Component {
  render() {
    return (
      <AppContainer ref={ref => NavigationService.setTopLevelNavigator(ref)} />
    );
  }
}

export default App;
