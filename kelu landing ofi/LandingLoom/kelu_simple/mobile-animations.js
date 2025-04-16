// Animaciones específicas para dispositivos móviles
document.addEventListener('DOMContentLoaded', function() {
    // Detectar si es un dispositivo móvil
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Optimizar animaciones para móviles
        const benefitCards = document.querySelectorAll('.benefit-card');
        
        // Usar animaciones más ligeras en móviles
        benefitCards.forEach(card => {
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        
        // Añadir detección de gestos para móviles (swipe)
        let touchstartX = 0;
        let touchendX = 0;
        
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            section.addEventListener('touchstart', e => {
                touchstartX = e.changedTouches[0].screenX;
            });
            
            section.addEventListener('touchend', e => {
                touchendX = e.changedTouches[0].screenX;
                handleSwipe();
            });
        });
        
        const handleSwipe = () => {
            // Si el swipe es significativo (más de 50px)
            if (touchendX < touchstartX - 50) {
                // Swipe izquierda - ir a la siguiente sección
                scrollToNextSection();
            }
            
            if (touchendX > touchstartX + 50) {
                // Swipe derecha - ir a la sección anterior
                scrollToPrevSection();
            }
        };
        
        const scrollToNextSection = () => {
            const currentPos = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // Encuentra la próxima sección
            for (let i = 0; i < sections.length; i++) {
                const sectionTop = sections[i].offsetTop;
                
                if (sectionTop > currentPos + 100) {
                    window.scrollTo({
                        top: sectionTop,
                        behavior: 'smooth'
                    });
                    break;
                }
            }
        };
        
        const scrollToPrevSection = () => {
            const currentPos = window.scrollY;
            
            // Encuentra la sección anterior
            for (let i = sections.length - 1; i >= 0; i--) {
                const sectionTop = sections[i].offsetTop;
                
                if (sectionTop < currentPos - 100) {
                    window.scrollTo({
                        top: sectionTop,
                        behavior: 'smooth'
                    });
                    break;
                }
            }
        };
    }
});