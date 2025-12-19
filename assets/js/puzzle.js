// ============================================
// PUZZLE PIECE INTERACTIVE SYSTEM
// ============================================

class PuzzleGame {
  constructor() {
    this.pieces = [];
    this.placedPieces = new Map();
    this.startTime = null;
    this.timerInterval = null;
    this.totalPieces = 9;
    this.correctPlacements = 0;
    this.init();
  }

  init() {
    this.setupPieces();
    this.setupBoard();
    this.setupEventListeners();
    this.startTimer();
  }

  setupPieces() {
    const piecesData = [
      {
        id: 1,
        title: 'Our Mission',
        text: 'Provide a safe, nurturing environment where children can grow, learn, and thrive.',
        icon: '💝',
        correctSlot: 1,
        color: 'sky'
      },
      {
        id: 2,
        title: 'Our Vision',
        text: 'A world where every child has access to high-quality early childhood education.',
        icon: '🌟',
        correctSlot: 2,
        color: 'mint'
      },
      {
        id: 3,
        title: 'Love & Care',
        text: 'Every child is treated with unconditional love and respect.',
        icon: '💝',
        correctSlot: 3,
        color: 'sky'
      },
      {
        id: 4,
        title: 'Excellence',
        text: 'We maintain the highest standards in education, safety, and care.',
        icon: '🎓',
        correctSlot: 4,
        color: 'yellow'
      },
      {
        id: 5,
        title: 'Partnership',
        text: 'We work closely with families to ensure the best outcomes.',
        icon: '🤝',
        correctSlot: 5,
        color: 'mint'
      },
      {
        id: 6,
        title: 'Innovation',
        text: 'We continuously evolve our programs with latest research.',
        icon: '🌟',
        correctSlot: 6,
        color: 'lavender'
      },
      {
        id: 7,
        title: '2008 - Beginning',
        text: 'Bright Beginnings opened with a vision for quality education.',
        icon: '📅',
        correctSlot: 7,
        color: 'sky'
      },
      {
        id: 8,
        title: '2016 - Accreditation',
        text: 'Received accreditation from NAEYC.',
        icon: '🏆',
        correctSlot: 8,
        color: 'yellow'
      },
      {
        id: 9,
        title: '2025 - Today',
        text: 'Serving hundreds of families with innovative programs.',
        icon: '✨',
        correctSlot: 9,
        color: 'lavender'
      }
    ];

    const container = document.querySelector('.puzzle-pieces-container');
    if (!container) return;

    piecesData.forEach((data, index) => {
      const piece = this.createPiece(data);
      this.pieces.push(piece);
      container.appendChild(piece.element);
    });

    // Shuffle pieces
    this.shufflePieces();
  }

