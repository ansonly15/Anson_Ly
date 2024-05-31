 <script>
document.querySelectorAll('a.smoothscroll').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        const nameInput = document.querySelector('input[name="Name"]');
        const emailInput = document.querySelector('input[name="email"]');
        const messageInput = document.querySelector('textarea[name="Message"]');

        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            alert('Please fill out all fields before submitting the form.');
            event.preventDefault();
        }
    });
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
};
</script>
