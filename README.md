# Rick and Morty 🛸
![Rick and Morty Explorer Preview](https://github.com/user-attachments/assets/84285506-6687-4b05-a5a1-768077e4b983)

## Features ✨
- **List Characters:** Browse through the complete list of characters from the show.
- **Character Details:** Get in-depth information about each character, including their status, species, and origin.
- **Search Characters:** Easily search for your favorite characters by name.
- **Pagination:** Page navigation (characters, locations, and episodes)
- **List Locations:** Explore the various locations featured in the Rick and Morty universe.
- **Location Details:** View details about each location, including its type and dimension.
- **Search Locations:** Search locations by name.
- **List Episodes:** Browse through all episodes, with each episode having a brief description.
- **Episode Details:** Get detailed information about each episode, including the air date and characters appearing in the episode.
- **Search Episodes:** Find episodes by name.

## Tech Stack 🛠️

- **Next.js** ![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)
- **TypeScript** ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
- **Tailwind CSS** ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white)
- **GraphQL** ![GraphQL](https://img.shields.io/badge/GraphQL-E10098?logo=graphql&logoColor=white)
- **Apollo Client** ![Apollo](https://img.shields.io/badge/Apollo-311C87?logo=apollo-graphql&logoColor=white)
- **Vercel** ![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)

## Getting Started 🚀

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ekorahy/RickAndMorty.git
   cd RickAndMorty

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install

3. Set up environment variables:
   - Create a .env.local file in the root directory.
   - Add your required environment variables, for example:
     ```bash
     NEXT_PUBLIC_GRAPHQL_URI = <your-graphql-api-url>

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the application in action.

## Deployment 🚀

This application is automatically deployed using **Vercel**. You can also deploy your own version by following these steps:

1. Push the repository to your GitHub account.
2. Go to [Vercel](https://vercel.com/) and connect your repository.
3. Configure your environment variables on Vercel, and deploy!

---

## GraphQL API 🔮

This project uses the **Rick and Morty GraphQL API**. You can check out the documentation [here](https://rickandmortyapi.com/documentation/#graphql).

### Example Queries

- **Fetch all characters:**
  ```bash
  query {
    characters(page: 1) {
      results {
        id
        name
        image
      }
    }
  }

- **Fetch a specific episode:**
  ```bash
  query {
     episode(id: "1") {
       name
       air_date
       episode
     }
   }

## Folder Structure 📂
```
├── public          # Static assets
├── src             
    ├── app             # Next.js app router (pages)
    ├── components      # Reusable components
    ├── constants       # Constants used throughout the application
    ├── fonts           # Custom fonts
    ├── graphql         # GraphQL queries
    ├── styles          # TailwindCSS styles and global CSS
    ├── types           # Type definitions
    ├── utils           # Utility functions
   
