    function animateOnScroll(element, timeline) {
        timeline.fromTo(element, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.5 });
    }
    
    function animateDescriptionOnScroll(element, timeline) {
        timeline.fromTo(element, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 0.5 });
    }

    const containers = document.querySelectorAll('.container');
    
    function hasImage(element) {
        const childNodes = element.childNodes;
        for (let i = 0; i < childNodes.length; i++) {
            if (childNodes[i].nodeName.toLowerCase() === 'img') {
                return true;
            }
        }
        return false;
    }
    
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.bottom > 0 &&
            rect.right > 0 &&
            rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
            rect.top < (window.innerHeight || document.documentElement.clientHeight)
        );
    }
    

    function scrollHandler() {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        containers.forEach(container => {
            if (isInViewport(container) && !container.classList.contains('animated')) {
                const title = container.querySelector('.title');
                const desc = container.querySelector('.all-d');
    
                animateOnScroll(title, tl);
                animateDescriptionOnScroll(desc, tl);
    
                if (hasImage(container)) {
                    const image = container.querySelector('img');
                    animateOnScroll(image, tl);
                }
    
                container.classList.add('animated');
            }
        });
    }
    
    window.addEventListener('scroll', scrollHandler);
