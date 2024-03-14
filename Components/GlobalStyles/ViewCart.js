

import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Alert

} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../GlobalStyles/GlobalStyles';
import Colors from './colors';
import styles from '../Notification/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import YtSearchSuggestions from '../Search/YtSearchSuggestions';

function ViewCart() {
  const navigation = useNavigation()
  const [openSearch, setOpenSearch] = useState(false)

  function onHideSearch() {
    setOpenSearch(false)
  }
  return (
    <TouchableOpacity
      onPress={async () => {
        const value = await AsyncStorage.getItem("Login")
        if (value) navigation.navigate("CartDetailScreen")
        else {
          Alert.alert("Plase login first")
          setTimeout(() => {
            navigation.navigate("Login")
          }, 1000)
        }
      }}
      style={GlobalStyles.ViewCartButton}>



      <Text
        style={[GlobalStyles.HeaderText, { color: Colors.Dark }]}
      >
        View Cart Detail
      </Text>





    </TouchableOpacity>
  );
};



export default ViewCart;
