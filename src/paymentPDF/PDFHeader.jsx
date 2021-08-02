import React from "react";
// import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottom: "1px solid #eee",
    paddingBottom: 35,
  },
  header: {
    flexDirection: "column",
    width: "100%",
  },
  mainTitle: {
    fontSize: 14,
    fontWeight: 600,
    marginLeft: 8,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 11,
    color: "#999",
    alignSelf: "flex-start",
    marginLeft: 8,
    marginBottom: 2,
  },
});

const PDFHeader = () => (
  <View>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.mainTitle}>ABC Company Pvt Ltd.</Text>
        <Text style={styles.subtitle}>Office 433</Text>
        <Text style={styles.subtitle}>Anonymous Business Center, XYZ</Text>
        <Text style={styles.subtitle}>Karachi 000000</Text>
        <Text style={styles.subtitle}>Pakistan</Text>
        <Text style={styles.subtitle}>TRN 123456789123456</Text>
      </View>
    </View>
  </View>
);

export default PDFHeader;
