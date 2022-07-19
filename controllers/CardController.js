const HomeCards = require("../data/Home.json");

class CardController {
  constructor() {}

  GetHomePageCards = () => {
    return HomeCards;
  };

  //   GetCompanyAssociations = async (companyId, companyType) => {
  //     let associatedCompanies = await this.database.GetAllWhere({
  //       mort_service_id: companyId,
  //       contact_type: companyType === "M" ? "S" : "M",
  //     });
  //     let standardizedAssociatedCompanies = [];
  //     for (const company of associatedCompanies) {
  //       standardizedAssociatedCompanies.push({
  //         id: company.id,
  //         mort_service_id: company.mort_service_id,
  //         contact_type: company.contact_type,
  //         name: company.con_name,
  //         address: company.con_address,
  //         city: company.con_city,
  //         state: company.con_state,
  //         zip: company.con_zipcode,
  //         email: company.con_e_mail,
  //         phone: company.con_phone,
  //       });
  //     }
  //     return standardizedAssociatedCompanies;
  //   };

  //   CreateMortgage = TransactionFunction(async (company) => {
  //     return await this.database.Create(company);
  //   });
}

module.exports = CardController;
