document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.getElementById("contactButton");

    contactButton.addEventListener("click", function () {
        const email = "ganeshkodimoju52@gmail.com";
        const subject = "Contact Request For Ganesh K";

        // Provide Gmail and Outlook options
        const userChoice = confirm("Do you want to use Gmail? Click 'OK' for Gmail or 'Cancel' for Outlook.");

        let mailLink;
        if (userChoice) {
            // Gmail compose link
            mailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`;
        } else {
            // Outlook compose link
            mailLink = `https://outlook.office.com/mail/deeplink/compose?to=${email}&subject=${encodeURIComponent(subject)}`;
        }

        // Open the selected mail service in a new tab
        window.open(mailLink, '_blank');
    });
});
