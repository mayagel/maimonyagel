export const scrollToSection = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    // Offset for fixed header
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};