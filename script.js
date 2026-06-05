const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});

const projects = {
  floral: {
    title: "Floral Essence Dynamic Website",
    image: "images/floralessence.png",
    description:
      "Floral Essence is a dynamic flower shop website developed as an academic project. It allows users to browse flower products and interact with basic online shopping features.",
    features: [
      "Developed using PHP, MySQL, HTML, CSS, and JavaScript",
      "Customer login and registration system",
      "Product management features",
      "Shopping cart functionality",
      "Admin dashboard for managing products",
      "Database integration using MySQL"
    ]
  },

  fitness: {
    title: "Fitness Mobile Application",
    image: "images/floralessence.png",
    description:
      "Fitness Mobile Application is a simple mobile app developed using Kotlin as an academic assignment project. The app focuses on basic fitness-related functions and user-friendly mobile interfaces.",
    features: [
      "Developed using Kotlin",
      "Simple and clean mobile interface",
      "Fitness-related features",
      "Academic assignment project",
      "Improved mobile app development knowledge"
    ]
  },

  figma: {
    title: "Figma UI Design Project",
    image: "images/floralessence.png",
    description:
      "This project includes UI design screens and prototype layouts created using Figma. It helped improve my understanding of layout design, user experience, and visual consistency.",
    features: [
      "Designed using Figma",
      "Created mobile and web interface layouts",
      "Focused on clean and user-friendly design",
      "Practiced UI/UX design principles",
      "Prepared prototype screens"
    ]
  }
};

function openProject(projectName) {
  const project = projects[projectName];

  document.getElementById("modalImage").src = project.image;
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalDescription").textContent = project.description;

  const featureList = document.getElementById("modalFeatures");
  featureList.innerHTML = "";

  project.features.forEach(feature => {
    const li = document.createElement("li");
    li.textContent = feature;
    featureList.appendChild(li);
  });

  document.getElementById("projectModal").style.display = "flex";
}

function closeProject() {
  document.getElementById("projectModal").style.display = "none";
}

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});