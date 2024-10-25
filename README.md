# Movie Web Panel
This is a web application showcasing popular, top-rated, and upcoming movies, built with React, Redux, and The Movie Database (TMDB) API. It features a responsive design with a global search in the Navbar and allows users to explore movie details, cast, and search results.

 
## Features
  - Home Page: Shows popular movies from TMDB.
  - Top Rated Page: Lists top-rated movies.
  - Upcoming Page: Displays upcoming movies.
  - Single Movie Detail Page: Provides detailed information about a selected movie, including the cast.
  - Search: Allows users to search for movies and navigate to a results page with the same UI as the Home Page.
  - Pagination: Provides easy navigation between pages for movie lists.
  - Redux State Management: Used for state management in experienced developer setups.
 
## API Endpoints
This project uses The Movie Database (TMDB) API. Below are the relevant endpoints:

  - Get Popular Movies:
```bash
https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1
```

  - Get Top-Rated Movies:
```bash
https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1
```

  - Get Upcoming Movies:
```bash
https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1
```

  - Get Single Movie Details:
```bash
https://api.themoviedb.org/3/movie/${movie_id}?api_key=${Api_key}&language=en-US
```

  - Get Movie Cast:
```bash
https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${Api_key}&language=en-US
```

  - Search Movies:
```bash
https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${movie_name}&page=1
```

  - Image Base URL:
```bash
https://image.tmdb.org/t/p/w500
```


## Requirements
  - Experience Level: Redux is mandatory for state management if you have more than six months of experience; otherwise, direct API calls in components are sufficient.
  - Responsiveness: The project should be fully responsive.
  - Design: Use your creativity for styling.

### Installation

  - Clone the repository:
```bash
git clone https://github.com/AniketMujbaile/movie-web.git
```

  - Navigate to the project folder:
```bash
cd movie-web
```

  - Install dependencies:
```bash
npm install
```

  - Create an .env file in the root directory and add your API key:
```bash
REACT_APP_API_KEY=your_tmdb_api_key
```

### Usage

  - Start the application:
```bash
npm start
```

  - Open the application in your browser:
```bash
http://localhost:3000
```