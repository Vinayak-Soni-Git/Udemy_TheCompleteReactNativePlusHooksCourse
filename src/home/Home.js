import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ApplicationRoutes } from '../constants/ApplicationRoutes'

export default function Home () {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate(ApplicationRoutes.ListBuildingScreen)}>
                <Text style={styles.buttonText}>List Building Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate(ApplicationRoutes.ColorScreen)}>
                <Text style={styles.buttonText}>Color Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate(ApplicationRoutes.SquareScreen)}>
                <Text style={styles.buttonText}>Square Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate(ApplicationRoutes.SquareScreenWithReducer)}>
                <Text style={styles.buttonText}>Square Screen With Reducer</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate(ApplicationRoutes.BoxScreen)}>
                <Text style={styles.buttonText}>Box Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate(ApplicationRoutes.RestaurantSearchApp)}>
                <Text style={styles.buttonText}>Restaurant Search App</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    button: {
        width: '60%',
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 4,
        padding: 10,
        marginVertical: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
    }
})
