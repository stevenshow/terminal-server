import HomeCards from "../data/Home.json";
import ProjectCards from "../data/Projects.json";

class CardController {
  constructor() {}

  GetHomePageCards = () => {
    return HomeCards;
  };

  GetProjects = () => {
    return ProjectCards;
  };
}

export default CardController;
