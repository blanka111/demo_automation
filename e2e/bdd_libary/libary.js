import Home from '../bdd_pages/home';
import Result from '../bdd_pages/searchResult';
import {createStep, generateRandomTown, sortResult, createIntercept} from '../helper';

class Lib {

    searchInCity(city) {
        createStep('Zapis mesta');
        Home.inputCity().type(city);
        Home.inputCity().should('have.value', city);
        createStep('klik na vyhledavani');
        Home.btnZobrazInzerat().click();
    }

    sortResult() {
        createStep('klikni na dropdown a v dropdown na nahodny vyber');
        createIntercept('POST', '**/sorting=best').as('sort');
        Result.buttonForDropDown().select(sortResult()).wait('@sort');
    }

    filterOptions() {
        createStep('klikni na tlacitko Upravit hledani');
        Result.btnEditSearch().click();
        createStep('klikni na Prodej');
        Result.btnProdej().click();
        createStep('klikni na Byt');
        Result.btnByt().click();
        createStep('klikni na Zobrazit');
        Result.btnZobrazit().click();
    }

    searchAccordingData(rentBuy, townee,propertyType) {
        createStep('Zvol Pronajem');
        Home.dropDownPronajemProdej().click();
        Home.dropDownPronajemProdej2(rentBuy).click();
        createStep('Zapis mesto');
        Home.inputCity().type(townee);
        Home.inputCity().should('have.value',townee);
        createStep('Zvol Byt');
        Home.btnProperty(propertyType).click();
        createStep('klik na vyhledavani');
        Home.btnZobrazInzerat().click();
        Result.tableFoundNemovitost().should('exist').and('be.visible');
    }

}

module.exports = new Lib();