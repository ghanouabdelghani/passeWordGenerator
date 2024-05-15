import React, { useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import "../App.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const inputStyles = {
  inputContainer: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    outline: "1px solid #3f563d",
    borderRadius: "15px",
    padding: "2px",
  },
  input: {
    width: "100%",
    border: "none",
    outline: "none",
    fontWeight: 600,
    padding: "11px 12px",
  },
  copyButton: {
    fontSize: "12px",
    padding: "8px 12px",
    borderRadius: "12px",
    backgroundColor: "#3cc",
    border: "none",
  },
  bigBox: { display: "flex", gap: "8px", width: "100%" },
};

export default function Input({ options, passwordLength }) {
  const [copied, setCopied] = useState(false);
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setPassword(e.target.value);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const generatePassword = () => {
    let charset = "";
    if (options.Uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (options.Lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (options.Numbers) charset += "0123456789";
    if (options.SpecialCharacters) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      generatedPassword += charset.charAt(
        Math.floor(Math.random() * charset.length)
      );
    }

    setPassword(generatedPassword);
    setValue(generatedPassword); // Fix: Assign generated password to value state
  };

  return (
    <div style={inputStyles.bigBox}>
      <div style={inputStyles.inputContainer}>
        <input
          type="text"
          value={password}
          style={inputStyles.input}
          onChange={handleInput}
        />
        <div onClick={generatePassword}>
          <RefreshIcon />
        </div>
      </div>

      <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
        <button
          className={copied ? "copied" : ""}
          onClick={handleCopy}
          style={inputStyles.copyButton}
        >
          <ContentCopyIcon style={{ fontSize: "10px" }} />
          {copied ? <span>Copied</span> : <span>Copy</span>}
        </button>
      </CopyToClipboard>
    </div>
  );
}
