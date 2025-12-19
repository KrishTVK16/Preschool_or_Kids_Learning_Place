// ============================================
// UNSCRAMBLE LETTERS INTERACTIVE SYSTEM
// ============================================

class UnscrambleGame {
  constructor() {
    this.sections = [];
    this.revealedCount = 0;
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
        correctWord: 'MISSION',
        scrambled: this.scrambleWord('MISSION'),
        title: 'Our Mission',
        content: `
          <h3>Our Mission</h3>
          <p>At Bright Beginnings Preschool, our mission is to provide a safe, nurturing, and stimulating environment where children can grow, learn, and thrive. We believe that every child is unique and deserves individualized attention to reach their full potential.</p>
          <p>We are committed to fostering a love of learning through play-based education, creative exploration, and positive social interactions. Our goal is to prepare children not just for school, but for life.</p>
        `
      },
      {
        id: 'vision',
        correctWord: 'VISION',
        scrambled: this.scrambleWord('VISION'),
        title: 'Our Vision',
        content: `
          <h3>Our Vision</h3>
          <p>We envision a world where every child has access to high-quality early childhood education that ignites their curiosity, builds their confidence, and sets them on a path to lifelong success.</p>
          <p>Through our innovative programs and dedicated staff, we strive to be a leader in early childhood education, continuously improving and adapting to meet the evolving needs of children and families.</p>
        `
      },
      {
        id: 'values',
        correctWord: 'VALUES',
        scrambled: this.scrambleWord('VALUES'),
        title: 'Our Core Values',
        content: `
          <h3>Our Core Values</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--spacing-md); margin-top: var(--spacing-md);">
            <div class="card text-center">
              <div style="font-size: 2rem; margin-bottom: var(--spacing-sm);">💝</div>
              <h4>Love & Care</h4>
              <p style="font-size: 0.9rem;">Every child is treated with unconditional love and respect.</p>
            </div>
            <div class="card text-center">
              <div style="font-size: 2rem; margin-bottom: var(--spacing-sm);">🎓</div>
              <h4>Excellence</h4>
              <p style="font-size: 0.9rem;">We maintain the highest standards in education and care.</p>
            </div>
            <div class="card text-center">
              <div style="font-size: 2rem; margin-bottom: var(--spacing-sm);">🤝</div>
              <h4>Partnership</h4>
              <p style="font-size: 0.9rem;">We work closely with families for best outcomes.</p>
            </div>
            <div class="card text-center">
              <div style="font-size: 2rem; margin-bottom: var(--spacing-sm);">🌟</div>
              <h4>Innovation</h4>
              <p style="font-size: 0.9rem;">We continuously evolve with latest research.</p>
            </div>
          </div>
        `
      },
      {
        id: 'journey',
        correctWord: 'JOURNEY',
        scrambled: this.scrambleWord('JOURNEY'),
        title: 'Our Journey',
        content: `
          <h3>Our Journey</h3>
          <p>From humble beginnings to a trusted name in early childhood education.</p>
          <div style="margin-top: var(--spacing-lg);">
            <div style="margin-bottom: var(--spacing-md); padding: var(--spacing-md); background: var(--bg-secondary); border-radius: var(--radius-md); border-left: 4px solid var(--sky-blue);">
              <h4 style="color: var(--sky-blue); margin-bottom: var(--spacing-xs);">2008 - The Beginning</h4>
              <p>Bright Beginnings Preschool opened its doors with a vision to provide quality early childhood education.</p>
            </div>
            <div style="margin-bottom: var(--spacing-md); padding: var(--spacing-md); background: var(--bg-secondary); border-radius: var(--radius-md); border-left: 4px solid var(--mint-green);">
              <h4 style="color: var(--mint-green); margin-bottom: var(--spacing-xs);">2012 - Expansion</h4>
              <p>We expanded our facilities and programs to accommodate growing demand.</p>
            </div>
            <div style="margin-bottom: var(--spacing-md); padding: var(--spacing-md); background: var(--bg-secondary); border-radius: var(--radius-md); border-left: 4px solid var(--sunshine-yellow);">
              <h4 style="color: var(--sunshine-yellow); margin-bottom: var(--spacing-xs);">2016 - Accreditation</h4>
              <p>Received accreditation from the National Association for the Education of Young Children (NAEYC).</p>
            </div>
            <div style="padding: var(--spacing-md); background: var(--bg-secondary); border-radius: var(--radius-md); border-left: 4px solid var(--lavender-purple);">
              <h4 style="color: var(--lavender-purple); margin-bottom: var(--spacing-xs);">2025 - Today</h4>
              <p>Continuing to serve hundreds of families with innovative programs and experienced staff.</p>
            </div>
          </div>
        `
      }
    ];

    const container = document.querySelector('.unscramble-container');
    if (!container) return;

    sectionsData.forEach((data, index) => {
      const section = this.createSection(data, index);
      this.sections.push(section);
      container.appendChild(section.element);
    });
  }

  scrambleWord(word) {
    const letters = word.split('');
    // Fisher-Yates shuffle
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters;
  }

  createSection(data, index) {
    const section = document.createElement('div');
    section.className = 'unscramble-section';
    section.id = `section-${data.id}`;

    const scrambledContainer = document.createElement('div');
    scrambledContainer.className = 'scrambled-letters-container';
    scrambledContainer.id = `scrambled-${data.id}`;

    const answerContainer = document.createElement('div');
    answerContainer.className = 'answer-container';
    answerContainer.id = `answer-${data.id}`;

    // Create answer slots
    for (let i = 0; i < data.correctWord.length; i++) {
      const slot = document.createElement('div');
      slot.className = 'answer-slot';
      slot.dataset.index = i;
      answerContainer.appendChild(slot);
    }

    // Create scrambled letters
    data.scrambled.forEach((letter, i) => {
      const letterEl = document.createElement('div');
      letterEl.className = 'scrambled-letter';
      letterEl.textContent = letter;
      letterEl.dataset.letter = letter;
      letterEl.dataset.originalIndex = i;
      letterEl.addEventListener('click', () => this.selectLetter(letterEl, data.id));
      scrambledContainer.appendChild(letterEl);
    });

    // Create content area
    const contentArea = document.createElement('div');
    contentArea.className = 'section-content';
    contentArea.innerHTML = data.content;

    // Create buttons
    const actions = document.createElement('div');
    actions.className = 'unscramble-actions';
    actions.innerHTML = `
      <button class="unscramble-btn btn-check" onclick="unscrambleGame.checkAnswer('${data.id}')">Check Answer</button>
      <button class="unscramble-btn btn-reset" onclick="unscrambleGame.resetSection('${data.id}')">Reset</button>
      <button class="unscramble-btn btn-hint" onclick="unscrambleGame.showHint('${data.id}')">Hint</button>
    `;

    // Success message
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.id = `success-${data.id}`;
    successMsg.textContent = `🎉 Correct! "${data.correctWord}" is right!`;

    section.appendChild(scrambledContainer);
    section.appendChild(answerContainer);
    section.appendChild(actions);
    section.appendChild(successMsg);
    section.appendChild(contentArea);

    const sectionObj = {
      element: section,
      id: data.id,
      correctWord: data.correctWord,
      scrambled: data.scrambled,
      selectedLetters: [],
      answerSlots: Array(data.correctWord.length).fill(null),
      isRevealed: false
    };

    return sectionObj;
  }

  selectLetter(letterEl, sectionId) {
    if (letterEl.classList.contains('used')) return;

    const section = this.sections.find(s => s.id === sectionId);
    if (!section) return;

    // Find first empty slot
    const emptySlotIndex = section.answerSlots.findIndex(slot => slot === null);
    if (emptySlotIndex === -1) return; // All slots filled

    // Add to answer
    section.answerSlots[emptySlotIndex] = letterEl.dataset.letter;
    section.selectedLetters.push(letterEl);

    // Update UI
    const answerContainer = document.querySelector(`#answer-${sectionId}`);
    const slot = answerContainer.children[emptySlotIndex];
    slot.textContent = letterEl.dataset.letter;
    slot.classList.add('filled');

    letterEl.classList.add('used');
    letterEl.classList.remove('selected');
  }

  checkAnswer(sectionId) {
    const section = this.sections.find(s => s.id === sectionId);
    if (!section) return;

    const userAnswer = section.answerSlots.join('');
    const isCorrect = userAnswer === section.correctWord;

    if (isCorrect) {
      this.revealSection(section);
    } else {
      this.showError(sectionId);
    }
  }

  revealSection(section) {
    if (section.isRevealed) return;

    section.isRevealed = true;
    this.revealedCount++;

    const sectionEl = document.getElementById(`section-${section.id}`);
    sectionEl.classList.add('revealed');

    const contentArea = sectionEl.querySelector('.section-content');
    contentArea.classList.add('revealed');

    const successMsg = document.getElementById(`success-${section.id}`);
    successMsg.classList.add('show');

    // Animate answer slots
    const answerContainer = document.querySelector(`#answer-${section.id}`);
    Array.from(answerContainer.children).forEach(slot => {
      slot.classList.add('correct');
    });

    this.updateProgress();

    // Check if all sections revealed
    if (this.revealedCount === this.sections.length) {
      this.showCompletion();
    }
  }

  showError(sectionId) {
    const answerContainer = document.querySelector(`#answer-${sectionId}`);
    Array.from(answerContainer.children).forEach(slot => {
      slot.style.animation = 'shake 0.5s ease';
    });

    setTimeout(() => {
      Array.from(answerContainer.children).forEach(slot => {
        slot.style.animation = '';
      });
    }, 500);
  }

  resetSection(sectionId) {
    const section = this.sections.find(s => s.id === sectionId);
    if (!section) return;

    section.answerSlots = Array(section.correctWord.length).fill(null);
    section.selectedLetters = [];

    // Clear answer slots
    const answerContainer = document.querySelector(`#answer-${sectionId}`);
    Array.from(answerContainer.children).forEach(slot => {
      slot.textContent = '';
      slot.classList.remove('filled', 'correct');
    });

    // Reset scrambled letters
    const scrambledContainer = document.querySelector(`#scrambled-${sectionId}`);
    Array.from(scrambledContainer.children).forEach(letter => {
      letter.classList.remove('used', 'selected');
    });
  }

  showHint(sectionId) {
    const section = this.sections.find(s => s.id === sectionId);
    if (!section) return;

    // Show first letter
    const firstLetter = section.correctWord[0];
    const firstSlot = document.querySelector(`#answer-${sectionId} .answer-slot[data-index="0"]`);
    
    if (firstSlot && !firstSlot.textContent) {
      // Find and use the first letter from scrambled
      const scrambledContainer = document.querySelector(`#scrambled-${sectionId}`);
      const letterEl = Array.from(scrambledContainer.children).find(
        el => el.dataset.letter === firstLetter && !el.classList.contains('used')
      );
      
      if (letterEl) {
        this.selectLetter(letterEl, sectionId);
      }
    }
  }

  updateProgress() {
    const total = this.sections.length;
    const progress = (this.revealedCount / total) * 100;

    const progressBar = document.querySelector('.progress-bar-fill');
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    const progressText = document.querySelector('.progress-text');
    if (progressText) {
      progressText.textContent = `Progress: ${this.revealedCount} / ${total} sections revealed`;
    }
  }

  showCompletion() {
    setTimeout(() => {
      alert('🎉 Congratulations! You\'ve revealed all sections about Bright Beginnings Preschool!');
    }, 500);
  }
}

// Initialize game
let unscrambleGame;
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.unscramble-container')) {
    unscrambleGame = new UnscrambleGame();
  }
});

// Add shake animation
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
  }
`;
document.head.appendChild(style);

