let header= document.getElementById('header');
let option = document.querySelectorAll('.menu-option');        
        window.addEventListener('scroll', () => {           
            var scroll= window.scrollY;
            header.style.opacity=0.8;              
            option.forEach(x => {
            x.style.color = 'white';            
        });
            if (scroll==0) {                    
                header.style.opacity=1;
                option.forEach(x => {
                x.style.color = '#6ee2f5';
            });
        };
            
        });
