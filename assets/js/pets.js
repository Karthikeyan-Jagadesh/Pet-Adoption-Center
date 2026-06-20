const pets = [
  {
    id: "max",
    name: "Max",
    species: "dog",
    breed: "Golden Retriever",
    age: "adult",
    size: "large",
    temperament: ["Friendly", "Active"],
    image: "Resources/Images/image1.jfif",
  },
  {
    id: "bella",
    name: "Bella",
    species: "dog",
    breed: "Beagle",
    age: "young",
    size: "medium",
    temperament: ["Curious", "Gentle"],
    image: "Resources/Images/image2.jfif",
  },
  {
    id: "charlie",
    name: "Charlie",
    species: "dog",
    breed: "Bulldog",
    age: "adult",
    size: "medium",
    temperament: ["Calm", "Loyal"],
    image: "Resources/Images/image3.jpg",
  },
  {
    id: "lucy",
    name: "Lucy",
    species: "dog",
    breed: "Poodle",
    age: "senior",
    size: "small",
    temperament: ["Smart", "Affectionate"],
    image: "Resources/Images/image4.jfif",
  },
  {
    id: "cooper",
    name: "Cooper",
    species: "dog",
    breed: "Dachshund",
    age: "young",
    size: "small",
    temperament: ["Playful", "Social"],
    image: "Resources/Images/image5.avif",
  },
  {
    id: "milo",
    name: "Milo",
    species: "cat",
    breed: "Tabby",
    age: "young",
    size: "small",
    temperament: ["Independent", "Cuddly"],
    image: "Resources/Images/home2.jpg",
  },
];

function getImagePrefix() {
  return document.body.dataset.imagePrefix || "";
}

function renderPetCard(pet) {
  const prefix = getImagePrefix();
  const tags = pet.temperament.map((t) => `<span class="tag">${t}</span>`).join("");

  return `
    <article class="card pet-card" data-species="${pet.species}" data-age="${pet.age}" data-size="${pet.size}">
      <img src="${prefix}${pet.image}" alt="${pet.name}">
      <div class="card-body">
        <h3>${pet.name}</h3>
        <p class="pet-meta">${pet.breed} · ${formatAge(pet.age)} · ${formatSize(pet.size)}</p>
        <div class="pet-tags">${tags}</div>
        <a class="btn btn-accent" href="adopt.html?pet=${encodeURIComponent(pet.name)}">Meet ${pet.name}</a>
      </div>
    </article>
  `;
}

function formatAge(age) {
  const labels = { young: "Young", adult: "Adult", senior: "Senior" };
  return labels[age] || age;
}

function formatSize(size) {
  const labels = { small: "Small", medium: "Medium", large: "Large" };
  return labels[size] || size;
}

function filterPets() {
  const search = document.getElementById("pet-search")?.value.toLowerCase() || "";
  const species = document.getElementById("species-filter")?.value || "all";
  const age = document.getElementById("age-filter")?.value || "all";
  const size = document.getElementById("size-filter")?.value || "all";

  const filtered = pets.filter((pet) => {
    const matchesSearch =
      pet.name.toLowerCase().includes(search) ||
      pet.breed.toLowerCase().includes(search);
    const matchesSpecies = species === "all" || pet.species === species;
    const matchesAge = age === "all" || pet.age === age;
    const matchesSize = size === "all" || pet.size === size;
    return matchesSearch && matchesSpecies && matchesAge && matchesSize;
  });

  const grid = document.getElementById("pets-grid");
  const empty = document.getElementById("pets-empty");

  if (!grid) return;

  grid.innerHTML = filtered.map(renderPetCard).join("");
  empty?.classList.toggle("visible", filtered.length === 0);
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("pets-grid");
  if (!grid) return;

  filterPets();

  ["pet-search", "species-filter", "age-filter", "size-filter"].forEach((id) => {
    document.getElementById(id)?.addEventListener("input", filterPets);
    document.getElementById(id)?.addEventListener("change", filterPets);
  });
});
