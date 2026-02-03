document.getElementById("volunteerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("formMessage").textContent =
    "Thank you for joining A. Rashid Foundation. We will contact you soon.";

  this.reset();
});

function searchSite() {
  const query = document.getElementById("searchInput").value.toLowerCase();

  if (!query) {
    alert("Please enter a search term");
    return;
  }

  const bodyText = document.body.innerText.toLowerCase();

  if (bodyText.includes(query)) {
    alert(`"${query}" found on this page`);
  } else {
    alert(`"${query}" not found`);
  }
}

function switchLanguage() {
  const lang = document.getElementById("languageSelect").value;

  const translations = {
    en: {
      donate: "Donate",
      volunteer: "Volunteer",
      contact: "Contact",
      searchPlaceholder: "Search"
    },
    bn: {
      donate: "দান করুন",
      volunteer: "স্বেচ্ছাসেবক",
      contact: "যোগাযোগ",
      searchPlaceholder: "খুঁজুন"
    }
  };

  // Navbar text updates
  document.querySelector('a[href="#donate"]').innerText = translations[lang].donate;
  document.querySelector('a[href="#volunteer"]').innerText = translations[lang].volunteer;
  document.querySelector('a[href="#contact"]').innerText = translations[lang].contact;

  // Search placeholder
  document.getElementById("searchInput").placeholder =
    translations[lang].searchPlaceholder;
}
