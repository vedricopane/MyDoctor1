import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DummyHospital1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListHospital = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyHospital1} style={styles.picture} />
      <View>
        <Text style={styles.title}>Rumah Sakit Citra Bunga Merdeka</Text>
        {/* <Text>Citra Bunga Merdeka</Text> */}
        <Text style={styles.address}>Jln. Surya Sejahtera 20</Text>
      </View>
    </View>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  picture: {
    width: 80,
    height: 60,
    borderRadius: 11,
    marginRight: 16
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    maxWidth: 158,
  },
  address: {
    fontSize: 12, fontFamily: fonts.primary[300], color: colors.text.secondary, marginTop: 6
  }
});
