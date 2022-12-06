import { useFonts } from 'expo-font';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { Provider } from 'react-redux';
import store from './src/store'


export default function App() {

  const [fontsLoaded] = useFonts({
    'Anybody': require('./src/assets/fonts/Anybody-Bold.ttf'),
    'Anybody2': require('./src/assets/fonts/Anybody-Medium.ttf'),
    'Anybody3': require('./src/assets/fonts/Anybody-Light.ttf')
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <Provider store={store}>
      <BottomTabNavigator />
    </Provider>

  )



}
