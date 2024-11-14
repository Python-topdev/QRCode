import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { QrReader } from "react-qr-reader";
import './App.css';

const App = () => {
  const [qrValue, setQrValue] = useState("");
  const [scanResult, setScanResult] = useState(null);

  const handleGenerateQRCode = (e) => {
    setQrValue(e.target.value);
  };

  const handleScan = (result) => {
    if (result) {
      setScanResult(result?.text || "Invalid QR Code");
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div className="container">
      <h1>QR Code Generator & Scanner</h1>

      <div className="qr-section">
        <div className="generator">
          <h2>Generate QR Code</h2>
          <input
            type="text"
            placeholder="Enter text to encode"
            onChange={handleGenerateQRCode}
            value={qrValue}
            className="input-box"
          />
          <div className="qr-display">
            <QRCodeCanvas value={qrValue} size={200} level="H" />
          </div>
        </div>

        <div className="scanner">
          <h2>Scan QR Code</h2>
          <QrReader
            onResult={handleScan}
            onError={handleError}
            style={{ width: "100%" }}
            className="qr-reader"
          />
          <p>{scanResult ? `Result: ${scanResult}` : "Scan a QR code to see the result"}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
