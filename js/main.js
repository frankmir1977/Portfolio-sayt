function openModal(id) {
	document.getElementById(id).style.display = "block";
}

function closeModal(id) {
	document.getElementById(id).style.display = "none";
}

window.onclick = function (event) {
	const modals = document.querySelectorAll(".modal");
	modals.forEach((modal) => {
		if (event.target === modal) {
			modal.style.display = "none";
		}
	});
};

document.addEventListener("DOMContentLoaded", () => {
	const fadeElements = document.querySelectorAll(".fade-in");

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
				}
			});
		},
		{ threshold: 0.1 }
	);

	fadeElements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
	const fadeElements = document.querySelectorAll(".fade-in");

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
				}
			});
		},
		{ threshold: 0.1 }
	);

	fadeElements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
	const animatedElements = document.querySelectorAll(
		".fade-in, .zoom-in, .slide-up"
	);

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
				}
			});
		},
		{ threshold: 0.1 }
	);

	animatedElements.forEach((el) => observer.observe(el));
});

// Modal fade
function openModal(id) {
	const modal = document.getElementById(id);
	modal.style.display = "block";
	setTimeout(() => modal.classList.add("show"), 10);
}

function closeModal(id) {
	const modal = document.getElementById(id);
	modal.classList.remove("show");
	setTimeout(() => (modal.style.display = "none"), 300);
}

document.addEventListener("DOMContentLoaded", () => {
	const burger = document.querySelector(".gamburg_div");
	const menu = document.querySelector(".menu");

	burger.addEventListener("click", () => {
		menu.classList.toggle("hidden");
	});
});

const img = document.querySelector(".gamburg_img");

img.addEventListener("click", () => {
	img.classList.toggle("rotated");
	// toggle qilgani uchun har bosganda aylantiradi va qaytaradi
});
