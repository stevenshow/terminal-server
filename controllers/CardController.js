const HomeCards = require("../data/Home.json");
const ProjectCards = require("../data/Projects.json");

class CardController {
  constructor() {}

  GetHomePageCards = () => {
    return HomeCards;
  };

  GetProjects = () => {
    return ProjectCards;
  };
}

module.exports = CardController;
