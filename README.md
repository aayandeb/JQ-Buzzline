# JQ-Buzzline

A digital buzzer system designed for Josephite Quizzing competitions. This web-based application provides an interactive buzzer interface for quiz competitions with queue management, dark mode, and various control features.

## Features

- **Multi-Team Support**: Supports up to 14 teams with numbered buzzers (1-10, 11-14)
- **Queue Management**: Automatically tracks the order in which teams buzz in
- **Keyboard Controls**: Full keyboard support for quick operation
- **Dark Mode**: Toggle between light and dark themes
- **Idle Mode**: Special mode for managing team participation
- **Audio Feedback**: Sound effects when buzzers are pressed
- **Disqualification System**: Track disqualified teams
- **Reset Functionality**: Quick reset of the entire queue
- **Responsive Design**: Works on various screen sizes

## File Structure

```
JQ-Buzzline/
├── index.html          # Main HTML structure
├── style.css           # All styling and visual design
├── script.js           # JavaScript functionality and logic
├── README.md           # Project documentation
└── buzzlineworkingprototype2.html  # Original single-file version
```

## Setup & Usage

1. **Download/Clone** the repository
2. **Open** `index.html` in any modern web browser
3. **Start quizzing!** Teams can buzz in using mouse clicks or keyboard shortcuts

### Controls

#### Keyboard Shortcuts
- **1-9, 0**: Buzz for teams 1-10
- **A, S, D, F**: Buzz for teams 11-14

#### Mouse Controls
- Click any numbered buzzer to register that team
- Use the control buttons for various functions:
  - **Reset Queue**: Clear all buzzed teams
  - **Dark Mode**: Toggle dark/light theme
  - **Idle Mode**: Enable/disable idle mode functionality
  - **Rock Mode**: Easter egg feature

## How It Works

1. **Buzzing In**: Teams buzz in by clicking their number or using keyboard shortcuts
2. **Queue System**: The first team to buzz appears first in the queue
3. **Visual Feedback**: Buzzed teams change appearance and are disabled until reset
4. **Audio Cues**: Each buzz triggers a sound effect
5. **Queue Display**: Shows the order teams buzzed in
6. **Reset**: Clears the queue and re-enables all buzzers

## Special Modes

### Dark Mode
- Changes the entire interface to a dark theme
- Inverts the logo and adjusts all colors
- Persistent until toggled off

### Idle Mode
- When enabled, teams that buzz while already in queue get disqualified
- Useful for managing rule violations
- Shows disqualified teams separately

## Technical Details

- **Frontend**: Pure HTML, CSS, and JavaScript
- **No Dependencies**: Runs entirely in the browser
- **Font**: Uses Google Fonts (Epilogue)
- **Audio**: Supports MP3 buzzer sound effects
- **Browser Compatibility**: Works in all modern browsers

## Author

**Aayan Pratim Deb**  
Giants Class of 2021  
*Constructed with carelessness*

## License

This project is open source and available for educational and competition use.

---

*Perfect for quiz competitions, classroom activities, or any scenario requiring fair turn-taking with multiple participants.*
