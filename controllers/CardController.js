const HomeCards = require("../data/Home.json");
const ProjectCards = require("../data/Projects.json");
const ContactCards = require("../data/Contact.json");

class CardController {
  constructor() {}

  GetHomePageCards = () => {
    return HomeCards;
  };

  GetProjects = () => {
    return ProjectCards;
  };

  GetContacts = () => {
    ContactCards.map((card) => {
      card.ascii = card.ascii.join("\n");
    });
    return ContactCards;
  };
}

module.exports = CardController;
