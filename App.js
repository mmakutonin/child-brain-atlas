/* eslint-disable func-style */
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BrainExterior from "./components/brainExterior";
import BrainInterior from "./components/brainInterior";
import LandingPageFx from "./components/LandingPage";
import NeuronPage from "./components/neuronPage";
import Heart from "./components/heart";

function brainExteriorFx() {
  return <BrainExterior></BrainExterior>;
}
function heartFx(){
  return <Heart></Heart>;
}

function brainInteriorFx() {
  return <BrainInterior></BrainInterior>;
}

function theNeuronFx() {
  return <NeuronPage></NeuronPage>;
}

const Stack = createStackNavigator();
export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="neuron">
          <Stack.Screen
            name="Landing Page"
            component={LandingPageFx}
            options={{ title: "Welcome to the Body" }}
          />
          <Stack.Screen
            name="exterior"
            component={brainExteriorFx}
            options={{ title: "The Exterior of the Brain" }}
          />
          <Stack.Screen
            name="interior"
            component={brainInteriorFx}
            options={{ title: "The Interior of the Brain" }}
          />
          <Stack.Screen
            name="neuron"
            component={theNeuronFx}
            options={{ title: "The Neuron" }}
          />
          <Stack.Screen
            name="heart"
            component={heartFx}
            options={{ title: "The Heart" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
