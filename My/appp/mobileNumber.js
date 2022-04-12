import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Button } from "react-native";

const MobileNumber = () => {
  const [number, onChangeNumber] = React.useState(null);
  const [button, onPressLearnMore] = React.useState(null);

  return (
    <>
    <View style={styles.container}>
    <SafeAreaView >
      <TextInput
        style={[styles.input,  {
          transform: [{ translateY: -80 }]
        }]}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="मोबाइल नंबर"
        placeholderTextColor="#AECBB2" 
        keyboardType="numeric"
      />
        <Button
  onPress={onPressLearnMore}
  style={styles.Button}
  title="Learn More"
  accessibilityLabel="Learn more about this purple button"
/>
    </SafeAreaView>
    </View>
    </>
  );
};

const styles = StyleSheet.create({ 
  container: {
    backgroundColor: '#F8FFF9',
    height:100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: "white",
    height: 56,
    width: 330,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#004805',
    padding: 10, 
    textAlign: "center",  
    fontFamily: "Segoe UI", 
    fontSize: 23,
    fontWeight: "bold",
    letterSpacing:10,
  },
  Button: {
    
  },
});
export default MobileNumber; 