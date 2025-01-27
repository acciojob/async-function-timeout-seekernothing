//your JS code here. If required.
// Select the necessary elements from the DOM
const btn = document.getElementById('btn');
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const outputDiv = document.getElementById('output');

// Add click event listener to the button
btn.addEventListener('click', async () => {
    // Get the user input values
    const text = textInput.value;
    const delay = parseInt(delayInput.value, 10);

    // Wait for the specified delay
    await new Promise(resolve => setTimeout(resolve, delay));

    // Display the text in the output div
    outputDiv.textContent = text;
});