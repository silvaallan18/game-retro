document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    const games = [
        {
            title: "Super Mario Bros",
            year: 1985,
            description: "O encanamento bigodudo que definiu uma geração de plataformas.",
            image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            title: "The Legend of Zelda",
            year: 1,
            description: "A aventura épica que criou o gênero de ação e aventura.",
            image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            title: "Sonic the Hedgehog",
            year: 1991,
            description: "O ouriço azul mais rápido do mundo que desafiou o domínio da Nintendo.",
            image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            title: "Street Fighter II",
            year: 1991,
            description: "O jogo de luta que popularizou o gênero nos arcades.",
            image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            title: "Final Fantasy VII",
            year: 1997,
            description: "O RPG que elevou a narrativa nos jogos para outro nível.",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            title: "Pokémon Red/Blue",
            year: 1996,
            description: "A franquia que conquistou o mundo com seus monstrinhos de bolso.",
            image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
    ];
    
    const gamesContainer = document.getElementById('games-container');
    
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        
        gameCard.innerHTML = `
            <div class="game-image" style="background-image: url('${game.image}')"></div>
            <div class="game-info">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <span class="game-year">${game.year}</span>
            </div>
        `;
        
        gamesContainer.appendChild(gameCard);
    });
    
    const newsletterForm = document.getElementById('newsletter-form');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        
        this.innerHTML = '<p class="success-message">Obrigado por assinar nossa newsletter!</p>';
        
        setTimeout(() => {
            this.innerHTML = `
                <input type="email" placeholder="Seu melhor e-mail" required>
                <button type="submit" class="btn">Assinar</button>
            `;
        }, 3000);
    });
    
    const pixelElements = document.querySelectorAll('.pixel-text, .game-card, .pixel-art');
    
    pixelElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.classList.add('pixel-effect');
        });
        
        el.addEventListener('mouseleave', function() {
            this.classList.remove('pixel-effect');
        });
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            }
        });
    });
});
