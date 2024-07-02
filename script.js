if (window.location.href.includes('index.html')) {
    const hire = document.querySelector(".hire");
    const email = document.querySelector(".email");
    const resume = document.querySelector(".resume");

    hire.addEventListener("click", handleHireClick);
    email.addEventListener("click", handleEmailClick);
    resume.addEventListener("click", handleResumeClick);
}

if (window.location.href.includes('contact.html')) {
    const emailContact = document.querySelector("#email-contact");
    const phoneContact = document.querySelector("#phone-contact");

    emailContact.addEventListener("click", handleEmailClick);
    phoneContact.addEventListener("click", handlePhoneClick);
}

function handleHireClick() {
    const url = "https://www.linkedin.com/in/namtran-swe";

    window.open(url, '_blank');
}

function handleEmailClick() {
    navigator.clipboard.writeText("namtran.swe@gmail.com");

    alert("Copied Email!");
}

function handlePhoneClick() {
    navigator.clipboard.writeText("7144173072");

    alert("Copied Phone Number!");
}

function handleResumeClick() {
    const resumeUrl = "https://drive.google.com/uc?export=download&id=1h6pu3kth2zKauX2ms-altggbkk0AFy-Y";
    const a = document.createElement('a');
    a.href = resumeUrl;
    a.download = 'Nam_Tran_Resume.docx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    alert("Thank you. Please check your Downloads.");
}
