# Kaizen

Kaizen is a lightweight daily wellness and productivity dashboard for building better habits one small step at a time. It combines focus tracking, screen-time logging, daily planning, exercise guidance, and reflection prompts into a single personal dashboard.

## Overview

This app helps you:

- choose a daily goal or life focus
- track screen time and focus sessions
- follow a personalized daily plan
- complete daily habits and streaks
- get quick movement and meal suggestions
- review sleep and reflection prompts
- save progress in the browser with local storage

## Features

- Goal-based planning for productivity, sleep, health, faith, or all-round balance
- Focus timer with preset durations and custom session support
- Daily habit checklist
- Screen time logging for a daily total and per-app usage
- Personalized daily schedule with work, hydration, exercise, reading, and rest prompts
- Exercise plans with beginner, intermediate, and advanced levels
- Meal suggestions for weight loss or weight gain goals
- Sleep guidance and scripture/reflection cards
- Local persistence so progress stays on the device

## Tech Stack

- HTML
- CSS
- JavaScript
- Browser localStorage for persistence

## Project Structure

```text
.
├── app.js
├── index.html
├── styles.css
└── README.md
```

## Running the App

Because this is a front-end static app, you can run it in either of these ways:

1. Open `index.html` directly in a browser, or
2. Serve the folder locally:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Notes

- The app stores data in the browser using `localStorage`, so progress is saved on the current device.
- There is no backend database or login service; the sign-in flow is a front-end experience for local use.
- This is designed as a personal productivity tool rather than a full multi-user application.
- Exercise and meal suggestions are general suggestions, not medical advice.

## License

This project does not currently include a license file. If you plan to share or publish it, add an appropriate open-source license before distribution.
