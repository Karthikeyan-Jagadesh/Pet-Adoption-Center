const pets = [
  { name: "Max", breed: "Golden Retriever", image: "Resources/Images/image1.jfif" },
  { name: "Bella", breed: "Beagle", image: "Resources/Images/image2.jfif" },
  { name: "Charlie", breed: "Bulldog", image: "Resources/Images/image3.jpg" },
  { name: "Lucy", breed: "Poodle", image: "Resources/Images/image4.jfif" },
  { name: "Cooper", breed: "Dachshund", image: "Resources/Images/image5.avif" },
  { name: "Milo", breed: "Tabby Cat", image: "Resources/Images/home2.jpg" },
];

function getImagePrefix() {
  return document.body.dataset.imagePrefix || "";
}

function findPet(name) {
  return pets.find((pet) => pet.name.toLowerCase() === name.toLowerCase());
}

function showError(fieldId, message) {
  const field = document.getElementById(fieldId)?.closest(".form-field");
  const errorEl = document.getElementById(`${fieldId}-error`);
  if (!field || !errorEl) return;
  field.classList.add("invalid");
  errorEl.textContent = message;
}

function clearErrors() {
  document.querySelectorAll(".form-field").forEach((field) => {
    field.classList.remove("invalid");
  });
  document.querySelectorAll(".error").forEach((error) => {
    error.textContent = "";
  });
}

function validateForm(data) {
  let valid = true;

  if (!data.name.trim()) {
    showError("adopterName", "Please enter your full name.");
    valid = false;
  }

  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    showError("adopterEmail", "Please enter a valid email address.");
    valid = false;
  }

  if (!data.phone.trim() || data.phone.trim().length < 10) {
    showError("adopterPhone", "Please enter a valid phone number.");
    valid = false;
  }

  if (!data.pet.trim()) {
    showError("pet", "Please select or enter a pet name.");
    valid = false;
  }

  if (!data.message.trim() || data.message.trim().length < 20) {
    showError("adopterMessage", "Please share at least 20 characters about why you want to adopt.");
    valid = false;
  }

  return valid;
}

function renderPetSummary(petName) {
  const summary = document.getElementById("pet-summary");
  if (!summary) return;

  const prefix = getImagePrefix();
  const pet = findPet(petName);

  if (!pet) {
    summary.innerHTML = `
      <div class="pet-summary-placeholder">
        <p>Applying to adopt <strong>${petName}</strong></p>
        <p>Our team will confirm availability after you submit.</p>
      </div>
    `;
    return;
  }

  summary.innerHTML = `
    <div class="pet-summary">
      <img src="${prefix}${pet.image}" alt="${pet.name}">
      <div>
        <h3>${pet.name}</h3>
        <p class="pet-meta">${pet.breed}</p>
        <span class="tag tag-accent">Ready for adoption</span>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("adoption-form");
  const success = document.getElementById("form-success");
  const petInput = document.getElementById("pet");
  const params = new URLSearchParams(window.location.search);
  const petFromUrl = params.get("pet");

  if (petFromUrl && petInput) {
    petInput.value = petFromUrl;
    renderPetSummary(petFromUrl);
  } else {
    renderPetSummary("");
  }

  petInput?.addEventListener("input", (event) => {
    renderPetSummary(event.target.value);
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();

    const data = {
      name: document.getElementById("adopterName").value,
      email: document.getElementById("adopterEmail").value,
      phone: document.getElementById("adopterPhone").value,
      pet: document.getElementById("pet").value,
      message: document.getElementById("adopterMessage").value,
    };

    if (!validateForm(data)) return;

    form.hidden = true;
    success?.classList.add("visible");

    const successName = document.getElementById("success-name");
    const successPet = document.getElementById("success-pet");
    if (successName) successName.textContent = data.name;
    if (successPet) successPet.textContent = data.pet;
  });
});
