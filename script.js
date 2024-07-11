if (window.location.href.includes('index.html')) {
    const hire = document.querySelector(".hire");
    const email = document.querySelector(".email");
    const resume = document.querySelector(".resume");

    hire.addEventListener("click", handleHireClick);
    email.addEventListener("click", handleEmailClick);
    resume.addEventListener("click", handleResumeClick);
}

if (window.location.href.includes('portfolio.html')) {
    const firstCodeLink = document.querySelector("#first-source");
    const secondCodeLink = document.querySelector("#second-source");
    const thirdCodeLink = document.querySelector("#third-source");

    const firstExpand = document.querySelector("#expand-first");
    const secondExpand = document.querySelector("#expand-second");
    const thirdExpand = document.querySelector("#expand-third");

    firstCodeLink.addEventListener("click", () => {
        url = "https://github.com/namtran-swe/100-Days-of-JavaScript/tree/main/4_QR_Code_Generator";
        window.open(url, '_blank');
    });

    secondCodeLink.addEventListener("click", () => {
        url = "https://github.com/namtran-swe/100-Days-of-JavaScript/tree/main/3_Password_Generator";
        window.open(url, '_blank');
    });

    thirdCodeLink.addEventListener("click", () => {
        url = "https://github.com/namtran-swe/100-Days-of-JavaScript/tree/main/1_Pixel_Art_Generator";
        window.open(url, '_blank');
    });

    firstExpand.addEventListener("click", () => {
        var element = document.getElementById("proj-desc-1");
        expandDesc(element, firstExpand);
    });

    secondExpand.addEventListener("click", () => {
        var element = document.getElementById("proj-desc-2");
        expandDesc(element, secondExpand);
    });

    thirdExpand.addEventListener("click", () => {
        var element = document.getElementById("proj-desc-3");
        expandDesc(element, thirdExpand);
    });
}

if (window.location.href.includes('contact.html')) {
    const emailContact = document.querySelector("#email-contact");
    const phoneContact = document.querySelector("#phone-contact");

    emailContact.addEventListener("click", handleEmailClick);
    phoneContact.addEventListener("click", () => {
        navigator.clipboard.writeText("7144173072");
        alert("Copied Phone Number!");
    });
}

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

function expandDesc(element, button) {
    if (element.classList.contains('shorten')) {
        element.classList.remove('shorten');
        element.classList.add('show-all');
        button.innerHTML = "Minimize " + `<i class="fa-solid fa-minimize"></i>`;
    } else {
        element.classList.remove('show-all');
        element.classList.add('shorten');
        button.innerHTML = "Expand " + `<i class="fa-solid fa-expand"></i>`;
    }
}
