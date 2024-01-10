# React Redux Tailwind Project

This project is a React application using Redux for state management and Tailwind CSS for styling.

## Table of Contents

1. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
2. [Folder Structure](#folder-structure)
3. [Redux Flow](#redux-flow)
4. [Technologies Used](#technologies-used)
5. [Contributing](#contributing)
   - [Submitting a Pull Request (PR)](#submitting-a-pull-request-pr)
   - [Commit Message Guidelines](#commit-message-guidelines)

## Getting Started

### Prerequisites

Before running the project, ensure you have the following software installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

Follow these steps to install project dependencies:

```bash
# Install dependencies
npm install
# Generate css types
npm run generate-css-types
# Run project
npm run dev
```

## Folder Structure

The project follows the following folder structure:

    .
    ├── dist                                    # Compiled files
    ├── public                                  # Public assets and entry HTML file
    ├── src                                     # Source files
    │   ├── assets                              # Project assets
    │   ├── api                                 # API-related endpoints
    │   ├── handlers                            # Controller layers
    │   │   ├── *
    │   │   │   ├── *.controller.ts             # API-related services
    │   │   │   └── *.reducer.ts                # Redux reducers
    │   ├── repositories                        # Repositories layers
    │   ├── components                          # Reusable React components
    │   ├── modules                             # Reusable React modules
    │   ├── templates                           # Reusable React templates (use for pages rendering)
    │   ├── pages                               # Top-level components representing different pages or views
    │   ├── react-routes                        # React routes configuration
    │   ├── redux                               # Redux store configuration
    │   ├── helpers                             # Helpers functions
    │   └── utils                               # Utilities functions
    ├── .env.example                            # Secret environment
    └── README.md

## Redux Flow

<img src="./public/Redux flow.png" />

## Technologies Used

The main technologies used in this project are:

- ReactJS: JavaScript library for building user interfaces.
- Redux: State management library for JavaScript apps.
- Tailwind CSS: Utility-first CSS framework.

## Contributing

### Submitting a Pull Request (PR)

1. Make your changes in a new git branch

   ```bash
   git checkout -b my-fix-branch dev
   ```

2. Follow these steps before committing your changes

   ```bash
   # Verify linting issues
   npm run lint
   # Format code
   npm run format:write
   ```

### Commit Message Guidelines

1. Commit Message Format

   ```bash
   <type>(<scope>): <subject>
   <BLANK LINE>
   <body>
   <BLANK LINE>
   <footer>
   ```

2. Type

   - **build**: Changes that affect the build system or external
   - **chore**: Updating tasks etc; no production code change
   - **docs**: Documentation only changes
   - **feat**: A new feature
   - **fix**: A bug fix
   - **perf**: A code change that improves performance
   - **refactor**: A code change that neither fixes a bug nor adds a feature
   - **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
   - **test**: Adding missing tests or correcting existing tests

3. Scope
   - **api**: for changes made on `api` directory
   - **handler**: for changes made on `handlers` directory
   - **repository**: for changes made on `repositories` directory
   - **helper**: for changes made on `helpers`, `utils` directory
   - **ui**: for changes made on `components`, `modules`, `templates`, `pages` directory
   - **redux**: for changes made on `redux` directory
   - **route**: for changes made on `react-routes` directory
   - **other**: for changes made on other directory
