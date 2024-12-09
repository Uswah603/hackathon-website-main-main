// Define an interface for the resume structure
interface Resume {
    name: string;
    email: string;
    phone: string;
    education:string;
    exprience: string;
    skills: string;
}

// Wait for the DOM to fully load before interacting with it
window.onload = () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeOutput = document.getElementById('resumeContent') as HTMLDivElement;

    // Handle form submission
    form.onsubmit = (event) => {
        event.preventDefault();

        // Collect form data and store in a Resume object
        const resumeData: Resume = {
            name: (document.getElementById('name') as HTMLInputElement).value,
            email: (document.getElementById('email') as HTMLInputElement).value,
            phone: (document.getElementById('phone') as HTMLInputElement).value,
            education: (document.getElementById('education') as HTMLInputElement).value,
            exprience: (document.getElementById('experience') as HTMLTextAreaElement).value,
            skills: (document.getElementById('skills') as HTMLInputElement).value
        };

        // Generate the resume and display it in the resume output section
        generateResume(resumeData);
    };

    // Function to dynamically generate the resume
    function generateResume(resume: Resume) {
        resumeOutput.innerHTML = `
            <h2>Your Resume</h2>
            <p><strong>Name:</strong> ${resume.name}</p>
            <p><strong>Email:</strong> ${resume.email}</p>
            <p><strong>Phone:</strong> ${resume.phone}</p>

            <h3>Experience</h3>
            <p><strong>education:</strong> ${resume.education}</p>
            <p><strong>experience:</strong> ${resume.exprience}</p>
            <p><strong>skills:</strong> ${resume.skills}</p>

            <h3>Skills</h3>
            <p>${resume.skills}</p>
        `;
    }
};
