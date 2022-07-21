const HomeCards = require("../data/Home.json");
const ProjectCards = require("../data/Projects.json");
const ContactCards = require("../data/Contact.json");
const Database = require("../db/Database");

processResult = (datum) => ({ ...datum, boolean: !!datum.boolean });
processInsert = (datum) => prepareDatabaseDates(datum, ["date"]);

class CardController {
  constructor() {
    this.database = new Database({
      tableName: cards,
      processor: this.processResult,
      beforeInsert: this.processInsert,
      timestamps: false,
      itemName: "card",
    });
  }

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

  GetAll = () => {
    await this.database.GetAll();
  };
}

module.exports = CardController;
