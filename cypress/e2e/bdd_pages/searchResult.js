class Result {
    tableFoundNemovitost= () => cy.get('[data-test="previewOfferLeases"]').first();
    buttonForDropDown= () => cy.get('.chakra-select');
    // dropDownSortBy = (text) => cy.contains('.chakra-select',`${text}`);

    btnEditSearch= () => cy.get('[data-test="editSearchButton"]')
    btnProdej= () => cy.contains('.css-r4fmck','Prodej');
    btnByt = () => cy.contains('.chakra-stack','Byt');
    btnZobrazit = () => cy.get('.chakra-link').last();


}
module.exports = new Result();