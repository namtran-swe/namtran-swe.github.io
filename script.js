const hire = document.querySelector(".hire");
const email = document.querySelector(".email");
const resume = document.querySelector(".resume");

hire.addEventListener("click", handleHireClick);
email.addEventListener("click", handleEmailClick);
resume.addEventListener("click", handleResumeClick);

function handleHireClick() {
    const url = "https://www.linkedin.com/in/namtran-swe";

    window.open(url, '_blank');
}

function handleEmailClick() {
    navigator.clipboard.writeText("namtran.swe@gmail.com");

    alert("Copied Email!");
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
