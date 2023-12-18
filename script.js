let internships = [];

function addNewIntern() {
  // Clone the internship container
  let internshipContainer = document.querySelector("#interns");
  let newInternContainer = internshipContainer.cloneNode(true);

  // Clear visible input values
  let visibleInputs = newInternContainer.querySelectorAll("input[type='text'], textarea");
  visibleInputs.forEach(input => input.value = "");

  // Update input values before adding to array
  let title = document.getElementById("internTitleF").value;
  let description = document.getElementById("interndescriptionF").value;
  let year = document.getElementById("yearinternF").value;

  // Create new internship object and add to array
  internships.push({
    title: title,
    description: description,
    year: year
  });

  // Append the cloned container to the parent container
  let internsContainer = document.getElementById("interns");
  internsContainer.appendChild(newInternContainer);
}

function updateInternshipList() {
    // Get the list element
    let internList = document.getElementById("internlistT");
  
    // Loop through each internship in the array
    for (let internship of internships) {
      // Create new list item element
      let newListItem = document.createElement("li");
  
      // Create elements for title, description, and year with appropriate content
      let titleElement = document.createElement("p");
      titleElement.classList.add("fw-bold", "my-0");
      titleElement.textContent = internship.title;
      newListItem.appendChild(titleElement);
      
      // ... Add similar elements for description and year using internship data ...
  
      // Append the new list item to the existing list
      internList.appendChild(newListItem);
    }
  }
// Update list on submit or whenever needed
updateInternshipList();


// function addNewIntern() {
//     // Clone the internship container
//     let internshipContainer = document.querySelector('#interns');
//     let newInternContainer = internshipContainer.cloneNode(true);

//     // Clear input values in the cloned container
//     let inputs = newInternContainer.querySelectorAll('input, textarea');
//     inputs.forEach(input => input.value = '');

//     // Append the cloned container to the parent container
//     let internsContainer = document.getElementById("interns");
//     internsContainer.appendChild(newInternContainer);
// }

function addNewProject() {
    // Clone the internship container
    let projectContainer = document.querySelector('#projects');
    let newProjectContainer = projectContainer.cloneNode(true);

    // Clear input values in the cloned container
    let inputs = newProjectContainer.querySelectorAll('input, textarea');
    inputs.forEach(input => input.value = '');

    // Append the cloned container to the parent container
    let projectsContainer = document.getElementById("projects");
    projectsContainer.appendChild(newProjectContainer);
}

function addNewSkill() {
    // Clone the internship container
    let skillContainer = document.querySelector('#skills');
    let newskillContainer = skillContainer.cloneNode(true);

    // Clear input values in the cloned container
    let inputs = newskillContainer.querySelectorAll('input, textarea');
    inputs.forEach(input => input.value = '');

    // Append the cloned container to the parent container
    let skillsContainer = document.getElementById("skills");
    skillsContainer.appendChild(newskillContainer);
}

function addNewPOR() {
    // Clone the internship container
    let PORContainer = document.querySelector('#PORs');
    let newPORContainer = PORContainer.cloneNode(true);

    // Clear input values in the cloned container
    let inputs = newPORContainer.querySelectorAll('input, textarea');
    inputs.forEach(input => input.value = '');

    // Append the cloned container to the parent container
    let PORsContainer = document.getElementById("PORs");
    PORsContainer.appendChild(newPORContainer);
}

