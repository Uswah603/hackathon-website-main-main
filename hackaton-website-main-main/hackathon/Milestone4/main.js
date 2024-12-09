// Wait for the DOM to fully load before interacting with it
window.onload = function () {
    var form = document.getElementById('resumeForm');
    var resumeOutput = document.getElementById('resumeContent');
    // Handle form submission
    form.onsubmit = function (event) {
        event.preventDefault();
        // Collect form data and store in a Resume object
        var resumeData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            education: document.getElementById('education').value,
            exprience: document.getElementById('experience').value,
            skills: document.getElementById('skills').value
        };
        // Generate the resume and display it in the resume output section
        generateResume(resumeData);
    };
    // Function to dynamically generate the resume
    function generateResume(resume) {
        resumeOutput.innerHTML = "\n            <h2>Editable Resume</h2>\n            <p><strong>Name:</strong><span contenteditable=\"true\"> ".concat(resume.name, "</span></p>\n            <p><strong>Email:</strong><span contenteditable=\"true\"> ").concat(resume.email, "</span></p>\n            <p><strong>Phone:</strong><span contenteditable=\"true\"> ").concat(resume.phone, "<span></p>\n\n            <h3>Experience</h3>\n            <p contentededible=\"true\"><strong>education:</strong> ").concat(resume.education, "</p>\n            <p contentededible=\"true\"><strong>experience:</strong> ").concat(resume.exprience, "</p>\n            <p contentededible=\"true\"><strong>skills:</strong> ").concat(resume.skills, "</p>\n\n            <h3>Skills</h3>\n            <p>").concat(resume.skills, "</p>\n        ");
    }
};
