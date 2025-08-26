# React Movie App

A simple and modern movie browser built with React and Vite, using the [TMDB API](https://www.themoviedb.org/documentation/api) to fetch and display movie data. This project is designed as a practical way to learn React fundamentals, including hooks, context, routing, and component-based architecture.

## Features

- **Browse Popular Movies:**  
  View a grid of trending movies fetched from the TMDB API.

- **Search Movies:**  
  Search for movies by title using the search bar.

- **Favorites:**  
  Add or remove movies from your favorites. Favorites are saved in your browser’s local storage.

- **Responsive Design:**  
  Clean and responsive UI for desktop and mobile.

- **Routing:**  
  Navigate between Home and Favorites pages using React Router.

- **Reusable Components:**  
  Modular components like `MovieCard` and `NavBar` for maintainability.

- **Global State with Context:**  
  Favorites are managed globally using React Context.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/react-movie-app.git
   cd react-movie-app/frontend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```

4. **Open the app:**  
   Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
frontend/
  src/
    components/    # Reusable UI components (MovieCard, NavBar)
    contexts/      # React Context for global state (favorites)
    css/           # CSS styles
    pages/         # Page components (Home, Favorites)
    services/      # API logic for TMDB
    App.jsx        # Main app component with routing
    main.jsx       # Entry point
  public/
  package.json
  vite.config.js
  ...
```

## Learning Objectives

- Fetch and display data from an external API
- Use React hooks (`useState`, `useEffect`, `useContext`)
- Manage global state with React Context
- Implement client-side routing with React Router
- Build and compose reusable UI components
- Persist data with localStorage

## Customization

- To use your own TMDB API key, edit [`src/services/api.js`](src/services/api.js) and replace the `API_KEY` value.

## Screenshots

_Add screenshots here to showcase the UI._

## License

This project is for educational purposes.