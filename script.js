document.getElementById("button_Resume")?.addEventListener("click", resume_button);
document.getElementById("button_Projects")?.addEventListener("click", projects_button);

document.addEventListener("DOMContentLoaded", function() {
    const backButton = document.getElementById("button_Back");
    if (backButton) {
        backButton.addEventListener("click", back_Button);
    }
});

function resume_button() {
    console.log("Resume button clicked");
    window.location.href = "windows/resume.html";
}

function projects_button() {
    console.log("Projects button clicked");
    window.location.href = "windows/projects.html";
}

function back_Button() {
    console.log("Back button clicked");
    window.location.href = "../index.html";
}