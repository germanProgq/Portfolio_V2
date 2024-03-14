let works = document.querySelectorAll('.work');

if (!window.mobileCheck()) {
    document.addEventListener('DOMContentLoaded', function () {
        works.forEach(x => {
            let worktext = x.querySelector('.work-desc');
            let workimg = x.querySelector('.work-image');
            let learnMore = x.querySelector('.learn-more');
            let timeoutId;

            x.onmouseenter = () => {
                clearTimeout(timeoutId);
                x.classList.add('work-selected');
                
                let contentHeight = worktext.offsetHeight + workimg.offsetHeight + 140;
                x.style.paddingBottom = `${contentHeight}px`;
              

                learnMore.style.opacity = '1';
                learnMore.style.display = 'block';
                setTimeout(() => {
                    learnMore.classList.add('filled');
                }, 390);
                worktext.classList.add('show');
                workimg.classList.add('show');
            };

            x.onmouseleave = () => {
                timeoutId = setTimeout(() => {
                    x.classList.remove('work-selected');
                    x.style.paddingBottom = '0';
                    worktext.classList.remove('show');
                    workimg.classList.remove('show');
                    learnMore.style.opacity = '0';
                    learnMore.style.display = 'none';
                    learnMore.classList.remove('filled');
                }, 200);
            };

            document.addEventListener('mousemove', function (e) {
                const mouseX = e.clientX;
                const mouseY = e.clientY;

                setTimeout(() => {
                    learnMore.style.left = mouseX - learnMore.offsetWidth / 2 + 'px';
                    learnMore.style.top = mouseY - learnMore.offsetHeight / 2 + 'px';
                }, 110);
            });

            document.addEventListener('click', function (e) {
                const mouseX = e.clientX;
                const mouseY = e.clientY;

                const learnMoreRect = learnMore.getBoundingClientRect();
                const selection = window.getSelection().toString();

                if (selection === '') {
                    if (
                        mouseX >= learnMoreRect.left &&
                        mouseX <= learnMoreRect.right &&
                        mouseY >= learnMoreRect.top &&
                        mouseY <= learnMoreRect.bottom
                    ) {
                        learnMore.click();
                    }
                }
            });
        });
    });
}
