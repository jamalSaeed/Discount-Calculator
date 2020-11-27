import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Modal
} from 'react-native';

export default function App () {
  const [origPrice, setOrigPrice] = useState(null);
  const [disPrice, setDisPrice] = useState(null);
  const [saving, setSaving] = useState();
  const [finalPrice, setFinalPrice] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [hisOrigPrice, setHisOrigPrice] = useState();
  const [hisDisPrice, setHisDisPrice] = useState();
  const [hisSaving, setHisSaving] = useState();
  const [hisFinalPrice, setHisFinalPrice] = useState();


  const discountFinder = (origPrice, disPrice) => {
    var discount = (disPrice / 100) * (origPrice);
    setSaving(discount);
    setFinalPrice(origPrice - discount);
    setHisOrigPrice(origPrice);
    setHisDisPrice(disPrice);
    setHisSaving(discount);
    setHisFinalPrice(origPrice - discount);
  }

  const refreshBtn = () => {
    setSaving(null);
    setFinalPrice(null);
  }


  return (
    <View style={ styles.container }>
      <Text style={ { fontSize: 30 } }>Welcome to Discount App!</Text>
      <View style={ styles.firstRow }>
        <Text style={ { marginTop: 8 } }>Original Price (in Rs)</Text>
        <TextInput
          style={ {
            height: 40,
            width: 80,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
            marginLeft: 55,
            padding: 10
          } }
          onChangeText={ text => setOrigPrice(text) }

        />
      </View>
      <View style={ styles.firstRow }>
        <Text style={ { marginTop: 8 } }>
          Discount Percentage (in %)</Text>
        <TextInput
          style={ {
            height: 40,
            width: 80,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
            marginLeft: 15,
            padding: 10
          } }
          onChangeText={ text => setDisPrice(text) }
        />
      </View>
      <View>
        <TouchableOpacity
          style={ styles.calcBtn }
          onPress={ () => discountFinder(origPrice, disPrice) } >
          <Text style={ { padding: 12, paddingLeft: 16 } }>Calculate</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>
          You Save : { saving }
        </Text>
        <Text>
          Final Price : { finalPrice }
        </Text>
      </View>
      <View style={ styles.firstRow }>
        <TouchableOpacity
          style={ styles.refBtn }
          onPress={ () => refreshBtn() } >
          <Text style={ { padding: 13, paddingLeft: 22 } }>Refresh</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={ styles.refBtn }
          onPress={ () => discountFinder(origPrice, disPrice) }
        >
          <Text style={ { padding: 13, paddingLeft: 29 } }>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={ styles.refBtn }
          onPress={ () => setModalVisible(true) } >
          <Text style={ { padding: 13, paddingLeft: 20 } }>History</Text>
        </TouchableOpacity>
      </View>
      <View style={ styles.centeredView }>
        <Modal
          animationType="slide"
          transparent={ true }
          visible={ modalVisible }
          onRequestClose={ () => {
            Alert.alert("Modal has been closed.");
          } }
        >

          <View style={ styles.centeredView }>
            <View style={ styles.modalView }>
              <Text style={ styles.modalText }>History</Text>
              <View>
                <Text>
                  Original Price : { hisOrigPrice }
                </Text>
                <Text>
                  Discount Price : { hisDisPrice }
                </Text>
              </View>
              <View>
                <Text>
                  You Save :       { hisSaving }
                </Text>
                <Text>
                  Final Price : { hisFinalPrice }
                </Text>
              </View>
              <TouchableHighlight
                style={ { ...styles.openButton, backgroundColor: "#2196F3", top: 90 } }
                onPress={ () => {
                  setModalVisible(!modalVisible);
                } }
              >
                <Text style={ styles.textStyle }>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    top: 100
  },

  firstRow: {
    margin: 10,
    flexDirection: 'row',
  },
  calcBtn: {
    backgroundColor: '#dc143c',
    borderRadius: 10,
    height: 45,
    width: 90
  },
  refBtn: {
    backgroundColor: '#dc143c',
    borderRadius: 10,
    height: 45,
    width: 90,
    marginLeft: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 10
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginTop: 0,
    marginBottom: 20,
    textAlign: "center"
  }
});
