const HomeCards = require("../data/Home.json");
const ProjectCards = require("../data/Projects.json");
const ContactCards = require("../data/Contact.json");
const Database = require("../db/database");

processResult = (datum) => ({ ...datum, boolean: !!datum.boolean });
processInsert = (datum) => prepareDatabaseDates(datum, ["date"]);

class CardController {
  constructor() {
    this.database = new Database({
      tableName: "",
      processor: this.processResult,
      beforeInsert: this.processInsert,
      timestamps: false,
      itemName: "card",
    });
  }

  GetHomePageCards = async () => {
    return await this.database.GetAll("home_cards");
  };

  GetProjects = async () => {
    return await this.database.GetAll("project_cards");
  };

  GetContacts = async () => {
    ContactCards?.map((card) => {
      if (typeof card.ascii === "object") card.ascii = card.ascii.join("");
    });
    return ContactCards;
  };
}

module.exports = CardController;
