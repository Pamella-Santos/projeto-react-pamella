import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";

export default function Cadastro({ navigation }) {
  return (
    <View>
      <MenuAreaRestrita title="Cadastro" navigation={navigation} />
      <Text>Cadastro</Text>
    </View>
  );
}
