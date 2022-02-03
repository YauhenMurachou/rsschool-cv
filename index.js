const hamburger = document.querySelector('.hamburger');
const headerList = document.querySelector('.header__list-adaptive');
const navLinks = document.querySelectorAll('.header__link-adaptive');

function toggleMenu() {
	hamburger.classList.toggle('open');
	headerList.classList.toggle('open');
}

function closeMenu(e) {
	if (e.target.classList.contains('header__link-adaptive')) {
		headerList.classList.remove('open');
		hamburger.classList.toggle('open');
	}
}

hamburger.addEventListener('click', toggleMenu);
navLinks.forEach((el) => el.addEventListener('click', closeMenu));