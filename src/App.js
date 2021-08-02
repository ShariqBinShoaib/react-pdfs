import { Switch, Route } from "react-router-dom";
import { PDFViewer } from "@react-pdf/renderer";
import InvoicePDF from "./invoicePDF/InvoicePDF";
import PaymentPDF from "./paymentPDF/PaymentReceivedPDF";
import "./App.css";

const InvoiceComponent = () => (
  <div>
    <PDFViewer style={{ height: "95vh", width: "90%" }}>
      <InvoicePDF />
    </PDFViewer>
  </div>
);

const PaymentComponent = () => (
  <div>
    <PDFViewer style={{ height: "95vh", width: "90%" }}>
      <PaymentPDF />
    </PDFViewer>
  </div>
);

function App() {
  return (
    <div className="App">
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <a href="/invoice" style={{ marginRight: 20 }}>
          Show Invoice PDF
        </a>
        <a href="/payment">Show Payment PDF</a>
      </div>
      <Switch>
        <Route path="/invoice" component={InvoiceComponent} />
        <Route path="/payment" component={PaymentComponent} />
      </Switch>
    </div>
  );
}

export default App;
