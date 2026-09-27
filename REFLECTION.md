# CourtHub — GitHub Copilot Reflection

> **Submission note:** Replace every screenshot placeholder below with your **actual screenshots from your GitHub Copilot conversations in VS Code**. Do not submit made-up screenshots. The screenshots are important evidence for the AI interaction portion of the grading rubric.

## 1. What did you ask Copilot to help you build? How did you break down the problem?

I asked GitHub Copilot to help me build an original basketball dashboard called CourtHub using HTML, CSS, and JavaScript. I chose this technology stack because I already had experience with web development and wanted to work with technologies that I could understand and test directly in a browser.

I did not ask Copilot to create the entire application in one prompt. I broke the project into smaller features. I started with the HTML structure, then worked on the CSS design, followed by the JavaScript game data and dynamic game cards. After the basic application worked, I added search, filtering, favorites, localStorage, a game details modal, and a dark/light mode.

This approach made the project easier to test because I could focus on one feature at a time. When something did not work, I could identify which feature was causing the problem instead of trying to debug the entire application.

### Evidence — Initial Structure

**Insert screenshot here:**

`![Copilot Initial Structure](screenshots/01-initial-structure.png)`

### Evidence — Dynamic Game Cards

**Insert screenshot here:**

`![Copilot Dynamic Games](screenshots/03-dynamic-games.png)`

### Evidence — Additional Features

**Insert screenshot here:**

`![Copilot Features](screenshots/05-features.png)`

---

## 2. How did your approach to asking questions change as you worked?

At the beginning of the project, my questions to Copilot were broader because I was mainly focused on getting the basic application structure started. For example, I asked Copilot to create the initial HTML structure and explain how the different sections of the page worked.

As I continued, my questions became more specific. Instead of asking Copilot to build the whole application, I asked it to solve individual problems, such as adding search functionality, connecting filters to the game data, storing favorites in localStorage, and creating a modal for game details.

I also started asking Copilot to explain problems before changing the code. This was useful because it made the interaction more than simply copying and pasting code. I could compare Copilot's explanation with what I saw when testing the application.

One important change was that I started including constraints in my prompts. For example, instead of simply asking for a favorite button, I could specify that favorites should remain after refreshing the page by using localStorage.

### Evidence — More Specific Prompt

**Insert screenshot here:**

`![Copilot Specific Prompt](screenshots/04-search.png)`

### Evidence — Iterative Prompt

**Insert screenshot here:**

`![Copilot Iteration](screenshots/06-favorites.png)`

---

## 3. What parts of the development process with GitHub Copilot surprised you?

One thing that surprised me was how quickly Copilot could turn a description of a feature into working JavaScript. It was especially useful for repetitive code, such as creating multiple game cards from an array of objects.

Another thing that surprised me was that the first answer was not always the final answer I wanted. Even when the code looked correct, I still needed to run the application and interact with it. Testing showed me that writing code and having a feature actually work are not always the same thing.

I also learned that Copilot is more useful when I provide specific information about the problem. A short prompt can produce a starting point, but a detailed prompt about the expected behavior makes it easier to get a useful result.

### Evidence — Copilot Problem Solving

**Insert screenshot here:**

`![Copilot Debugging](screenshots/08-debugging.png)`

### What I changed after the suggestion

Write specifically about what you changed after reviewing/testing Copilot's suggestion:

> **My example:** I tested the feature in the browser, noticed ________, asked Copilot about the problem, and changed ________ so that ________.

---

## 4. What did you learn about the technology you used that you didn't know before?

I learned more about how JavaScript can dynamically change a webpage instead of requiring every piece of content to be written directly in the HTML. The game information is stored in JavaScript objects, and the application uses that data to create the game cards.

I also learned more about event listeners and event delegation. Instead of adding separate logic to every game card, the application listens for clicks in the game grid and checks which action the user selected.

Another important concept I learned was localStorage. I used it to store favorite games and the selected theme in the browser. This helped me understand how a simple website can remember information between page refreshes without having a database.

I also learned that responsive design requires thinking about how the interface changes at different screen sizes. CSS media queries allow the game cards and other sections to change their layout on smaller screens.

### Evidence — Technology Explanation

**Insert screenshot here:**

`![Copilot Technology Explanation](screenshots/09-technology.png)`

---

## 5. What would you do differently if you had to build this again?

If I built CourtHub again, I would spend more time planning the application before writing code. I would create a list of features and decide which features depend on each other before asking Copilot for code.

I would also test each feature immediately after adding it. This would make debugging easier because I would know exactly which change caused a problem.

Another thing I would do differently is improve the data structure from the beginning. The current application uses demonstration data in JavaScript. If I continued developing the project, I would separate the data from the interface and eventually connect the application to a real sports API.

Finally, I would use Copilot as a development partner rather than treating it as a replacement for understanding the code. Asking Copilot to explain why a solution works would help me learn more and make better decisions about which suggestions to accept or modify.

### Evidence — Final Review

**Insert screenshot here:**

`![Copilot Final Review](screenshots/10-final-review.png)`

---

# Copilot Interaction Log

Use this section to document your actual Copilot conversations. Replace the example descriptions with the real prompts you used.

| # | Feature / Task | What I asked Copilot | What I changed or learned | Screenshot |
|---|---|---|---|---|
| 1 | HTML structure | Create the initial CourtHub structure | Reviewed the layout and adjusted sections | `01-initial-structure.png` |
| 2 | CSS design | Create a responsive basketball dashboard design | Tested the layout and adjusted styling | `02-css-design.png` |
| 3 | Dynamic cards | Render games from JavaScript data | Learned about DOM generation | `03-dynamic-games.png` |
| 4 | Search | Search games by team name | Tested search with multiple teams | `04-search.png` |
| 5 | Filters | Add All, Live, Upcoming, Completed filters | Tested filters with search | `05-features.png` |
| 6 | Favorites | Add favorites using localStorage | Tested persistence after refresh | `06-favorites.png` |
| 7 | Modal | Add detailed game information | Tested opening and closing behavior | `07-modal.png` |
| 8 | Debugging | Explain and fix a problem found during testing | Adapted the suggested solution | `08-debugging.png` |
| 9 | Technology review | Explain JavaScript/localStorage/event handling | Improved understanding of the code | `09-technology.png` |
| 10 | Final review | Review application for bugs and improvements | Tested the complete application | `10-final-review.png` |

---

# Final Testing Evidence

Before submitting, take screenshots of the working application showing several features.

Recommended evidence:

1. Main dashboard
2. Search results
3. Filtered results
4. Favorite game
5. Game details modal
6. Dark mode
7. Mobile/responsive layout

Add your screenshots here:

```text
screenshots/
├── app-main.png
├── app-search.png
├── app-filter.png
├── app-favorite.png
├── app-modal.png
├── app-dark-mode.png
└── app-mobile.png
```

# Final Reflection

The biggest lesson I learned from this project was that AI-assisted development still requires the developer to understand, test, and make decisions about the generated code. GitHub Copilot helped me move faster, but I still needed to decide what the application should do, test the features, identify problems, and decide how to change the code.

The project also helped me understand the importance of breaking a larger programming problem into smaller tasks. Instead of trying to create everything at once, I was able to build the application feature by feature and test each part along the way.
