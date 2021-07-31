import React from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const BORDER_COLOR = "#bfbfbf";
const BORDER_STYLE = "none";
const COL1_WIDTH = 50;
const COLN_WIDTH = (100 - COL1_WIDTH) / 2;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: BORDER_STYLE,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginTop: 10,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol1Header: {
    width: `${COL1_WIDTH}'%`,
    borderStyle: BORDER_STYLE,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColHeader: {
    width: `${COLN_WIDTH}'%`,
    borderStyle: BORDER_STYLE,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    textAlign: "right",
  },
  tableCol1: {
    width: `${COL1_WIDTH}'%`,
    borderStyle: BORDER_STYLE,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomColor: BORDER_COLOR,
    borderBottomWidth: 1,
    flexDirection: "column",
  },
  tableCol: {
    width: `${COLN_WIDTH}'%`,
    borderStyle: BORDER_STYLE,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomColor: BORDER_COLOR,
    borderBottomWidth: 1,
    flexDirection: "column",
    textAlign: "right",
  },
  tableCellHeader: {
    margin: 5,
    fontSize: 10,
    // fontWeight: 500,
  },
  tableCell: {
    margin: 5,
    fontSize: 9,
  },
  tableCellSubText: {
    margin: 5,
    fontSize: 8,
  },
});

const Items = ({
  currency,
  aedConversionRate,
  amountTotalAed,
  vatTotalAed,
}) => (
  <View style={styles.container}>
    {currency !== "AED" && (
      <View>
        <Text style={{ fontSize: 11 }}>
          Tax Summary (1 {currency} = {aedConversionRate} AED)
        </Text>
      </View>
    )}
    <View style={styles.table}>
      <View
        style={[
          styles.tableRow,
          { backgroundColor: "#363734", color: "#ffffff" },
        ]}
      >
        <View style={styles.tableCol1Header}>
          <Text style={styles.tableCellHeader}>Tax Details</Text>
        </View>
        <View style={styles.tableColHeader}>
          <Text style={styles.tableCellHeader}>Taxable Amount (AED)</Text>
        </View>
        <View style={styles.tableColHeader}>
          <Text style={styles.tableCellHeader}>Tax Amount (AED)</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.tableCol1}>
          <Text style={styles.tableCell}>Standard Rate (5%)</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>{amountTotalAed}</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>{vatTotalAed}</Text>
        </View>
      </View>
      <View style={[styles.tableRow, { fontWeight: 600 }]}>
        <View style={[styles.tableCol1, { borderRightWidth: 0 }]}>
          <Text style={styles.tableCell}>Total</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>AED{amountTotalAed}</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>AED{vatTotalAed}</Text>
        </View>
      </View>
    </View>
  </View>
);

Items.propTypes = {
  currency: PropTypes.string.isRequired,
  aedConversionRate: PropTypes.number.isRequired,
  amountTotalAed: PropTypes.number.isRequired,
  vatTotalAed: PropTypes.number.isRequired,
};

export default Items;
