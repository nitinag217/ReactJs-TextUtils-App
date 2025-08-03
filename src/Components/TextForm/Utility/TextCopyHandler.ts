const handleCopyToClipboard = (text: string, setButtonText: (value: string) => void): void => {
  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        navigator.clipboard.writeText(text)
            .then(() => {
                setButtonText("Copied!");
                setTimeout(() => setButtonText("Copy to clipboard"), 2000);
            }).catch(() => fallbackCopy(text, setButtonText));
    } else {
        fallbackCopy(text, setButtonText);
    }
};

// Fallback for older/mobile browsers
const fallbackCopy = (text: string, setButtonText: (value: string) => void) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed"; // Prevent scrolling on iOS
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
        const successful = document.execCommand("copy");
        setButtonText(successful ? "Copied!" : "Copy failed");
    } catch (err) {
        setButtonText("Copy failed");
    }

    document.body.removeChild(textarea);
    setTimeout(() => setButtonText("Copy to clipboard"), 2000);
};

export default handleCopyToClipboard;