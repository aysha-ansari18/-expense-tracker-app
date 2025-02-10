// Variables
const expenseForm = document.getElementById('expense-form');
const expenseDescription = document.getElementById('expense-description');
const expenseAmount = document.getElementById('expense-amount');
const expenseList = document.getElementById('expense-list');
const totalAmountElem = document.getElementById('total-amount');

let totalAmount = 0;

// Event listener for form submission
expenseForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get values from input fields
    const description = expenseDescription.value.trim();
    const amount = parseFloat(expenseAmount.value.trim());

    if (description === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter valid data!");
        return;
    }

    // Create list item
    const li = document.createElement('li');
    li.innerHTML = `${description} - $${amount.toFixed(2)} <button class="delete-btn">Delete</button>`;
    
    // Add delete functionality
    const deleteButton = li.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function() {
        li.remove();
        updateTotal();
    });

    // Append to expense list
    expenseList.appendChild(li);

    // Update total amount
    totalAmount += amount;
    updateTotal();

    // Clear form inputs
    expenseDescription.value = '';
    expenseAmount.value = '';
});

// Function to update the total expense
function updateTotal() {
    totalAmountElem.textContent = totalAmount.toFixed(2);
}
