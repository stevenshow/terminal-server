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
    let data = await this.database.GetAll("home_cards");
    console.log(data);
    return data;
  };

  GetProjects = async () => {
    return ProjectCards;
  };

  GetContacts = async () => {
    ContactCards?.map((card) => {
      if (typeof card.ascii === "object") card.ascii = card.ascii.join("");
    });
    return ContactCards;
  };

  GetAll = async () => {
    let data = await this.database.GetAll();
    data.map((card, i) => {
      card["card"] = JSON.parse(card["card"]);
    });
    return data;
  };
}

module.exports = CardController;
