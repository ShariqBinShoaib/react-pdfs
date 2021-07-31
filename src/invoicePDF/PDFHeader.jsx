import React from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  infoColumn: {
    flexDirection: "column",
    textTransform: "uppercase",
    width: "100%",
  },
  detailColumn: {
    flexDirection: "column",
    width: "100%",
  },
  detailRow: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  row: { flexDirection: "row" },
  headerColumn: {
    flexGrow: 1,
    paddingTop: 10,
  },
  valueColumn: {
    flexGrow: 1,
    paddingTop: 10,
  },
  titleColumn: {
    flexGrow: 1,
  },
  header: {
    fontSize: 28,
    color: "#000000",
    textTransform: "uppercase",
    alignSelf: "flex-end",
  },
  receiptNum: {
    fontSize: 12,
    marginTop: 6,
    alignSelf: "flex-end",
  },
  subtitle: {
    fontSize: 10,
    alignSelf: "flex-start",
    marginLeft: 8,
    marginBottom: 2,
  },
  valueCell: {
    fontSize: 10,
    width: "50%",
  },
  detail: {
    fontSize: 10,
    width: "50%",
  },
  link: {
    fontSize: 10,
    color: "black",
    textDecoration: "none",
    alignSelf: "flex-end",
    justifySelf: "flex-end",
  },
});

const PDFHeader = ({
  invoiceNum,
  invoiceSuffix,
  currency,
  amountDue,
  clientName,
  invoiceDate,
  expiryDate,
  paymentTerm,
}) => (
  <View>
    <View style={styles.container}>
      <View style={styles.infoColumn}>
        <Text style={[styles.subtitle, { fontWeight: 600 }]}>
          Luxury Events and VIP Travel DMCC
        </Text>
        <Text style={styles.subtitle}>2806, HDS Business Centre,</Text>
        <Text style={styles.subtitle}>Cluster M, JLT, Dubai, UAE.</Text>
        <Text style={styles.subtitle}>+971 4 456 5046</Text>
        <Text style={styles.subtitle}>accounting@luxuryexplorersme.com</Text>
        <Text style={styles.subtitle}>TRN : 100204615700003</Text>
      </View>
      <View style={styles.detailColumn}>
        <View style={styles.detailRow}>
          <Text style={styles.header}>Tax Invoice</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.receiptNum}>
            # {invoiceSuffix} - {invoiceNum}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={{ fontSize: "8pt", marginTop: 15 }}>Balance Due</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={{ fontSize: "12pt", fontWeight: 600 }}>
            {currency}
            {amountDue}
          </Text>
        </View>
      </View>
    </View>
    <View style={[styles.container, { marginTop: 20 }]}>
      <View style={[styles.infoColumn, { alignSelf: "flex-end" }]}>
        <View style={styles.subtitle}>
          <Text style={{ fontSize: "11pt" }}>Bill To</Text>
        </View>
        <View style={[styles.subtitle, { marginTop: 10 }]}>
          <Text
            style={{
              fontSize: "9pt",
              fontWeight: 600,
              color: "#2A74BE",
            }}
          >
            {clientName}
          </Text>
        </View>
      </View>
      <View style={[styles.detailColumn, { textAlign: "right" }]}>
        <View style={styles.row}>
          <View style={styles.headerColumn}>
            <Text style={styles.detail}>Invoice Date:</Text>
          </View>
          <View style={styles.valueColumn}>
            <Text style={styles.valueCell}>{invoiceDate}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.headerColumn}>
            <Text style={styles.detail}>Term:</Text>
          </View>
          <View style={styles.valueColumn}>
            <Text style={styles.valueCell}>{paymentTerm}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.headerColumn}>
            <Text style={styles.detail}>Due Date:</Text>
          </View>
          <View style={styles.valueColumn}>
            <Text style={styles.valueCell}>{expiryDate}</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

PDFHeader.propTypes = {
  invoiceNum: PropTypes.number.isRequired,
  invoiceSuffix: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  invoiceDate: PropTypes.string.isRequired,
  expiryDate: PropTypes.string.isRequired,
  amountDue: PropTypes.number.isRequired,
  clientName: PropTypes.string.isRequired,
  paymentTerm: PropTypes.string.isRequired,
};

export default PDFHeader;
