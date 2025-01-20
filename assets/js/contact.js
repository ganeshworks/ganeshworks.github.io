document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.getElementById("contactButton");

    contactButton.addEventListener("click", function () {
        const email = "ganeshkodimoju52@gmail.com";
        const subject = "Contact Request For Ganesh K";

        // Ask user for Gmail option
        const userChoice = confirm("Do you want to use Gmail? Click 'OK' for Gmail or 'Cancel' to close.");

        if (userChoice) {
            // Gmail compose link
            const mailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`;
            // Open Gmail in a new tab
            window.open(mailLink, '_blank');
        } 
        // If user clicks "Cancel", do nothing
    });
});
