import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ApplicationRoutes} from "../constants/ApplicationRoutes";
import Home from "../home/Home";
import ListBuildingScreen from "../Section_3_ListBuilding_WithStyle/ListBuildingScreen";
import ColorScreen from "../Section_6_StateManagementInReactComponent/ColorScreen";
import SquareScreen from "../Section_6_StateManagementInReactComponent/SquareScreen";
import SquareScreenWithReducer from "../Section_6_StateManagementInReactComponent/SquareScreenWithReducer";
import BoxScreen from '../Section_7_HowToHandleScreenLayout/BoxScreen'
import SearchScreen from '../Section_8_PuttingItAllTogether_RestaurantSearchApp/SearchScreen'
import ResultsShowScreen from '../Section_8_PuttingItAllTogether_RestaurantSearchApp/ResultsShowScreen'
import IndexScreen from '../Section_12_AdvancedStateManagementWithContext/IndexScreen'

const StackNavigator = createNativeStackNavigator()
export default function RootNavigator() {
    return (
        <NavigationContainer>
            <StackNavigator.Navigator initialRouteName={ApplicationRoutes.Home}>
                <StackNavigator.Screen name={ApplicationRoutes.Home} component={Home}/>
                <StackNavigator.Screen name={ApplicationRoutes.ListBuildingScreen} component={ListBuildingScreen}/>
                <StackNavigator.Screen name={ApplicationRoutes.ColorScreen} component={ColorScreen}/>
                <StackNavigator.Screen name={ApplicationRoutes.SquareScreen} component={SquareScreen}/>
                <StackNavigator.Screen name={ApplicationRoutes.SquareScreenWithReducer} component={SquareScreenWithReducer}/>
                <StackNavigator.Screen name={ApplicationRoutes.BoxScreen} component={BoxScreen}/>
                <StackNavigator.Screen name={ApplicationRoutes.RestaurantSearchApp} component={SearchScreen}/>
                <StackNavigator.Screen name={ApplicationRoutes.ResultsShowScreen} component={ResultsShowScreen}/>
                <StackNavigator.Screen name={ApplicationRoutes.BlogIndexScreen} component={IndexScreen}/>

            </StackNavigator.Navigator>
        </NavigationContainer>
    )
}
