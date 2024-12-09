import Home from '../bdd_pages/home';
import Result from '../bdd_pages/searchResult';
import {createStep,generateRandomTown,sortResult} from '../helper';

class Lib {

    searchInCity() {
        createStep('Zapis mesta');
        Home.inputCity().type(generateRandomTown()).wait(1000);
        createStep('klik na vyhledavani');
        Home.btnZobrazInzerat().click({timeout: 1000});
    }

    sortResult() {
        createStep('klikni na dropdown a v dropdown na nahodny vyber');
        Result.buttonForDropDown().select(sortResult()).wait(1000);
    }

    filterOptions () {
        createStep('klikni na tlacitko Upravit hledani');
        Result.btnEditSearch().click({timeout: 1000});
        createStep('klikni na Prodej');
        Result.btnProdej().click();
        createStep('klikni na Byt');
        Result.btnByt().click().wait(1000);
        createStep('klikni na Zobrazit');
        Result.btnZobrazit().click();
    }
    searchAccordingData(rentBuy,townee) {
        createStep('Zvol Pronajem');
        Home.dropDownPronajemProdej().click();
        Home.dropDownPronajemProdej2(rentBuy).click();
        createStep('Zapis mesto');
        Home.inputCity().type(townee).wait(1000);
        createStep('Zvol Byt');
        Home.btnByt().click();
        createStep('klik na vyhledavani');
        Home.btnZobrazInzerat().click({timeout: 1000});
        Result.tableFoundNemovitost().should('exist').and('be.visible');
    }

}

    module.exports = new Lib();