# React Movie App

This project is a simple yet practical React web application that allows users to browse, search, and favorite movies using data fetched from the [TMDB (The Movie Database) API](https://www.themoviedb.org/documentation/api). The app is designed as a learning exercise to explore and understand core React concepts, including components, hooks, context, and routing, while building a real-world, interactive user interface.

## Features

- **Browse Popular Movies:**  
  On load, the app fetches and displays a grid of popular movies from the TMDB API.

- **Search Functionality:**  
  Users can search for movies by title using the search bar. Results update dynamically based on the query.

- **Favorites Management:**  
  Users can add or remove movies from their favorites. Favorites are persisted in the browser’s localStorage, so they remain available across sessions.

- **Responsive UI:**  
  The app is styled with custom CSS for a clean, modern look and adapts to different screen sizes.

- **Routing:**  
  Navigation between the Home and Favorites pages is handled using React Router.

- **Reusable Components:**  
  The UI is built with reusable components such as `MovieCard` and `NavBar`.

- **React Context:**  
  Favorites state is managed globally using React Context, making it accessible throughout the app.

## Technologies Used

- **React** (with functional components and hooks)
- **React Router DOM** for client-side routing
- **Vite** for fast development and build tooling
- **TMDB API** for movie data
- **CSS** for styling

## Learning Objectives

This project demonstrates:

- Fetching and displaying data from an external API
- Managing state with React hooks (`useState`, `useEffect`)
- Sharing state across components with React Context (`createContext`, `useContext`)
- Handling side effects and localStorage persistence
- Implementing client-side routing with React Router
- Building and composing reusable UI components
- Handling user input and form submissions

## Getting Started

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

## Folder Structure

```
frontend/
  src/
    components/    # Reusable UI components (MovieCard, NavBar)
    contexts/      # React Context for global state (favorites)
    pages/         # Page components (Home, Favorites)
    services/      # API logic for TMDB
    css/           # CSS styles
    App.jsx        # Main app component with routing
    main.jsx       # Entry point
```

## Screenshots

_Add screenshots here to showcase the UI._

## Future Improvements

- Add movie details modal or page
- Pagination for search results
- User authentication for personalized favorites
- Improved error handling and loading states

## License

This project is for educational purposes.

---

Feel free to modify this description to better fit your goals or add more details about your learning process!
