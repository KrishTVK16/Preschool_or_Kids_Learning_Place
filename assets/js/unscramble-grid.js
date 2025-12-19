// ============================================
// GRID-BASED UNSCRAMBLE - COMPACT LAYOUT
// ============================================

class GridUnscramble {
  constructor() {
    this.sections = [];
    this.revealedCount = 0;
    this.activeSection = null;
    this.init();
  }

  init() {
    this.setupSections();
    this.updateProgress();
  }

  setupSections() {
    const sectionsData = [
      {
        id: 'mission',
        number: 1,
        correctWord: 'MISSION',
        scrambled: this.scrambleWord('MISSION'),
        wrongOptions: ['VISION', 'PASSION'],
        title: 'Our Mission',
        content: `
          <h3>Our Mission</h3>
          <p>At Bright Beginnings Preschool, our mission is to provide a safe, nurturing, and stimulating environment where children can grow, learn, and thrive. We believe that every child is unique and deserves individualized attention to reach their full potential.</p>
          <p>We are committed to fostering a love of learning through play-based education, creative exploration, and positive social interactions. Our goal is to prepare children not just for school, but for life.</p>
        `
      },
      {
        id: 'vision',
        number: 2,
        correctWord: 'VISION',
        scrambled: this.scrambleWord('VISION'),
        wrongOptions: ['MISSION', 'PASSION'],
        title: 'Our Vision',
        content: `
          <h3>Our Vision</h3>
          <p>We envision a world where every child has access to high-quality early childhood education that ignites their curiosity, builds their confidence, and sets them on a path to lifelong success.</p>
          <p>Through our innovative programs and dedicated staff, we strive to be a leader in early childhood education, continuously improving and adapting to meet the evolving needs of children and families.</p>
        `
      },
      {
        id: 'values',
        number: 3,
        correctWord: 'VALUES',
        scrambled: this.scrambleWord('VALUES'),
        wrongOptions: ['VIRTUES', 'PRINCIPLES'],
        title: 'Our Core Values',
        content: `
          <h3>Our Core Values</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: var(--spacing-xs); margin-top: var(--spacing-sm);">
            <div class="card text-center" style="padding: var(--spacing-xs);">
              <div style="font-size: 1.2rem; margin-bottom: var(--spacing-xs);">💝</div>
              <h4 style="font-size: 0.9rem; margin-bottom: var(--spacing-xs);">Love & Care</h4>
              <p style="font-size: 0.8rem;">Unconditional love and respect.</p>
            </div>
            <div class="card text-center" style="padding: var(--spacing-xs);">
              <div style="font-size: 1.2rem; margin-bottom: var(--spacing-xs);">🎓</div>
              <h4 style="font-size: 0.9rem; margin-bottom: var(--spacing-xs);">Excellence</h4>
              <p style="font-size: 0.8rem;">Highest standards in education.</p>
            </div>
            <div class="card text-center" style="padding: var(--spacing-xs);">
              <div style="font-size: 1.2rem; margin-bottom: var(--spacing-xs);">🤝</div>
              <h4 style="font-size: 0.9rem; margin-bottom: var(--spacing-xs);">Partnership</h4>
              <p style="font-size: 0.8rem;">Working with families.</p>
            </div>
            <div class="card text-center" style="padding: var(--spacing-xs);">
              <div style="font-size: 1.2rem; margin-bottom: var(--spacing-xs);">🌟</div>
              <h4 style="font-size: 0.9rem; margin-bottom: var(--spacing-xs);">Innovation</h4>
              <p style="font-size: 0.8rem;">Evolving with research.</p>
            </div>
          </div>
        `
      },
      {
        id: 'journey',
        number: 4,
        correctWord: 'JOURNEY',
        scrambled: this.scrambleWord('JOURNEY'),
        wrongOptions: ['HISTORY', 'STORY'],
        title: 'Our Journey',
        content: `
          <h3>Our Journey</h3>
          <p style="margin-bottom: var(--spacing-sm); font-size: 0.9rem;">From humble beginnings to a trusted name in early childhood education.</p>
          <div style="margin-top: var(--spacing-sm);">
            <div style="margin-bottom: var(--spacing-xs); padding: var(--spacing-xs); background: var(--bg-secondary); border-radius: var(--radius-sm); border-left: 3px solid var(--sky-blue);">
              <strong style="color: var(--sky-blue); font-size: 0.85rem;">2008</strong> - Bright Beginnings opened.
            </div>
            <div style="margin-bottom: var(--spacing-xs); padding: var(--spacing-xs); background: var(--bg-secondary); border-radius: var(--radius-sm); border-left: 3px solid var(--mint-green);">
              <strong style="color: var(--mint-green); font-size: 0.85rem;">2012</strong> - Expanded facilities.
            </div>
            <div style="margin-bottom: var(--spacing-xs); padding: var(--spacing-xs); background: var(--bg-secondary); border-radius: var(--radius-sm); border-left: 3px solid var(--sunshine-yellow);">
              <strong style="color: var(--sunshine-yellow); font-size: 0.85rem;">2016</strong> - NAEYC accreditation.
            </div>
            <div style="padding: var(--spacing-xs); background: var(--bg-secondary); border-radius: var(--radius-sm); border-left: 3px solid var(--lavender-purple);">
              <strong style="color: var(--lavender-purple); font-size: 0.85rem;">2025</strong> - Serving hundreds of families.
            </div>
          </div>
        `
      }
    ];

    const container = document.querySelector('.unscramble-grid-container');
    if (!container) return;

    const gamesGrid = document.createElement('div');
    gamesGrid.className = 'games-grid';
    gamesGrid.id = 'games-grid';

    sectionsData.forEach((data) => {
      const section = this.createGameCard(data);
      this.sections.push(section);
      gamesGrid.appendChild(section.element);
    });

    container.appendChild(gamesGrid);
  }

