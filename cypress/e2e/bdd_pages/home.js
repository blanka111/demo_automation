class Home {
    // dropDownPronajemProdej = () => cy.get('.chakra-input__group');
    // dropDownPronajemProdej = (rentBuy) => cy.contains('[data-test="global.writeBox"]',`${rentBuy}`);
    dropDownPronajemProdej = () => cy.get('[data-test="global.writeBox"]');
    dropDownPronajemProdej2 = (rentBuy) => cy.contains('.chakra-stack',`${rentBuy}`);
    btnProperty = (propertyType) => cy.contains('p',propertyType);
    btnDum = () => cy.get('.css-1d1s8sc').last();
    inputCity = () => cy.get('.chakra-input').last();
    // btnAddPortfolio = () => cy.contains('.flex','Přidat portfolio');
    btnZobrazInzerat = () => cy.get('.chakra-link.css-6ms2gh');
    // tableRowPortfolio = (text) => cy.contains('.overflow-hidden',text);
    // btnChoosePortfolio = (text) => this.tableRowPortfolio(text).contains('.truncate',text);
    // tableKonciciSmlouvy= () => cy.contains('.flex','Končící smlouvy');
    // btnAddFirstItemToPortfolio = () => cy.contains('.flex.w-full','Přidat nemovitost');
    // btnCreatedPortfolio = (name) => cy.contains('li',name);
}
module.exports = new Home();

