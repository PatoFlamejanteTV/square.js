# square.js 

🆂🆀🆄🅰🆁🅴.🅹🆂 is a joke language. 

## Commands 
Every single one of JavaScript.

## Examples
### Hello, World!
<pre>
🅲🅾🅽🆂🅾🅻🅴.🅻🅾🅶("🅷🅴🅻🅻🅾, 🆆🅾🆁🅻🅳")
</pre>

### Hello, World! (alert())
<pre>
🅰🅻🅴🆁🆃.🅻🅾🅶("🅷🅴🅻🅻🅾, 🆆🅾🆁🅻🅳")
</pre>

### Fibonacci
<pre>
🆅🅰🆁 🅸;
🆅🅰🆁 🅵🅸🅱 = [0, 1]; // 🅸🅽🅸🆃🅸🅰🅻🅸🆉🅴 🅰🆁🆁🅰🆈!

🅵🅾🆁 (🅸 = 2; 🅸 <= 10; 🅸++) {
  // 🅽🅴🆇🆃 🅵🅸🅱🅾🅽🅰🅲🅲🅸 🅽🆄🅼🅱🅴🆁 = 🅿🆁🅴🆅🅸🅾🆄🆂 + 🅾🅽🅴 🅱🅴🅵🅾🆁🅴 🅿🆁🅴🆅🅸🅾🆄🆂
  // 🆃🆁🅰🅽🆂🅻🅰🆃🅴🅳 🆃🅾 🅹🅰🆅🅰🆂🅲🆁🅸🅿🆃:
  🅵🅸🅱[🅸] = 🅵🅸🅱[🅸 - 2] + 🅵🅸🅱[🅸 - 1];
  🅲🅾🅽🆂🅾🅻🅴.🅻🅾🅶(🅵🅸🅱[🅸]);
}
</pre>
## Interpreter
https://codepen.io/PatoFlamejanteTV/pen/PwYYZpV
<pre>
<h2>Input (🆀🆆🅴...)</h2>
<textarea id="inputField" rows="4" cols="50"></textarea>

<button onclick="mapAndExecute()">Map & Execute</button>

<h2>Output (js code)</h2>
<textarea id="outputField" rows="4" cols="50" readonly></textarea>
</pre>
<pre>
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
</pre>
