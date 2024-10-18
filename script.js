function attachToggleListener() {
    var toggleButtons = [
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
    toggleButtons.forEach(function (_a) {
        var buttonId = _a.buttonId, sectionId = _a.sectionId, headingId = _a.headingId;
        var toggleButton = document.getElementById(buttonId);
        var sectionDiv = document.getElementById(sectionId);
        var heading = document.getElementById(headingId);
        toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener("click", function () {
            var isHidden = sectionDiv === null || sectionDiv === void 0 ? void 0 : sectionDiv.classList.toggle("hidden");
            if (isHidden) {
                heading === null || heading === void 0 ? void 0 : heading.classList.add("hidden");
            }
            else {
                heading === null || heading === void 0 ? void 0 : heading.classList.remove("hidden");
            }
        });
    });
}
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    var output = document.getElementById("resume-output");
    var editBtn = document.getElementById("edit-btn");
    var saveBtn = document.getElementById("save-btn");
    // Preview profile picture
    var profilePicInput = document.getElementById("profile-pic");
    var profilePicPreview = document.getElementById("profile-pic-preview");
    profilePicPreview.src = "default-profile.jpg";
    function cleanInput(input) {
        return input
            .split(",")
            .map(function (item) { return item.trim(); }) // Trim whitespace from each item
            .filter(function (item) { return item !== ""; }); // Remove empty strings
    }
    function generateResume(data) {
        form.style.display = 'none';
        var outputHTML = "\n      <div class=\"container\">\n        <!-- Personal Information Section -->\n        <section class=\"personal-info\">\n      <div class=\"image\">\n          <img class=\"profile-pic\" src=\"".concat(profilePicPreview.src, "\" alt=\"Profile Picture\"/>\n      </div>\n      \n      <h1 class=\"name\">").concat(data.name, "</h1>\n      \n      <div class=\"details\">\n          <i class=\"fa-solid fa-phone icons\"><span>").concat(data.phone, "</span></i>\n          <i class=\"fa-regular fa-envelope icons\"><span>").concat(data.email, "</span></i>\n          <i class=\"fa-solid fa-location-dot icons\"><span>").concat(data.location, "</span></i>\n      </div>");
        // Conditionally add Skills section
        if (true) {
            outputHTML += "\n          <button class=\"toggle-button\" id=\"toggle-skills\">Toggle Skills</button>\n          <div class=\"div-container\" id=\"skills-section\">\n            <h2 class=\"skills\" id=\"skills-heading\">Skills</h2>\n            <ul class=\"skill-name\" id=\"skills\">\n              ".concat(data.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "\n            </ul>\n          </div>");
        }
        // Conditionally add Languages section
        if (data.languages.length >= 1) {
            outputHTML += "\n          <button class=\"toggle-button\" id=\"toggle-languages\">Toggle Languages</button>\n          <div class=\"div-container\" id=\"languages-section\">\n            <h2 class=\"skills\" id=\"languages-heading\">Languages</h2>\n            <ul class=\"skill-name\" id=\"languages\">\n              ".concat(data.languages.map(function (language) { return "<li>".concat(language, "</li>"); }).join(""), "\n            </ul>\n          </div>");
        }
        // Conditionally add Hobbies section
        // Conditionally add Hobbies section
        if (data.hobbies.length >= 1) {
            outputHTML += "\n  \n        <button class=\"toggle-button\" id=\"toggle-hobbies\">Toggle Hobbies</button>\n        <div class=\"div-container\" id=\"hobbies-section\">\n            <h2 class=\"skills\" id=\"hobbies-heading\">Hobbies</h2>\n            <ul class=\"skill-name\" id=\"hobbies\">\n                ".concat(data.hobbies.map(function (hobby) { return "<li>".concat(hobby, "</li>"); }).join(""), "\n            </ul>\n        </div>");
        }
        // Add work, summary, and education sections
        outputHTML += "\n        </section>\n  \n        <!-- Experience Section -->\n        <section class=\"work\">\n           \n          <button class=\"toggle-button\" id=\"toggle-summary\">Toggle Summary</button>\n          <div class=\"summary\" id=\"summary-section\">\n            <h2 class=\"skills\" id=\"summary-heading\">SUMMARY</h2>\n            <div id=\"summary\">\n              <p>".concat(data.summary, "</p>\n            </div>\n          </div>\n  \n          ").concat(data.experience
            ? "\n          <button class=\"toggle-button\" id=\"toggle-experience\">Toggle Work Experience</button>\n          <div class=\"summary\" id=\"work-experience-section\">\n            <h2 class=\"skills\" id=\"experience-heading\">WORK EXPERIENCE</h2>\n            <div id=\"work-experience\">\n              <p>".concat(data.experience, "</p>\n            </div>\n          </div>")
            : "");
        outputHTML += "\n          <button class=\"toggle-button\" id=\"toggle-education\">Toggle Education</button>\n          <div class=\"summary\" id=\"education-section\">\n            <h2 class=\"skills\" id=\"education-heading\">EDUCATION</h2>\n            <div id=\"education\">\n              <p>".concat(data.education, "</p>\n            </div>\n          </div>\n        </section>\n      </div>");
        editBtn.style.display = 'block';
        saveBtn.style.display = 'block';
        // Set the output to the innerHTML
        output.innerHTML = outputHTML;
        // Reattach the toggle button listeners
        attachToggleListener();
    }
    profilePicInput.addEventListener("change", function (event) {
        var _a, _b;
        var file = (_b = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : null;
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                    profilePicPreview.src = e.target.result;
                    profilePicPreview.style.display = "block"; // Show the image
                }
                else {
                    console.error("Error loading profile picture.");
                }
            };
            reader.readAsDataURL(file);
        }
    });
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally
        var resumeData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            location: document.getElementById("location").value,
            education: document.getElementById("education")
                .value,
            summary: document.getElementById("summary").value,
            experience: document.getElementById("experience")
                .value,
            skills: cleanInput(document.getElementById("skills").value),
            hobbies: cleanInput(document.getElementById("hobbies").value),
            languages: cleanInput(document.getElementById("languages").value),
        };
        console.log("Resume Data: ", resumeData);
        generateResume(resumeData);
        function enableEditMode() {
            form.style.display = 'block';
            saveBtn.style.display = 'block';
            editBtn.style.display = 'none';
        }
        function saveUpdatedData() {
            var updatedData = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                location: document.getElementById("location").value,
                education: document.getElementById("education")
                    .value,
                summary: document.getElementById("summary").value,
                experience: document.getElementById("experience")
                    .value,
                skills: cleanInput(document.getElementById("skills").value),
                hobbies: cleanInput(document.getElementById("hobbies").value),
                languages: cleanInput(document.getElementById("languages").value),
            };
            generateResume(updatedData);
            form.style.display = 'none';
            saveBtn.style.display = 'none';
        }
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            resumeData = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                location: document.getElementById("location").value,
                education: document.getElementById("education")
                    .value,
                summary: document.getElementById("summary").value,
                experience: document.getElementById("experience")
                    .value,
                skills: cleanInput(document.getElementById("skills").value),
                hobbies: cleanInput(document.getElementById("hobbies").value),
                languages: cleanInput(document.getElementById("languages").value),
            };
            generateResume(resumeData);
            form.style.display = 'none';
        });
        editBtn.addEventListener("click", function () {
            if (resumeData) {
                generateResume(resumeData);
                enableEditMode();
            }
        });
        saveBtn.addEventListener("click", function () {
            saveUpdatedData();
        });
    });
});
// edit button
