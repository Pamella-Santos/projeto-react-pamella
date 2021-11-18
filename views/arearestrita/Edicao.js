import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";

export default function Edicao({ navigation }) {
  return (
    <View>
      <MenuAreaRestrita title="Edição" navigation={navigation} />
      <Text>Edicao</Text>
    </View>
  );
}
