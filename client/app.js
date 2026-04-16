async function runAI() {
  const input = document.getElementById('input').value;
  const output = document.getElementById('output');

  output.innerText = 'Processing...';

  try {
    const result = await sendToAI(input);
    output.innerText = JSON.stringify(result, null, 2);
  } catch (err) {
    output.innerText = 'Error: ' + err.message;
  }
}
