import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import PDFHeader from "./PDFHeader";
import Items from "./Items";
import TotalDetails from "./TotalDetails";
import TaxDetails from "./TaxDetails";

const invoiceItems = [
  {
    service_type: "Transport",
    description: "test description",
    unit_price_ex_vat: "0.00",
    num_units: 1,
    num_nights: 1,
    amount_ex_vat: "0.00",
    vat_rate: 5,
    vat_amount: "0.00",
    gross_amount: "0.00",
  },
];

const OpenSansRegular = `${process.env.PUBLIC_URL}/fonts/OpenSans-Regular.ttf`;
const OpenSansSemiBold = `${process.env.PUBLIC_URL}/fonts/OpenSans-SemiBold.ttf`;

Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: OpenSansRegular,
    },
    {
      src: OpenSansSemiBold,
      fontWeight: 600,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Open Sans",
    color: "#333333",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    "@media max-width: 400": {
      flexDirection: "column",
    },
  },
  image: {
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: "column",
    width: 170,
    paddingTop: 30,
    paddingRight: 15,
    "@media max-width: 400": {
      width: "100%",
      paddingRight: 0,
    },
    "@media orientation: landscape": {
      width: 200,
    },
  },
  notesHeader: {
    fontSize: 11,
    fontWeight: 200,
    marginTop: 20,
    marginLeft: 6,
  },
  notesValue: {
    fontSize: 8,
    marginLeft: 6,
    marginTop: 5,
  },
  footer: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 25,
    paddingTop: 10,
    borderWidth: 3,
    borderColor: "gray",
    borderStyle: "dashed",
    "@media orientation: landscape": {
      marginTop: 10,
    },
  },
});

const InvoicePDF = () => {
  return (
    <Document
      author="Shariq"
      keywords="invoice"
      subject="InvoicePDF"
      title="Invoice"
    >
      <Page style={styles.page}>
        <PDFHeader
          invoiceNum="1000"
          invoiceSuffix="INV"
          currency="USD"
          invoiceDate="2021-10-01"
          expiryDate="2021-10-01"
          paymentTerm="Due on Receipt"
          amountDue="0.00"
          clientName="Test Client"
        />
        <Items
          currency="USD"
          convertToAED={true}
          aedConversionRate="3.67"
          amountTotal="0.00"
          amountTotalAed="0.00"
          vatTotal="0.00"
          vatTotalAed="0.00"
          grandTotal="0.00"
          grandTotalAed="0.00"
          invoiceItems={invoiceItems}
        />
        <TotalDetails currency="USD" grandTotal="0.00" amountDue="0.00" />
        <TaxDetails
          currency="USD"
          aedConversionRate="3.67"
          amountTotalAed="0.00"
          vatTotalAed="0.00"
        />
        <View>
          <Text style={styles.notesHeader}>Notes</Text>
          <Text style={styles.notesValue}>Test invoice notes</Text>
        </View>
      </Page>
    </Document>
  );
};

export default InvoicePDF;
