function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

// Toast function
function showToast(message, type) {
    let toast = document.getElementById("toast");

    toast.innerHTML = message;
    toast.className = "show " + type;

    setTimeout(() => {
        toast.className = "";
    }, 3000);
}

document.getElementById("contactForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Validation
    if (name === "" || email === "" || message === "") {
        showToast("⚠️ Please fill all fields", "error");
        return;
    }

    if (!email.match(emailPattern)) {
        showToast("❌ Invalid email address", "error");
        return;
    }

    // Show loading
    showToast('<span class="spinner"></span> Sending...', "success");

    // Fake delay (simulate real backend)
    setTimeout(() => {
        showToast("✅ Message sent successfully!", "success");
        document.getElementById("contactForm").reset();
    }, 1500);

});