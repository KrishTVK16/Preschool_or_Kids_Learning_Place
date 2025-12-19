// ============================================
// SIMPLE UNSCRAMBLE - MULTIPLE CHOICE
// ============================================

class SimpleUnscramble {
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
        correctWord: 'VALUES',
        scrambled: this.scrambleWord('VALUES'),
        wrongOptions: ['VIRTUES', 'PRINCIPLES'],
        title: 'Our Core Values',
        content: `
          <h3>Our Core Values</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--spacing-sm); margin-top: var(--spacing-sm);">
            <div class="card text-center" style="padding: var(--spacing-sm);">
              <div style="font-size: 1.5rem; margin-bottom: var(--spacing-xs);">💝</div>
              <h4 style="font-size: 1rem; margin-bottom: var(--spacing-xs);">Love & Care</h4>
              <p style="font-size: 0.85rem;">Unconditional love and respect for every child.</p>
            </div>
            <div class="card text-center" style="padding: var(--spacing-sm);">
              <div style="font-size: 1.5rem; margin-bottom: var(--spacing-xs);">🎓</div>
              <h4 style="font-size: 1rem; margin-bottom: var(--spacing-xs);">Excellence</h4>
              <p style="font-size: 0.85rem;">Highest standards in education and care.</p>
            </div>
            <div class="card text-center" style="padding: var(--spacing-sm);">
              <div style="font-size: 1.5rem; margin-bottom: var(--spacing-xs);">🤝</div>
              <h4 style="font-size: 1rem; margin-bottom: var(--spacing-xs);">Partnership</h4>
              <p style="font-size: 0.85rem;">Working closely with families.</p>
            </div>
            <div class="card text-center" style="padding: var(--spacing-sm);">
              <div style="font-size: 1.5rem; margin-bottom: var(--spacing-xs);">🌟</div>
              <h4 style="font-size: 1rem; margin-bottom: var(--spacing-xs);">Innovation</h4>
              <p style="font-size: 0.85rem;">Evolving with latest research.</p>
            </div>
          </div>
        `
      },
      {
        id: 'journey',
        correctWord: 'JOURNEY',
        scrambled: this.scrambleWord('JOURNEY'),
        wrongOptions: ['HISTORY', 'STORY'],
        title: 'Our Journey',
        content: `
          <h3>Our Journey</h3>
          <p style="margin-bottom: var(--spacing-sm);">From humble beginnings to a trusted name in early childhood education.</p>
          <div style="margin-top: var(--spacing-sm);">
            <div style="margin-bottom: var(--spacing-xs); padding: var(--spacing-xs) var(--spacing-sm); background: var(--bg-secondary); border-radius: var(--radius-sm); border-left: 3px solid var(--sky-blue);">
              <strong style="color: var(--sky-blue); font-size: 0.9rem;">2008</strong> - Bright Beginnings opened with a vision for quality education.
            </div>
            <div style="margin-bottom: var(--spacing-xs); padding: var(--spacing-xs) var(--spacing-sm); background: var(--bg-secondary); border-radius: var(--radius-sm); border-left: 3px solid var(--mint-green);">
              <strong style="color: var(--mint-green); font-size: 0.9rem;">2012</strong> - Expanded facilities and programs.
            </div>
            <div style="margin-bottom: var(--spacing-xs); padding: var(--spacing-xs) var(--spacing-sm); background: var(--bg-secondary); border-radius: var(--radius-sm); border-left: 3px solid var(--sunshine-yellow);">
              <strong style="color: var(--sunshine-yellow); font-size: 0.9rem;">2016</strong> - Received NAEYC accreditation.
            </div>
            <div style="padding: var(--spacing-xs) var(--spacing-sm); background: var(--bg-secondary); border-radius: var(--radius-sm); border-left: 3px solid var(--lavender-purple);">
              <strong style="color: var(--lavender-purple); font-size: 0.9rem;">2025</strong> - Serving hundreds of families with excellence.
            </div>
          </div>
        `
      }
    ];

    const container = document.querySelector('.unscramble-simple-container');
    if (!container) return;

    sectionsData.forEach((data) => {
      const section = this.createSection(data);
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
    return letters.join(' ');
  }

  createSection(data) {
    const section = document.createElement('div');
    section.className = 'unscramble-section';
    section.id = `section-${data.id}`;

    // Scrambled letters display
    const scrambledDisplay = document.createElement('div');
    scrambledDisplay.className = 'scrambled-display';
    scrambledDisplay.innerHTML = `
      <div class="scrambled-letters">${data.scrambled}</div>
    `;

    // Guess options
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'guess-options';
    
    // Create 3 options (correct + 2 wrong)
    const allOptions = [data.correctWord, ...data.wrongOptions];
    // Shuffle options
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
      optionEl.addEventListener('click', () => this.selectOption(optionEl, data.id));
      optionsContainer.appendChild(optionEl);
    });

    // Content area
    const contentArea = document.createElement('div');
    contentArea.className = 'section-content';
    contentArea.innerHTML = data.content;

    section.appendChild(scrambledDisplay);
    section.appendChild(optionsContainer);
    section.appendChild(contentArea);

    const sectionObj = {
      element: section,
      id: data.id,
      correctWord: data.correctWord,
      isRevealed: false
    };

    return sectionObj;
  }

  selectOption(optionEl, sectionId) {
    const section = this.sections.find(s => s.id === sectionId);
    if (!section || section.isRevealed) return;

    const isCorrect = optionEl.dataset.isCorrect === 'true';
    const allOptions = optionEl.parentElement.querySelectorAll('.guess-option');

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

    const sectionEl = document.getElementById(`section-${section.id}`);
    sectionEl.classList.add('revealed');

    const contentArea = sectionEl.querySelector('.section-content');
    contentArea.classList.add('revealed');

    // Add success badge
    const scrambledDisplay = sectionEl.querySelector('.scrambled-display');
    const successBadge = document.createElement('div');
    successBadge.className = 'success-badge';
    successBadge.textContent = '✓ Correct!';
    scrambledDisplay.insertBefore(successBadge, scrambledDisplay.firstChild);

    this.updateProgress();

    // Check if all sections revealed
    if (this.revealedCount === this.sections.length) {
      setTimeout(() => {
        alert('🎉 Congratulations! You\'ve revealed all sections about Bright Beginnings Preschool!');
      }, 500);
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

// Initialize game
let simpleUnscramble;
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.unscramble-simple-container')) {
    simpleUnscramble = new SimpleUnscramble();
  }
});

