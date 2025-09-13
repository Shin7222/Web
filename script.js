// IntersectionObserver untuk animasi fade-in
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target); // stop observe setelah tampil
            }
        });
    },
    { threshold: 0.2 }
); // 20% elemen terlihat baru muncul

// Observe semua elemen dengan class hidden
document.querySelectorAll(".hidden").forEach(el => observer.observe(el));
