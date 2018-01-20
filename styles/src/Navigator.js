import { StackNavigator } from 'react-navigation';

import Teste from './Teste';
import Tela from './Tela';

const App = StackNavigator({
  Tela: { screen: Tela },
  Teste: { screen: Teste }
  
})

export default App;


