function mapAndExecute() {
    // Reversed Mapping object: special characters to standard keyboard characters
    const charMap = {
        '🆀': 'q', '🆆': 'w', '🅴': 'e', '🆁': 'r', '🆃': 't', '🆈': 'y', '🆄': 'u', '🅸': 'i', '🅾': 'o', '🅿': 'p',
        '🅰': 'a', '🆂': 's', '🅳': 'd', '🅵': 'f', '🅶': 'g', '🅷': 'h', '🅹': 'j', '🅺': 'k', '🅻': 'l',
        '🆉': 'z', '🆇': 'x', '🅲': 'c', '🆅': 'v', '🅱': 'b', '🅽': 'n', '🅼': 'm'
    };

    // Get the input field value
    const inputField = document.getElementById("inputField");
    const inputValue = inputField.value;

    // Map special characters back to standard characters
    let jsCode = '';
    for (let char of inputValue) {
        jsCode += charMap[char] || char; // If char is not in map, use original char
    }

    // Display the JS code
    document.getElementById("outputField").value = jsCode;

    // **WARNING: USING EVAL() WITH UNSAFE INPUT CAN BE DANGEROUS**
    // Execute the JS code (for demonstration purposes only)
    try {
        eval(jsCode);
    } catch (e) {
        console.error("Error executing JS code:", e);
        alert("Error executing JS code. Check console for details.");
    }
}