  createPiece(data) {
    const piece = document.createElement('div');
    piece.className = 'puzzle-piece';
    piece.dataset.pieceId = data.id;
    piece.dataset.correctSlot = data.correctSlot;
    piece.draggable = true;

    piece.innerHTML = `
      <div class="puzzle-piece-controls">
        <button class="puzzle-control-btn" data-action="rotate" title="Rotate">↻</button>
        <button class="puzzle-control-btn" data-action="flip" title="Flip">⇄</button>
      </div>
      <div class="puzzle-piece-content">
        <div class="puzzle-piece-icon">${data.icon}</div>
        <div class="puzzle-piece-title">${data.title}</div>
        <div class="puzzle-piece-text">${data.text}</div>
      </div>
    `;

    const pieceObj = {
      element: piece,
      id: data.id,
      correctSlot: data.correctSlot,
      rotation: 0,
      flipped: false
    };

    // Drag and drop
    piece.addEventListener('dragstart', (e) => this.handleDragStart(e, pieceObj));
    piece.addEventListener('dragend', (e) => this.handleDragEnd(e, pieceObj));

    // Controls
    const rotateBtn = piece.querySelector('[data-action="rotate"]');
    const flipBtn = piece.querySelector('[data-action="flip"]');
    
    rotateBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.rotatePiece(pieceObj);
    });

    flipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.flipPiece(pieceObj);
    });

    return pieceObj;
  }

  shufflePieces() {
    const container = document.querySelector('.puzzle-pieces-container');
    const pieces = Array.from(container.children);
    
    // Randomize order
    for (let i = pieces.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      container.appendChild(pieces[j]);
    }

    // Random rotations
    this.pieces.forEach(piece => {
      const rotations = [0, 90, 180, 270];
      const randomRotation = rotations[Math.floor(Math.random() * rotations.length)];
      if (randomRotation > 0) {
        piece.rotation = randomRotation;
        this.applyRotation(piece);
      }
    });
  }

  setupBoard() {
    const board = document.querySelector('.puzzle-board');
    if (!board) return;

    for (let i = 1; i <= 9; i++) {
      const slot = document.createElement('div');
      slot.className = 'puzzle-slot';
      slot.dataset.slotId = i;
      slot.addEventListener('dragover', (e) => this.handleDragOver(e));
      slot.addEventListener('drop', (e) => this.handleDrop(e, i));
      slot.addEventListener('dragenter', (e) => this.handleDragEnter(e));
      slot.addEventListener('dragleave', (e) => this.handleDragLeave(e));
      board.appendChild(slot);
    }
  }

  setupEventListeners() {
    // Prevent default drag behavior on images
    document.addEventListener('dragstart', (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    });
  }

  handleDragStart(e, piece) {
    piece.element.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', piece.id.toString());
  }

  handleDragEnd(e, piece) {
    piece.element.classList.remove('dragging');
  }

  handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  handleDragEnter(e) {
    e.preventDefault();
    const slot = e.currentTarget;
    if (!slot.classList.contains('occupied')) {
      slot.style.background = 'rgba(77, 166, 255, 0.2)';
    }
  }

  handleDragLeave(e) {
    const slot = e.currentTarget;
    if (!slot.classList.contains('occupied')) {
      slot.style.background = 'rgba(255, 255, 255, 0.1)';
    }
  }

  handleDrop(e, slotId) {
    e.preventDefault();
    const slot = e.currentTarget;
    slot.style.background = 'rgba(255, 255, 255, 0.1)';

    const pieceId = parseInt(e.dataTransfer.getData('text/plain'));
    const piece = this.pieces.find(p => p.id === pieceId);

    if (!piece) return;

    // Check if slot is already occupied
    if (slot.classList.contains('occupied')) {
      // Remove piece from old slot
      const oldSlotId = this.placedPieces.get(piece.id);
      if (oldSlotId) {
        const oldSlot = document.querySelector(`[data-slot-id="${oldSlotId}"]`);
        if (oldSlot) {
          oldSlot.classList.remove('occupied', 'correct');
          oldSlot.innerHTML = '';
        }
      }
    }

    // Place piece in new slot
    this.placePiece(piece, slotId, slot);
  }

  placePiece(piece, slotId, slotElement) {
    // Remove from old position
    const oldSlotId = this.placedPieces.get(piece.id);
    if (oldSlotId && oldSlotId !== slotId) {
      const oldSlot = document.querySelector(`[data-slot-id="${oldSlotId}"]`);
      if (oldSlot) {
        oldSlot.classList.remove('occupied', 'correct');
        oldSlot.innerHTML = '';
        this.correctPlacements--;
      }
    }

    // Place in new slot
    slotElement.classList.add('occupied');
    slotElement.innerHTML = '';
    
    const pieceClone = piece.element.cloneNode(true);
    pieceClone.classList.remove('dragging');
    pieceClone.classList.add('placed');
    pieceClone.draggable = false;
    slotElement.appendChild(pieceClone);

    this.placedPieces.set(piece.id, slotId);

    // Check if correct
    if (piece.correctSlot === slotId) {
      slotElement.classList.add('correct');
      this.correctPlacements++;
      this.updateProgress();
      this.checkCompletion();
    } else {
      slotElement.classList.remove('correct');
    }

    // Hide original piece
    piece.element.style.display = 'none';
  }

  rotatePiece(piece) {
    piece.rotation = (piece.rotation + 90) % 360;
    this.applyRotation(piece);
  }

  flipPiece(piece) {
    piece.flipped = !piece.flipped;
    this.applyFlip(piece);
  }

  applyRotation(piece) {
    piece.element.classList.remove('rotated-90', 'rotated-180', 'rotated-270');
    if (piece.rotation === 90) {
      piece.element.classList.add('rotated-90');
    } else if (piece.rotation === 180) {
      piece.element.classList.add('rotated-180');
    } else if (piece.rotation === 270) {
      piece.element.classList.add('rotated-270');
    }
  }

  applyFlip(piece) {
    if (piece.flipped) {
      piece.element.classList.add('flipped');
    } else {
      piece.element.classList.remove('flipped');
    }
  }

  updateProgress() {
    const progress = (this.correctPlacements / this.totalPieces) * 100;
    const progressFill = document.querySelector('.puzzle-progress-fill');
    if (progressFill) {
      progressFill.style.width = `${progress}%`;
    }

    const progressText = document.querySelector('.puzzle-progress');
    if (progressText) {
      progressText.textContent = `Progress: ${this.correctPlacements} / ${this.totalPieces} pieces placed correctly`;
    }
  }

  checkCompletion() {
    if (this.correctPlacements === this.totalPieces) {
      this.completePuzzle();
    }
  }

  completePuzzle() {
    this.stopTimer();
    const timeElapsed = this.getElapsedTime();
    
    const overlay = document.querySelector('.puzzle-overlay');
    const completion = document.querySelector('.puzzle-completion');
    const timeDisplay = document.querySelector('.puzzle-completion-time');

    if (overlay) overlay.classList.add('show');
    if (completion) completion.classList.add('show');
    if (timeDisplay) timeDisplay.textContent = `Completed in ${timeElapsed}`;

    // Confetti effect
    this.createConfetti();
  }

  startTimer() {
    this.startTime = Date.now();
    const timerElement = document.querySelector('.puzzle-timer');
    
    this.timerInterval = setInterval(() => {
      if (timerElement) {
        timerElement.textContent = this.getElapsedTime();
      }
    }, 100);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  getElapsedTime() {
    if (!this.startTime) return '00:00';
    
    const elapsed = Date.now() - this.startTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  createConfetti() {
    const colors = ['#4DA6FF', '#10B981', '#FBBF24', '#A78BFA'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.style.position = 'fixed';
      confetti.style.width = '10px';
      confetti.style.height = '10px';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.top = '-10px';
      confetti.style.borderRadius = '50%';
      confetti.style.pointerEvents = 'none';
      confetti.style.zIndex = '3000';
      
      document.body.appendChild(confetti);

      const animation = confetti.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
        { transform: `translateY(${window.innerHeight + 100}px) rotate(720deg)`, opacity: 0 }
      ], {
        duration: 3000 + Math.random() * 2000,
        easing: 'cubic-bezier(0.5, 0, 0.5, 1)'
      });

      animation.onfinish = () => confetti.remove();
    }
  }
}

// Initialize puzzle when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.puzzle-container')) {
    new PuzzleGame();
  }

  // Close completion modal
  const closeBtn = document.querySelector('.puzzle-completion-btn');
  const overlay = document.querySelector('.puzzle-overlay');
  const completion = document.querySelector('.puzzle-completion');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      if (overlay) overlay.classList.remove('show');
      if (completion) completion.classList.remove('show');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      overlay.classList.remove('show');
      if (completion) completion.classList.remove('show');
    });
  }
});

