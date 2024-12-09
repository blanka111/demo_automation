class Home {
    dropDownPronajemProdej = () => cy.contains('.chakra-input','Pronájem');
    inputCity = () => cy.get('.chakra-input').last();
    // btnAddPortfolio = () => cy.contains('.flex','Přidat portfolio');
    btnZobrazInzerat = () => cy.get('.chakra-link.css-6ms2gh');
    // tableRowPortfolio = (text) => cy.contains('.overflow-hidden',text);
    // btnChoosePortfolio = (text) => this.tableRowPortfolio(text).contains('.truncate',text);
    // tableKonciciSmlouvy= () => cy.contains('.flex','Končící smlouvy');
    // btnAddFirstItemToPortfolio = () => cy.contains('.flex.w-full','Přidat nemovitost');
    // btnCreatedPortfolio = (name) => cy.contains('li',name);
}
module.exports = new Home;