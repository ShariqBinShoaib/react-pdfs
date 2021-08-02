import React from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const BORDER_COLOR = "#eee";
const BORDER_STYLE = "solid";
const COL_WIDTH = 25;

const styles = StyleSheet.create({
  table: {
    display: "table",
    width: "auto",
    borderStyle: BORDER_STYLE,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginTop: 15,
    color: "#000000",
    fontStyle: "light",
    fontWeight: 200,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
    padding: 2,
  },
  tableColHeader: {
    width: `${COL_WIDTH}'%`,
    borderStyle: BORDER_STYLE,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol: {
    width: `${COL_WIDTH}'%`,
    borderStyle: BORDER_STYLE,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomColor: BORDER_COLOR,
    borderBottomWidth: 1,
    flexDirection: "column",
  },
  tableCellHeader: {
    margin: 5,
    fontSize: 11,
  },
  tableCell: {
    margin: 5,
    fontSize: 11,
  },
});

const PDFFooteer = ({ invoicePayments, currency }) => (
  <View style={{ marginTop: 40 }}>
    <View>
      <Text style={{ fontSize: 15 }}>Payment for</Text>
    </View>
    <View style={styles.table}>
      <View style={[styles.tableRow, { backgroundColor: "#EFF0F1" }]}>
        <View style={styles.tableColHeader}>
          <Text style={styles.tableCellHeader}>Invoice Number</Text>
        </View>
        <View style={styles.tableColHeader}>
          <Text style={styles.tableCellHeader}>Invoice Date</Text>
        </View>
        <View style={[styles.tableColHeader, { textAlign: "right" }]}>
          <Text style={styles.tableCellHeader}>Invoice Amount</Text>
        </View>
        <View style={[styles.tableColHeader, { textAlign: "right" }]}>
          <Text style={styles.tableCellHeader}>Payment Amount</Text>
        </View>
      </View>
      {invoicePayments.map((item) => (
        <View key={item.id} style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>
              {`${item.invoice.invoice_prefix} - ${item.invoice.invoice_num}`}
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{item.invoice.invoice_date}</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={[styles.tableCell, { textAlign: "right" }]}>
              {currency}
              {item.invoice.grand_total}
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={[styles.tableCell, { textAlign: "right" }]}>
              {currency}
              {item.amount_applied}
            </Text>
          </View>
        </View>
      ))}
    </View>
  </View>
);

PDFFooteer.propTypes = {
  invoicePayments: PropTypes.array.isRequired,
  currency: PropTypes.string.isRequired,
};
export default PDFFooteer;
