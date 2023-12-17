import UpickCover from "../../assets/UpickCover.png"
import MoonNewsCover from "../../assets/MoonNewsCover.png"
import MoonNewsMain from "../../assets/MoonNewsMain.png"
import UpickMain from "../../assets/UpickMain.png"
import MigrateMateCover from "../../assets/MigrateMateCover.png"
import MigrateMateMain from "../../assets/MigrateMateMain.png"
import TodoAppCover from "../../assets/TodoAppCover.png"
import TodoAppMain from "../../assets/TodoAppMain.png"
import SpeedTyperCover from "../../assets/SpeedTyperCover.png"
import SpeedTyperMain from "../../assets/SpeedTyperMain.png"


export const projectsData = [
  {
    id: 1,
    CoverImage: UpickCover,
    image: UpickMain,
    title: 'Upick.',
    category: 'IOS',
    technologies: ['SwiftUI', 'TMDB API', 'StreamingServiceInfo API', 'FirebaseAuth', 'Alamofire'],
    description: 'Upick is a movie picking app i built using the TMDB API, you can filter by Streaming Services, Genres, Year of release and so on to find the perfect movie for you, the app includes Bookmarking functionality aswell as Sign in with apple',
    githubLink: 'https://github.com/johnnybasgallop/UPICK',
  },

  {
    id: 2,
    CoverImage: MoonNewsCover,
    image: MoonNewsMain,
    title: 'Moon News',
    category: 'IOS',
    technologies: ['SwiftUI', 'Lottie', "Some API"],
    description: 'Moon News is a News App targeted specifically towards the Space enthusiast, covering everything from Rockets and SpaceX all the way to Black holes and the deep cosmos, I built this for my dads birthday since he loves space and reading the news in the morning',
    githubLink: 'https://github.com/johnnybasgallop/moonNews',
  },

  {
    id: 3,
    CoverImage: MigrateMateCover,
    image: MigrateMateMain,
    title: 'MigrateMate',
    category: 'IOS',
    technologies: ['SwiftUI', 'Alamofire', "TravelTables API", "FirebaseAuth"],
    description: 'I love seeing the difference in standard of living and prices accross different countries and cities, this app is designed with that in mind, aiming to provide a detailed look over what you can expect your expense to be all around the world, it includes a simplistic design and sign in with apple functionality to allow users to dive right in',
    githubLink: 'https://github.com/johnnybasgallop/MigrateMate',
  },

  {
    id: 4,
    CoverImage: TodoAppCover,
    image: TodoAppMain,
    title: 'Todo App',
    category: 'Web',
    technologies: ['ReactJS', 'Javascript', 'CSS'],
    description: 'This simplistic and minimilistic Todo list site was one of my first ever coding projects, it taught me a lot about React components, State and using local storage',
    githubLink: 'https://github.com/johnnybasgallop/todoApp',
  },

  {
    id: 5,
    CoverImage: SpeedTyperCover,
    image: SpeedTyperMain,
    title: 'Speed Typing Game',
    category: 'Web',
    technologies: ['HTML', 'Javascript', 'CSS'],
    description: 'This was another simplistic idea that i built with pure HTML,CSS and JS and it taught helped me to understand the basics of web development',
    githubLink: 'https://github.com/johnnybasgallop/SpeedTyper',
  },


 
];

// projects
export const projectsNav = [
{name: "All"},

  {
    name: "IOS",
  },

  {
    name: "Web",
  },
];