  scrambleWord(word) {
    const letters = word.split('');
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters.join(' ');
  }

  createGameCard(data) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.id = `game-${data.id}`;
    card.dataset.gameId = data.id;

    // Compact header
    const header = document.createElement('div');
    header.className = 'game-header-compact';
    header.innerHTML = `
      <div class="game-number">Game ${data.number}</div>
      <div class="game-title-compact">${data.title}</div>
    `;

    // Expanded content
    const content = document.createElement('div');
    content.className = 'game-content';

    // Scrambled letters
    const scrambledDisplay = document.createElement('div');
    scrambledDisplay.className = 'scrambled-display';
    scrambledDisplay.innerHTML = `
      <div class="scrambled-letters">${data.scrambled}</div>
    `;

    // Guess options
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'guess-options';
    
    const allOptions = [data.correctWord, ...data.wrongOptions];
    for (let i = allOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allOptions[i], allOptions[j]] = [allOptions[j], allOptions[i]];
    }

    allOptions.forEach(option => {
      const optionEl = document.createElement('div');
      optionEl.className = 'guess-option';
      optionEl.textContent = option;
      optionEl.dataset.word = option;
      optionEl.dataset.isCorrect = (option === data.correctWord).toString();
      optionEl.addEventListener('click', (e) => {
        e.stopPropagation();
        this.selectOption(optionEl, data.id);
      });
      optionsContainer.appendChild(optionEl);
    });

    // Details section
    const details = document.createElement('div');
    details.className = 'section-details';
    details.innerHTML = data.content;

    content.appendChild(scrambledDisplay);
    content.appendChild(optionsContainer);
    content.appendChild(details);

    card.appendChild(header);
    card.appendChild(content);

    // Click to expand
    header.addEventListener('click', () => {
      if (!card.classList.contains('revealed')) {
        this.activateCard(card, data.id);
      }
    });

    const cardObj = {
      element: card,
      id: data.id,
      number: data.number,
      correctWord: data.correctWord,
      isRevealed: false
    };

    return cardObj;
  }

  activateCard(card, gameId) {
    // Remove active from all cards
    document.querySelectorAll('.game-card').forEach(c => {
      c.classList.remove('active');
    });

    // Add active to clicked card
    card.classList.add('active');
    this.activeSection = gameId;

    // Reorganize grid - move active to top, others below
    this.reorganizeGrid();
  }

  reorganizeGrid() {
    const grid = document.getElementById('games-grid');
    if (!grid) return;
    
    // Get all game cards that are not revealed (not moved to completed grid)
    const allCards = Array.from(grid.querySelectorAll('.game-card'));
    const cards = allCards.filter(card => !card.classList.contains('revealed'));
    
    // Find active card (only if not revealed)
    const activeCard = cards.find(card => card.classList.contains('active'));
    const otherCards = cards.filter(card => !card.classList.contains('active'));

    // If we have an active card, reorganize to show it full width
    if (activeCard && !activeCard.classList.contains('revealed')) {
      // Remove all cards temporarily
      const tempCards = [...cards];
      tempCards.forEach(card => card.remove());
      
      // Add active card first (full width)
      grid.appendChild(activeCard);
      
      // Add remaining uncompleted games in a row
      if (otherCards.length > 0) {
        otherCards.forEach(card => grid.appendChild(card));
      }
    } else if (cards.length > 0) {
      // No active card, just ensure proper grid layout
      const tempCards = [...cards];
      tempCards.forEach(card => card.remove());
      cards.forEach(card => grid.appendChild(card));
    }
  }

  selectOption(optionEl, gameId) {
    const section = this.sections.find(s => s.id === gameId);
    if (!section || section.isRevealed) return;

    const isCorrect = optionEl.dataset.isCorrect === 'true';
    const card = document.getElementById(`game-${gameId}`);
    const allOptions = card.querySelectorAll('.guess-option');

    // Disable all options
    allOptions.forEach(opt => {
      opt.classList.add('disabled');
      if (opt.dataset.isCorrect === 'true') {
        opt.classList.add('correct');
      } else {
        opt.classList.add('wrong');
      }
    });

    if (isCorrect) {
      this.revealSection(section);
    }
  }

  revealSection(section) {
    if (section.isRevealed) return;

    section.isRevealed = true;
    this.revealedCount++;

    const card = document.getElementById(`game-${section.id}`);
    card.classList.add('revealed');
    card.classList.remove('active');

    const details = card.querySelector('.section-details');
    details.classList.add('revealed');

    // Add success badge
    const scrambledDisplay = card.querySelector('.scrambled-display');
    const successBadge = document.createElement('div');
    successBadge.className = 'success-badge';
    successBadge.textContent = '✓ Correct!';
    scrambledDisplay.insertBefore(successBadge, scrambledDisplay.firstChild);

    // Move completed game to separate details grid
    this.moveToCompletedGrid(card);

    // Remove from selection grid and reorganize
    this.reorganizeGrid();

    this.updateProgress();

    // Check completion
    if (this.revealedCount === this.sections.length) {
      setTimeout(() => {
        alert('🎉 Congratulations! You\'ve revealed all sections about Bright Beginnings Preschool!');
      }, 500);
    }
  }

  moveToCompletedGrid(card) {
    const completedGrid = document.getElementById('completed-games-grid');
    if (!completedGrid) return;

    // Create a wrapper for the completed game details
    const completedCardWrapper = document.createElement('div');
    completedCardWrapper.className = 'completed-game-details';
    
    // Clone the card content but only show the details section
    const detailsCard = card.cloneNode(true);
    detailsCard.classList.remove('active');
    detailsCard.id = `completed-${detailsCard.id}`;
    
    // Hide the header
    const header = detailsCard.querySelector('.game-header-compact');
    if (header) header.style.display = 'none';
    
    // Make sure game-content is visible
    const gameContent = detailsCard.querySelector('.game-content');
    if (gameContent) {
      gameContent.style.display = 'block';
    }
    
    // Hide the scrambled display and options, only show details
    const scrambledDisplay = detailsCard.querySelector('.scrambled-display');
    const optionsContainer = detailsCard.querySelector('.guess-options');
    
    if (scrambledDisplay) scrambledDisplay.style.display = 'none';
    if (optionsContainer) optionsContainer.style.display = 'none';
    
    // Show only the details section
    const details = detailsCard.querySelector('.section-details');
    if (details) {
      details.style.display = 'block';
      details.classList.add('revealed');
    }
    
    // Remove click handlers from cloned card
    const clonedHeader = detailsCard.querySelector('.game-header-compact');
    if (clonedHeader) {
      clonedHeader.style.cursor = 'default';
      clonedHeader.onclick = null;
    }
    
    completedCardWrapper.appendChild(detailsCard);
    completedGrid.appendChild(completedCardWrapper);
    
    // Remove the original card from the games grid
    const gamesGrid = document.getElementById('games-grid');
    if (gamesGrid && card.parentNode === gamesGrid) {
      card.remove();
    }
  }

  updateProgress() {
    const total = this.sections.length;
    const progressText = document.querySelector('.unscramble-progress');
    if (progressText) {
      progressText.textContent = `Progress: ${this.revealedCount} / ${total} sections revealed`;
    }
  }
}

// Initialize
let gridUnscramble;
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.unscramble-grid-container')) {
    gridUnscramble = new GridUnscramble();
  }
});

