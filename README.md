# CourtHub 🏀

CourtHub is an original interactive basketball dashboard built with **HTML, CSS, and JavaScript**. The project was created as an AI-assisted web development project using GitHub Copilot in Visual Studio Code.

The goal of CourtHub is to give users a simple place to browse basketball games, search for teams, filter games by status, save favorite games, and view additional game information.

> **Important:** This project uses demonstration game data. It is not connected to a live sports API.

## Features

- Dynamic basketball game cards generated with JavaScript
- Search games by team name
- Filter games by **All, Live, Upcoming, and Completed**
- Favorite/unfavorite games
- Save favorites with browser `localStorage`
- Detailed game information modal
- Dark/light mode toggle
- Responsive layout for desktop, tablet, and mobile screens
- Empty search state with a clear-search button
- Keyboard support for closing the game modal with `Escape`
- Accessible labels and semantic HTML

## Technologies Used

- **HTML5** — page structure and semantic elements
- **CSS3** — responsive layout, cards, modal, theme system, and visual design
- **JavaScript (ES6+)** — dynamic rendering, filtering, searching, events, modal behavior, and localStorage
- **GitHub Copilot** — AI-assisted development, debugging, and documentation
- **Git/GitHub** — version control and project submission
- **VS Code** — development environment

## Getting Started

### Prerequisites

No framework, package manager, or backend server is required.

You only need:

- A modern web browser such as Chrome, Safari, Firefox, or Edge
- VS Code if you want to edit the source code

### Installation

1. Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

2. Move into the project folder:

```bash
cd CourtHub
```

3. Open the folder in VS Code.

### Running the Application

Because CourtHub is a static website, there are two easy ways to run it.

#### Option 1: Open the HTML file

Double-click `index.html` and open it in your browser.

#### Option 2: Use VS Code Live Server

If the Live Server extension is installed:

1. Open `index.html`.
2. Right-click inside the file.
3. Select **Open with Live Server**.
4. The application will open in your browser.

## How to Use CourtHub

### Search

Use the search bar to enter a team name. The displayed games update automatically while typing.

### Filter Games

Select one of the filters:

- **All** — displays every game
- **Live** — displays games currently in progress
- **Upcoming** — displays scheduled games
- **Completed** — displays finished games

The search and filter features work together.

### Favorite Games

Click the star button on a game card to favorite or unfavorite a game.

Favorites are stored in the browser with `localStorage`, so they remain after refreshing the page on the same browser.

### View Game Details

Select **Details →** on a game card to open a modal containing:

- Teams
- Scores
- Game status
- Date and time
- Arena
- Rebounds
- Assists
- Three-point percentage
- Favorite status

The modal can be closed with the close button, by clicking outside the modal, or by pressing `Escape`.

### Dark Mode

Click the moon/sun button in the navigation bar to switch between light and dark themes. The selected theme is stored in `localStorage`.

## Project Structure

```text
CourtHub/
├── index.html
├── style.css
├── script.js
├── README.md
├── REFLECTION.md
└── screenshots/
    └── README.txt
```

## Development Process

The application was developed incrementally instead of attempting to create the entire project in one step.

The development process included:

1. Planning the application structure
2. Creating the HTML layout
3. Building the visual design with CSS
4. Creating JavaScript game data
5. Rendering game cards dynamically
6. Adding search
7. Adding game filters
8. Adding favorites and localStorage
9. Adding the game details modal
10. Adding theme switching
11. Testing interactions
12. Debugging and improving the application
13. Creating project documentation

GitHub Copilot was used as a development assistant. Its suggestions were reviewed, tested, modified, and integrated as appropriate rather than being accepted without review.

## Testing Checklist

Before submission, test the following:

- [ ] Page loads without console errors
- [ ] Search works
- [ ] All filters work
- [ ] Search and filters work together
- [ ] Favorite buttons work
- [ ] Favorites remain after refreshing
- [ ] Game details modal opens
- [ ] Modal closes with the X button
- [ ] Modal closes when clicking the backdrop
- [ ] `Escape` closes the modal
- [ ] Dark mode works
- [ ] Theme remains after refreshing
- [ ] Clear Search resets the search and filter
- [ ] Layout works on a smaller screen

## Known Limitations

CourtHub is an educational MVP and uses static demonstration data. It does not currently retrieve real-time basketball scores from an external API.

Future versions could add a sports API, user accounts, real-time updates, team pages, player statistics, and a backend database.

## AI-Assisted Development

GitHub Copilot was used during development to help with application structure, feature implementation, debugging, and documentation.

The accompanying `REFLECTION.md` documents the AI-assisted development process and includes evidence from Copilot interactions.

## Author

Student Web Development Project — 2026
