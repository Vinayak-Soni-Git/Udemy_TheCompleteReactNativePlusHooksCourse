import {Button, View, FlatList} from "react-native";
import {useState} from "react";

const ColorScreen = () => {
    const [colors, setColors] = useState([])
    return (
        <View>
            <Button onPress={()=>{
                setColors([...colors, randomRgb()])
            }} title={'Add a color'} />

            <FlatList
                keyExtractor={(item)=>item}
                data={colors}
                renderItem={({item}) =>{
                    return(
                        <View style={{width:100, height:100, backgroundColor:item}} ></View>
                    )
            }} />
        </View>
    )
}

const randomRgb = ()=>{
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)

    return `rgb(${red}, ${green}, ${blue})`
}

export default ColorScreen;

