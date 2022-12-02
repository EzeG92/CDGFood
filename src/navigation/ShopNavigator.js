import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryHambScreen from "../screens/CategoryHambScreen";
import HambDetailScreen from "../screens/HambDetailScreen";
import CategoryPizzaScreen from "../screens/CategoryPizzaScreen";
import { Colors } from "../constants/colors";

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Categorias" screenOptions={{
            headerStyle: { backgroundColor: Colors.secondary },
            headerTintColor: Colors.primary,
            headerTitleStyle: { fontWeight: 'bold' }
        }}>
            <Stack.Screen
                name='Menu'
                component={CategoriesScreen}
                options={{
                    title: 'CDG Food',
                }} />
            <Stack.Screen
                name='Hamburguesas'
                component={CategoryHambScreen}
                options={({ route }) => ({ title: route.params.name })} />
            <Stack.Screen
                name='Pizzas'
                component={CategoryPizzaScreen}
                options={({ route }) => ({ title: route.params.name })} />
            <Stack.Screen
                name='Detalle'
                component={HambDetailScreen}
                options={({ route }) => ({ title: route.params.name })} />


        </Stack.Navigator>
    )
}