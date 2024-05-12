import React, { useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import "./App.css";

export default function Input() {
  const [copied, setCopied] = useState(false);

  const Copy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div>
      <div>
        <input type="text" />
        <RefreshIcon />
        <button
          className={copied ? "copied" : ""}
          onClick={Copy}
          style={{ borderRadius:"3px",border:"none",backgroundColor: "#35CFCF" }} // Change color to #35CFCF
        >
          <ContentCopyIcon style={{ fontSize: "10px" }} />

          {copied ? <span>Copied</span> : <span>Copy</span>}
        </button>
      </div>
    </div>
  );
}
