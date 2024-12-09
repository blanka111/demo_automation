import {createStep, createSession, createIntercept, urlLoad, generateRandomText, sortResult,generateRandomTown} from './helper';
import Lib from '../e2e/bdd_libary/libary';
import Result from '../e2e/bdd_pages/searchResult';


describe('bdd_UlovDomov', () => {
    beforeEach(() => {
        urlLoad('https://ud-fe.k8stage.ulovdomov.cz/');
    });

    it('1.Hledej nemovitost a vysortuj dle nahodneho kriteria', () => {
        Lib.searchInCity(generateRandomTown());
        Lib.sortResult();
        createStep('rozkli prvni nemovitosti');
        Result.tableFoundNemovitost().click();
    });

    it('2.Hledej nemovitost dle mesta a pak uprav filter Prodej /Byt ', () => {
        Lib.searchInCity();
        Lib.filterOptions();
    });

    it.only('3.Zobraz dle zadani - pronajem, byt, Brno ', () => {
        Lib.searchAccordingData('Pronájem','Brno', 'Byt');
    });

    it.only('4.Zobraz dle zadani - pronajem, byt, Brno ', () => {
        Lib.searchAccordingData('Prodej','Brno','Dům');
    });


});