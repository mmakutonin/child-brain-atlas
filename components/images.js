import React from "react"
import { Stylesheet, Text, View, Image} from 'react-native';

export default class BrainImage extends React.Component {
constructor(){
super()}
render() {
return (
    <View>
<Image
 source ={require('../assets/OuterBrain.png')}
 style={{width: 40, height: 40}}
 />
 </View>
)
}
}