function generateCV() {
    // console.log("generating cv");
    //personal details
    let nameField = document.getElementById("nameF").value;
    document.getElementById("nameT").innerHTML = nameField;
    let GradField = document.getElementById("CGradF").value;
    document.getElementById("CGradT").innerHTML = GradField;
    document.getElementById("BranchT").innerHTML = document.getElementById("BranchF").value;
    document.getElementById("emailT").innerHTML = document.getElementById("emailF").value;
    document.getElementById("contactT").innerHTML = document.getElementById("contactF").value;
    // document.getElementById("emailT").innerHTML = document.getElementById("gitF").value;


    // linking for the git and linkedin accounts remaining here
    // document.getElementById("gitT").innerHTML = document.getElementById("gitF").value;
    function generateCV() {
      // console.log("generating cv");
      //personal details
      let nameField = document.getElementById("nameF").value;
      document.getElementById("nameT").innerHTML = nameField;
      let GradField = document.getElementById("CGradF").value;
      document.getElementById("CGradT").innerHTML = GradField;
      document.getElementById("BranchT").innerHTML = document.getElementById("BranchF").value;
      document.getElementById("emailT").innerHTML = document.getElementById("emailF").value;
      document.getElementById("contactT").innerHTML = document.getElementById("contactF").value;
      // document.getElementById("emailT").innerHTML = document.getElementById("gitF").value;
  
  
      // linking for the git and linkedin accounts remaining here
      // document.getElementById("gitT").innerHTML = document.getElementById("gitF").value;
  
      //academic details
      //B.Tech
      document.getElementById("CPIT").innerHTML = document.getElementById("CPIF").value;
      document.getElementById("YOJT").innerHTML = document.getElementById("YOJF").value;
      //12th
      document.getElementById("institutetwelveT").innerHTML = document.getElementById("institutetwelveF").value;
      document.getElementById("markstwelveT").innerHTML = document.getElementById("markstwelveF").value;
      document.getElementById("yeartwelveT").innerHTML = document.getElementById("yeartwelveF").value;
  
      //10th
      document.getElementById("institutetenT").innerHTML = document.getElementById("institutetenF").value;
      document.getElementById("markstenT").innerHTML = document.getElementById("markstenF").value;
      document.getElementById("yeartenT").innerHTML = document.getElementById("yeartenF").value;
  
      //Internships
      document.getElementById("internTitleT").innerHTML=document.getElementById("internTitleF").value;
      document.getElementById("interndescriptionT").innerHTML=document.getElementById("interndescriptionF").value;
      document.getElementById("yearinternT").innerHTML=document.getElementById("yearinternF").value;
  
      // //adding another intern
      // let internlist=document.getElementById("interns")
  
      // let str="";
  
      // for (let intern of internlist){
      //     str=str+`<li> ${intern.value} </li>`;
  
      // } 
  
      // document.getElementById("internlistT").innerHTML=str;
  
      // let internList = document.getElementById("internlistT");
      // internList.innerHTML = ""; // Clear the existing content
  
      // // Loop through internship data and create list items
      // for (let internship of internships) {
      //     let newListItem = document.createElement("li");
  
      //     let titleElement = document.createElement("p");
      //     titleElement.classList.add("col-8", "fw-bold", "my-0");
      //     titleElement.textContent = internship.title;
      //     newListItem.appendChild(titleElement);
  
      //     let yearElement = document.createElement("p");
      //     yearElement.classList.add("col-2", "fw-bold", "my-0")
      //     yearElement.textContent = internship.year;
      //     newListItem.appendChild(yearElement);
  
      //     let descriptionElement = document.createElement("p");
      //     descriptionElement.textContent = internship.description;
      //     newListItem.appendChild(descriptionElement);
  
          
  
      //     internList.appendChild(newListItem);
      // }
  
  
      //projects
      document.getElementById("ProjectTitleT").innerHTML=document.getElementById("ProjectTitleF").value;
      document.getElementById("ProjectdescriptionT").innerHTML=document.getElementById("ProjectdescriptionF").value;
      document.getElementById("yearprojectT").innerHTML=document.getElementById("yearprojectF").value;
  
      //skills
      document.getElementById("skilltypeT").innerHTML=document.getElementById("skilltypeF").value;
      document.getElementById("skilldescriptionT").innerHTML=document.getElementById("skilldescriptionF").value;
  
      //PORs
      document.getElementById("PORNameT").innerHTML=document.getElementById("PORNameF").value;
      document.getElementById("PORdurationT").innerHTML=document.getElementById("PORdurationF").value;
      document.getElementById("PORdescriptionT").innerHTML=document.getElementById("PORdescriptionF").value;
  
      document.getElementById("cv-form").style.display="none";
      document.getElementById("CVtemplate").style.display="block";
      
  }
    //academic details
    //B.Tech
    document.getElementById("CPIT").innerHTML = document.getElementById("CPIF").value;
    document.getElementById("YOJT").innerHTML = document.getElementById("YOJF").value;
    //12th
    document.getElementById("institutetwelveT").innerHTML = document.getElementById("institutetwelveF").value;
    document.getElementById("markstwelveT").innerHTML = document.getElementById("markstwelveF").value;
    document.getElementById("yeartwelveT").innerHTML = document.getElementById("yeartwelveF").value;

    //10th
    document.getElementById("institutetenT").innerHTML = document.getElementById("institutetenF").value;
    document.getElementById("markstenT").innerHTML = document.getElementById("markstenF").value;
    document.getElementById("yeartenT").innerHTML = document.getElementById("yeartenF").value;

    //Internships
    document.getElementById("internTitleT").innerHTML=document.getElementById("internTitleF").value;
    document.getElementById("interndescriptionT").innerHTML=document.getElementById("interndescriptionF").value;
    document.getElementById("yearinternT").innerHTML=document.getElementById("yearinternF").value;

    // //adding another intern
    // let internlist=document.getElementById("interns")

    // let str="";

    // for (let intern of internlist){
    //     str=str+`<li> ${intern.value} </li>`;

    // } 

    // document.getElementById("internlistT").innerHTML=str;

    // let internList = document.getElementById("internlistT");
    // internList.innerHTML = ""; // Clear the existing content

    // // Loop through internship data and create list items
    // for (let internship of internships) {
    //     let newListItem = document.createElement("li");

    //     let titleElement = document.createElement("p");
    //     titleElement.classList.add("col-8", "fw-bold", "my-0");
    //     titleElement.textContent = internship.title;
    //     newListItem.appendChild(titleElement);

    //     let yearElement = document.createElement("p");
    //     yearElement.classList.add("col-2", "fw-bold", "my-0")
    //     yearElement.textContent = internship.year;
    //     newListItem.appendChild(yearElement);

    //     let descriptionElement = document.createElement("p");
    //     descriptionElement.textContent = internship.description;
    //     newListItem.appendChild(descriptionElement);

        

    //     internList.appendChild(newListItem);
    // }


    //projects
    document.getElementById("ProjectTitleT").innerHTML=document.getElementById("ProjectTitleF").value;
    document.getElementById("ProjectdescriptionT").innerHTML=document.getElementById("ProjectdescriptionF").value;
    document.getElementById("yearprojectT").innerHTML=document.getElementById("yearprojectF").value;

    //skills
    document.getElementById("skilltypeT").innerHTML=document.getElementById("skilltypeF").value;
    document.getElementById("skilldescriptionT").innerHTML=document.getElementById("skilldescriptionF").value;

    //PORs
    document.getElementById("PORNameT").innerHTML=document.getElementById("PORNameF").value;
    document.getElementById("PORdurationT").innerHTML=document.getElementById("PORdurationF").value;
    document.getElementById("PORdescriptionT").innerHTML=document.getElementById("PORdescriptionF").value;

    document.getElementById("cv-form").style.display="none";
    document.getElementById("CVtemplate").style.display="block";
    
}

// function downloadPDF() {
//     // Select the element containing the content you want to convert to PDF
//     const element = document.getElementById("CVtemplate");

//     // Create a new jsPDF instance
//     const pdf = new jsPDF({
//         orientation: 'portrait',
//         unit: 'mm',
//         format: 'a4',
//     });

//     // Convert the HTML element to a canvas using html2canvas
//     html2canvas(element).then((canvas) => {
//         // Convert the canvas to an image data URL
//         const dataURL = canvas.toDataURL('image/png');

//         // Add the image to the PDF
//         pdf.addImage(dataURL, 'PNG', 0, 0, 210, 297); // A4 size: 210 x 297 mm

//         // Save the PDF
//         pdf.save('Generated_PDF.pdf');
//     });
// }

window.onload = function () {
    const downloadButton = document.getElementById("download");

    downloadButton.addEventListener("click", () => {
        const cv = document.getElementById("Cvtemplate");
        
        // Set A4 size (210mm x 297mm) for the HTML element
        cv.style.width = "210mm";
        cv.style.height = "297mm";
        cv.style.margin="2px";

        html2pdf().from(cv).save();
    });
};


setInterval(generateCV, 100);
