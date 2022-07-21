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
    ContactCards?.map((card) => {
      if (typeof card.ascii === "object") card.ascii = card.ascii.join("");
    });
    return ContactCards;
  };
}

module.exports = CardController;
