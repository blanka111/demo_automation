export function createStep(step) {
    cy.step(step)
}

export function urlLoad (url) {
    cy.visit(url);
}

export function generateRandomTown(){
    const town = ["Praha","Strakonice","Olomouc","Brno","Liberec","Karlovy Vary","Ostrava","Opava"
    ];
    return `${town[Math.floor(Math.random()*town.length)]}`;
}

export function sortResult(){
    const creterium = ["Nejlepší","Nejnovější","Nejlevnější"];
    return `${creterium[Math.floor(Math.random()*creterium.length)]}`;
}