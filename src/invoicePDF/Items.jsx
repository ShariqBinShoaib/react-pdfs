import React from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const BORDER_COLOR = "#bfbfbf";
const BORDER_STYLE = "none";
const COL1_WIDTH = 34;
const LAST_COL_WIDTH = 15;
const COLN_WIDTH = (100 - (COL1_WIDTH + LAST_COL_WIDTH)) / 5;

const styles = StyleSheet.create({
  table: {
    display: "table",
    width: "auto",
    borderStyle: BORDER_STYLE,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginTop: 15,
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
  tableLastColHeader: {
    width: `${LAST_COL_WIDTH}'%`,
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
  tableLastCol: {
    width: `${LAST_COL_WIDTH}'%`,
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
  convertToAED,
  aedConversionRate,
  amountTotal,
  amountTotalAed,
  vatTotal,
  vatTotalAed,
  grandTotal,
  grandTotalAed,
  invoiceItems,
}) => (
  <View style={styles.table}>
    <View
      style={[
        styles.tableRow,
        { backgroundColor: "#363734", color: "#ffffff" },
      ]}
    >
      <View style={styles.tableCol1Header}>
        <Text style={styles.tableCellHeader}>Service</Text>
      </View>
      <View style={styles.tableColHeader}>
        <Text style={styles.tableCellHeader}>Unit Price</Text>
      </View>
      <View style={styles.tableColHeader}>
        <Text style={styles.tableCellHeader}>Qty</Text>
      </View>
      <View style={styles.tableColHeader}>
        <Text style={styles.tableCellHeader}>Amount</Text>
      </View>
      <View style={styles.tableColHeader}>
        <Text style={styles.tableCellHeader}>VAT Rate</Text>
      </View>
      <View style={styles.tableColHeader}>
        <Text style={styles.tableCellHeader}>VAT</Text>
      </View>
      <View style={styles.tableLastColHeader}>
        <Text style={styles.tableCellHeader}>Gross Amount</Text>
      </View>
    </View>
    {invoiceItems.map((item) => {
      const vatRate = item.vat_rate === 5 ? 5 : 0;
      return (
        <View key={item.id} style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>{item.service_type}</Text>
            <Text style={styles.tableCellSubText}>{item.description}</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{item.unit_price_ex_vat}</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{item.num_units} Unit</Text>
            <Text style={styles.tableCell}>{item.num_nights} Night</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{item.amount_ex_vat}</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{vatRate}%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{item.vat_amount}</Text>
          </View>
          <View style={styles.tableLastCol}>
            <Text style={styles.tableCell}>{item.gross_amount}</Text>
          </View>
        </View>
      );
    })}
    <View style={styles.tableRow}>
      <View style={[styles.tableCol1, { borderRightWidth: 0 }]}>
        <Text style={[styles.tableCell, { fontWeight: 600 }]}>
          Sub Total ({currency})
        </Text>
      </View>
      <View style={[styles.tableCol, { borderRightWidth: 0 }]} />
      <View style={styles.tableCol} />
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>{amountTotal}</Text>
      </View>
      <View style={styles.tableCol} />
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>{vatTotal}</Text>
      </View>
      <View style={styles.tableLastCol}>
        <Text style={styles.tableCell}>{grandTotal}</Text>
      </View>
    </View>
    {convertToAED && (
      <View style={styles.tableRow}>
        <View style={[styles.tableCol1, { borderRightWidth: 0 }]}>
          <Text style={[styles.tableCell, { fontWeight: 600 }]}>
            Sub Total (AED) - Exchange Rate: {aedConversionRate}
          </Text>
        </View>
        <View style={[styles.tableCol, { borderRightWidth: 0 }]} />
        <View style={styles.tableCol} />
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>{amountTotalAed}</Text>
        </View>
        <View style={styles.tableCol} />
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>{vatTotalAed}</Text>
        </View>
        <View style={styles.tableLastCol}>
          <Text style={styles.tableCell}>{grandTotalAed}</Text>
        </View>
      </View>
    )}
  </View>
);

Items.propTypes = {
  currency: PropTypes.string.isRequired,
  convertToAED: PropTypes.bool.isRequired,
  aedConversionRate: PropTypes.number.isRequired,
  amountTotal: PropTypes.number.isRequired,
  amountTotalAed: PropTypes.number.isRequired,
  vatTotal: PropTypes.number.isRequired,
  vatTotalAed: PropTypes.number.isRequired,
  grandTotal: PropTypes.number.isRequired,
  grandTotalAed: PropTypes.number.isRequired,
  invoiceItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Items;
