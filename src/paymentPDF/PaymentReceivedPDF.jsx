import React from "react";
import { Document, Page, StyleSheet, Font } from "@react-pdf/renderer";
import PDFHeader from "./PDFHeader";
import PDFContent from "./PDFContent";
import PDFFooter from "./PDFFooter";

const OpenSansRegular = `${process.env.PUBLIC_URL}/fonts/OpenSans-Regular.ttf`;
const OpenSansSemiBold = `${process.env.PUBLIC_URL}/fonts/OpenSans-SemiBold.ttf`;
const OpenSansLight = `${process.env.PUBLIC_URL}/fonts/OpenSans-Light.ttf`;

Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: OpenSansRegular,
      fontWeight: 400,
      fontStyle: "normal",
    },
    {
      src: OpenSansLight,
      fontStyle: "light",
      fontWeight: 200,
    },
    {
      src: OpenSansSemiBold,
      fontWeight: 600,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Open Sans",
    color: "#333333",
    fontStyle: "normal",
    fontWeight: 400,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    "@media max-width: 400": {
      flexDirection: "column",
    },
  },
});

const invoicePayments = [
  {
    id: 1,
    invoice: {
      id: 0,
      invoice_prefix: "INV",
      invoice_num: 1000,
      invoice_date: "2021-01-01",
      grand_total: "0.00",
    },
    amount_applied: "0.00",
  },
];

const PaymentReceivedPDF = (props) => {
  return (
    <Document
      author="Shariq"
      keywords="payment"
      subject="Payment Received"
      title="Payment Received"
    >
      <Page style={styles.page}>
        <PDFHeader />
        <PDFContent
          paymentDate="31 Jul 2021"
          referenceNum="12345"
          paymentMode="Cash"
          amountReceived="0.00"
          unusedAmount="0.00"
          currency="USD"
        />
        <PDFFooter invoicePayments={invoicePayments} currency="USD" />
      </Page>
    </Document>
  );
};

export default PaymentReceivedPDF;
