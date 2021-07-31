/* eslint-disable */

import React from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  totalsContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: 5,
  },
  totalItem: {
    fontSize: 10,
    marginLeft: 5,
    marginBottom: 2,
    maxWidth: 400,
    width: "40%",
  },
  row: {
    flexDirection: "row",
    paddingTop: 20,
    textAlign: "right",
  },
  headerColumn: {
    flexGrow: 1,
  },
  valueColumn: {
    flexGrow: 1,
  },
  header: {
    width: "50%",
  },
  value: {
    width: "50%",
  },
});

const TotalDetails = ({ currency, grandTotal, amountDue }) => {
  return (
    <View style={styles.totalsContainer}>
      <View style={styles.totalItem}>
        <View style={[styles.row, { fontWeight: 600 }]}>
          <View style={styles.headerColumn}>
            <Text style={styles.header}>Total</Text>
          </View>
          <View style={styles.valueColumn}>
            <Text style={styles.value}>
              {currency}
              {grandTotal}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.headerColumn}>
            <Text style={styles.header}>Payment Made</Text>
          </View>
          <View style={[styles.valueColumn, { color: "red" }]}>
            <Text style={styles.value}>(-) 0.00</Text>
          </View>
        </View>
        <View style={[styles.row, { fontWeight: 600 }]}>
          <View style={styles.headerColumn}>
            <Text style={styles.header}>Balance Due</Text>
          </View>
          <View style={styles.valueColumn}>
            <Text style={styles.value}>
              {currency}
              {amountDue}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

TotalDetails.propTypes = {
  currency: PropTypes.string.isRequired,
  grandTotal: PropTypes.number.isRequired,
  amountDue: PropTypes.number.isRequired,
};

export default TotalDetails;
