import { PDFViewer } from "@react-pdf/renderer";
import PdfDoc from "./invoicePDF/InvoicePDF";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PDFViewer style={{ height: "95vh", width: "90%" }}>
        <PdfDoc />
      </PDFViewer>
    </div>
  );
}

export default App;
