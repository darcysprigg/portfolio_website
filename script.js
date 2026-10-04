document.getElementById("button_Resume")?.addEventListener("click", resume_button);
document.getElementById("button_Projects")?.addEventListener("click", projects_button);

document.addEventListener("DOMContentLoaded", function() {
    const backButton = document.getElementById("button_Back");
    if (backButton) {
        backButton.addEventListener("click", back_Button);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const stockbutton = document.getElementById("GOOG_stock_analysis");
    if (stockbutton) {
        stockbutton.addEventListener("click", GOOG_stock_analysis_Button);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const backprojects = document.getElementById("back_projects");
    if (backprojects) {
        backprojects.addEventListener("click", backprojects_Button);
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

function backprojects_Button() {
    console.log("Back button clicked");
    window.location.href = "../windows/projects.html";
}

function GOOG_stock_analysis_Button() {
    console.log("GOOG stock analysis button clicked");
    window.location.href = "../windows/GOOG_stock_analysis.html";
}