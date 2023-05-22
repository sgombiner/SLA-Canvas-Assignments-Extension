// Function to fetch assignments from the API
function fetchAssignments() {
    //pretty sure this doesn't work
    fetch("https://scienceleadership.instructure.com/api/v1/courses/self/assignments")
      .then(response => response.json())
      .then(assignments => {
        // Process assignments and display them
        displayAssignments(assignments);
      })
      .catch(error => {
        console.error("Error fetching assignments:", error);
      });
  }
  
  // Function to display assignments in a dropdown box
  function displayAssignments(assignments) {
    const dropdown = document.createElement("select");
    dropdown.id = "assignmentDropdown";
  
    // Create an option for each assignment
    assignments.forEach(assignment => {
      const option = document.createElement("option");
      option.value = assignment.id;
  
      // Create a div element to hold assignment details
      const assignmentDiv = document.createElement("div");
      assignmentDiv.classList.add("assignment");
  
      // Create elements for class, assignment name, and due date
      const classSpan = document.createElement("span");
      classSpan.classList.add("class");
      classSpan.textContent = assignment.course_name;
  
      const nameSpan = document.createElement("span");
      nameSpan.classList.add("name");
      nameSpan.textContent = assignment.name;
  
      const dueDateSpan = document.createElement("span");
      dueDateSpan.classList.add("due-date");
      dueDateSpan.textContent = "Due: " + assignment.due_at;
  
      // Append elements to assignment div
      assignmentDiv.appendChild(classSpan);
      assignmentDiv.appendChild(nameSpan);
      assignmentDiv.appendChild(dueDateSpan);
  
      // Append assignment div to option
      option.appendChild(assignmentDiv);
  
      // Append option to dropdown
      dropdown.appendChild(option);
    });
  
    // Add the dropdown to the page
    const body = document.querySelector("body");
    body.appendChild(dropdown);
  }
  
  // Run the function to fetch and display assignments
  fetchAssignments();
  