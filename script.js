// Cache DOM elements
const input = document.getElementById("item-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("shopping-list");

// Add item event
addBtn.addEventListener("click", function(){
    const itemText = input.value.trim();
    if (itemText !== ""){
        addItem(itemText);
        input.value = ""; // clear input after adding
    }
});

// Add item function
function addItem(text) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", function(){
        if (editBtn.textContent === "Edit"){
            // Switch to edit mode
            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = span.textContent;
            li.insertBefore(editInput, span);
            li.removeChild(span);
            editBtn.textContent = "Save";
        } else {
            // Save new value
            const newText = li.querySelector("input").value.trim();
            span.textContent = newText || "Unnamed Item";
            li.insertBefore(span, li.querySelector("input"));
            li.removeChild(li.querySelector("input"));
            editBtn.textContent = "Edit";
        }
    });

    // Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", function(){
        list.removeChild(li);
    });

    // Build list item
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(removeBtn);
    list.appendChild(li);
}