import React from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderBottom: "1px solid #eee",
    paddingBottom: 35,
    paddingTop: 20,
  },
  heading: {
    fontSize: 12,
    borderBottom: "1px solid #eee",
    alignSelf: "center",
    marginBottom: 20,
    fontStyle: "light",
    fontWeight: 200,
  },
  content: {
    flexDirection: "row",
    marginTop: 20,
  },
  column1: {
    flexDirection: "column",
    width: "70%",
    justifyContent: "space-between",
  },
  column2: {
    flexDirection: "column",
    width: "30%",
  },
  info: {
    flexDirection: "row",
  },
  infoHeader: {
    flexDirection: "column",
    width: "45%",
  },
  infoValue: {
    flexDirection: "column",
    width: "65%",
    paddingLeft: 10,
    paddingRight: 10,
    borderBottom: "1px solid #eee",
  },
  headingText: {
    color: "#999",
    fontSize: 12,
  },
  valueText: {
    fontSize: 12,
    fontWeight: 600,
  },
  amountBox: {
    textAlign: "center",
    color: "#ffffff",
    backgroundColor: "#78ae54",
    width: "80%",
    padding: "28px 5px",
    alignSelf: "flex-end",
  },
  clientName: {
    fontSize: 12,
    fontWeight: 600,
    color: "#3EA3FC",
  },
  overPayment: {
    borderTop: "1px solid #eee",
    paddingTop: 20,
    marginTop: 40,
    marginLeft: 8,
  },
});

const PDFContent = ({
  paymentDate,
  referenceNum,
  paymentMode,
  amountReceived,
  unusedAmount,
  currency,
}) => (
  <View>
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={{ textTransform: "uppercase" }}>Payment Receipt</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.column1}>
          <View style={styles.info}>
            <View style={styles.infoHeader}>
              <Text style={styles.headingText}>Payment Date</Text>
            </View>
            <View style={styles.infoValue}>
              <Text style={styles.valueText}>{paymentDate}</Text>
            </View>
          </View>
          <View style={styles.info}>
            <View style={styles.infoHeader}>
              <Text style={styles.headingText}>Reference Number</Text>
            </View>
            <View style={styles.infoValue}>
              <Text style={styles.valueText}>{referenceNum}</Text>
            </View>
          </View>
          <View style={styles.info}>
            <View style={styles.infoHeader}>
              <Text style={styles.headingText}>Payment Mode</Text>
            </View>
            <View style={styles.infoValue}>
              <Text style={styles.valueText}>{paymentMode}</Text>
            </View>
          </View>
        </View>
        <View style={styles.column2}>
          <View style={styles.amountBox}>
            <Text style={{ fontSize: 12 }}>Amount Received</Text>
            <Text style={{ fontSize: 17 }}>
              {currency}
              {amountReceived}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
        <View>
          <Text style={{ fontSize: 11, fontWeight: 600, color: "#777777" }}>
            Bill To
          </Text>
        </View>
        <View>
          <Text style={styles.clientName}>Jack</Text>
        </View>
      </View>
      {unusedAmount > 0 && (
        <View style={styles.overPayment}>
          <Text style={{ fontSize: 11, fontWeight: 600, color: "#777777" }}>
            Over Payment
          </Text>
          <Text style={{ fontSize: 11, fontWeight: 200, fontStyle: "light" }}>
            {currency}
            {unusedAmount}
          </Text>
        </View>
      )}
    </View>
  </View>
);

PDFContent.propTypes = {
  paymentDate: PropTypes.string.isRequired,
  referenceNum: PropTypes.string.isRequired,
  paymentMode: PropTypes.string.isRequired,
  amountReceived: PropTypes.number.isRequired,
  unusedAmount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default PDFContent;
