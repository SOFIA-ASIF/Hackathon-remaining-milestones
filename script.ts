function attachToggleListener() {
    const toggleButtons = [
      {
        buttonId: "toggle-skills",
        sectionId: "skills-section",
        headingId: "skills-heading",
      },
      {
        buttonId: "toggle-languages",
        sectionId: "languages-section",
        headingId: "languages-heading",
      },
      {
        buttonId: "toggle-hobbies",
        sectionId: "hobbies-section",
        headingId: "hobbies-heading",
      },
      {
        buttonId: "toggle-summary",
        sectionId: "summary-section",
        headingId: "summary-heading",
      },
      {
        buttonId: "toggle-experience",
        sectionId: "work-experience-section",
        headingId: "experience-heading",
      },
      {
        buttonId: "toggle-education",
        sectionId: "education-section",
        headingId: "education-heading",
      },
    ];
  
    toggleButtons.forEach(({ buttonId, sectionId, headingId }) => {
      const toggleButton = document.getElementById(buttonId);
      const sectionDiv = document.getElementById(sectionId);
      const heading = document.getElementById(headingId);
  
      toggleButton?.addEventListener("click", () => {
        const isHidden = sectionDiv?.classList.toggle("hidden");
        if (isHidden) {
          heading?.classList.add("hidden");
        } else {
          heading?.classList.remove("hidden");
        }
      });
    });
  }
  interface ResumeData {
    name: string;
    email: string;
    phone: string;
    location: string;
    education: string;
    experience: string;
    skills: string[];
    languages: string[];
    hobbies: string[];
    summary: string;
  }
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form") as HTMLFormElement;
    const output = document.getElementById("resume-output") as HTMLElement;
  
  const editBtn = document.getElementById("edit-btn") as HTMLButtonElement;
  const saveBtn = document.getElementById("save-btn") as HTMLButtonElement;
  
    // Preview profile picture
    const profilePicInput = document.getElementById(
      "profile-pic"
    ) as HTMLInputElement;
    const profilePicPreview = document.getElementById(
      "profile-pic-preview"
    ) as HTMLImageElement;
    profilePicPreview.src = "default-profile.jpg";
  
    function cleanInput(input: string): string[] {
      return input
        .split(",")
        .map((item) => item.trim()) // Trim whitespace from each item
        .filter((item) => item !== ""); // Remove empty strings
    }
  
    function generateResume(data: ResumeData) {
      form.style.display = 'none';
  
      let outputHTML = `
      <div class="container">
        <!-- Personal Information Section -->
        <section class="personal-info">
      <div class="image">
          <img class="profile-pic" src="${profilePicPreview.src}" alt="Profile Picture"/>
      </div>
      
      <h1 class="name">${data.name}</h1>
      
      <div class="details">
          <i class="fa-solid fa-phone icons"><span>${data.phone}</span></i>
          <i class="fa-regular fa-envelope icons"><span>${data.email}</span></i>
          <i class="fa-solid fa-location-dot icons"><span>${data.location}</span></i>
      </div>`
  ;
  
      // Conditionally add Skills section
      if (true) {
        outputHTML += `
          <button class="toggle-button" id="toggle-skills">Toggle Skills</button>
          <div class="div-container" id="skills-section">
            <h2 class="skills" id="skills-heading">Skills</h2>
            <ul class="skill-name" id="skills">
              ${data.skills.map((skill) => `<li>${skill}</li>`).join("")}
            </ul>
          </div>`;
      }
  
      // Conditionally add Languages section
      if (data.languages.length >= 1) {
        outputHTML += `
          <button class="toggle-button" id="toggle-languages">Toggle Languages</button>
          <div class="div-container" id="languages-section">
            <h2 class="skills" id="languages-heading">Languages</h2>
            <ul class="skill-name" id="languages">
              ${data.languages.map((language) => `<li>${language}</li>`).join("")}
            </ul>
          </div>`;
      }
  
      // Conditionally add Hobbies section
      // Conditionally add Hobbies section
      if (data.hobbies.length >= 1) {
        outputHTML += `
  
        <button class="toggle-button" id="toggle-hobbies">Toggle Hobbies</button>
        <div class="div-container" id="hobbies-section">
            <h2 class="skills" id="hobbies-heading">Hobbies</h2>
            <ul class="skill-name" id="hobbies">
                ${data.hobbies.map((hobby) => `<li>${hobby}</li>`).join("")}
            </ul>
        </div>`;
      }
  
      // Add work, summary, and education sections
      outputHTML += `
        </section>
  
        <!-- Experience Section -->
        <section class="work">
           
          <button class="toggle-button" id="toggle-summary">Toggle Summary</button>
          <div class="summary" id="summary-section">
            <h2 class="skills" id="summary-heading">SUMMARY</h2>
            <div id="summary">
              <p>${data.summary}</p>
            </div>
          </div>
  
          ${
            data.experience
              ? `
          <button class="toggle-button" id="toggle-experience">Toggle Work Experience</button>
          <div class="summary" id="work-experience-section">
            <h2 class="skills" id="experience-heading">WORK EXPERIENCE</h2>
            <div id="work-experience">
              <p>${data.experience}</p>
            </div>
          </div>`
              : ""
          }`;
  
      outputHTML += `
          <button class="toggle-button" id="toggle-education">Toggle Education</button>
          <div class="summary" id="education-section">
            <h2 class="skills" id="education-heading">EDUCATION</h2>
            <div id="education">
              <p>${data.education}</p>
            </div>
          </div>
        </section>
      </div>`;
      editBtn.style.display = 'block';
      saveBtn.style.display = 'block';
      // Set the output to the innerHTML
      output.innerHTML = outputHTML;
      // Reattach the toggle button listeners
      attachToggleListener();
    }
  
    profilePicInput.addEventListener("change", (event) => {
      const file = (event.target as HTMLInputElement).files?.[0] ?? null;
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if ( e.target?.result) {
            profilePicPreview.src = e.target.result as string;
            profilePicPreview.style.display = "block"; // Show the image
          } else {
            console.error("Error loading profile picture.");
          }
        };
        reader.readAsDataURL(file);
      }
    });
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the form from submitting normally
  
      let resumeData: ResumeData = {
        name: (document.getElementById("name") as HTMLInputElement).value,
        email: (document.getElementById("email") as HTMLInputElement).value,
        phone: (document.getElementById("phone") as HTMLInputElement).value,
        location: (document.getElementById("location") as HTMLInputElement).value,
        education: (document.getElementById("education") as HTMLInputElement)
          .value,
        summary: (document.getElementById("summary") as HTMLInputElement).value,
        experience: (document.getElementById("experience") as HTMLTextAreaElement)
          .value,
        skills: cleanInput(
          (document.getElementById("skills") as HTMLInputElement).value
        ),
        hobbies: cleanInput(
          (document.getElementById("hobbies") as HTMLInputElement).value
        ),
        languages: cleanInput(
          (document.getElementById("languages") as HTMLInputElement).value
        ),
      };
      console.log("Resume Data: ", resumeData);
      generateResume(resumeData);
      function enableEditMode() {
        form.style.display = 'block';
        saveBtn.style.display = 'block';
        editBtn.style.display = 'none';
      }
      
      function saveUpdatedData() {
        let updatedData: ResumeData = {
          name: (document.getElementById("name") as HTMLInputElement).value,
          email: (document.getElementById("email") as HTMLInputElement).value,
          phone: (document.getElementById("phone") as HTMLInputElement).value,
          location: (document.getElementById("location") as HTMLInputElement).value,
          education: (document.getElementById("education") as HTMLInputElement)
            .value,
          summary: (document.getElementById("summary") as HTMLInputElement).value,
          experience: (document.getElementById("experience") as HTMLTextAreaElement)
            .value,
          skills: cleanInput(
            (document.getElementById("skills") as HTMLInputElement).value
          ),
          hobbies: cleanInput(
            (document.getElementById("hobbies") as HTMLInputElement).value
          ),
          languages: cleanInput(
            (document.getElementById("languages") as HTMLInputElement).value
          ),
        };
      
        generateResume(updatedData);
        form.style.display = 'none';
        saveBtn.style.display = 'none';
      }
      form.addEventListener("submit", function(event) {
        event.preventDefault();
        resumeData = {
          name: (document.getElementById("name") as HTMLInputElement).value,
          email: (document.getElementById("email") as HTMLInputElement).value,
          phone: (document.getElementById("phone") as HTMLInputElement).value,
          location: (document.getElementById("location") as HTMLInputElement).value,
          education: (document.getElementById("education") as HTMLInputElement)
            .value,
          summary: (document.getElementById("summary") as HTMLInputElement).value,
          experience: (document.getElementById("experience") as HTMLTextAreaElement)
            .value,
          skills: cleanInput(
            (document.getElementById("skills") as HTMLInputElement).value
          ),
          hobbies: cleanInput(
            (document.getElementById("hobbies") as HTMLInputElement).value
          ),
          languages: cleanInput(
            (document.getElementById("languages") as HTMLInputElement).value
          ),};
        generateResume(resumeData);
        form.style.display = 'none';
      });
      editBtn.addEventListener("click", function() {
        if (resumeData) {
          generateResume(resumeData);
          enableEditMode();
        }
      });
      
      saveBtn.addEventListener("click", function() {
        saveUpdatedData();
      });
      
    });
  });
  // edit button
  
  