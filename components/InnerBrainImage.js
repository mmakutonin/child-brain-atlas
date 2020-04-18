import React from "react";
import { View, Image } from "react-native";

export default class InteriorBrainImage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View>
        <Image
          source={require("../assets/InnerBrainBW.png")}
          style={{ width: 500, height: 450 }}
        />
      </View>
    );
  }
}
