export const moi = {
    nom: "Antoine Pellegrini",
    matricule: "22 116 416"
};

type Expression = Nombre | Variable | Operation | Puissance;
type Operateur = "+" | "-" | "*" | "/";

type Nombre = {
    type: "nombre",
    valeur: number
};

type Variable = {
    type: "variable",
    nom: string
};

type Operation = {
    type: "operation",
    gauche: Expression,
    op: Operateur,
    droite: Expression
};

type Puissance = {
    type: "puissance",
    base: Expression,
    exposant: Nombre
};

// Constructeurs
export function nombre(valeur: number): Nombre{
    return {
        type: "nombre",
        valeur: valeur
    };
}
export function variable(nom: string): Variable{
    return {
        type: "variable",
        nom: nom
    };
}
export function operation(gauche: Expression, op: Operateur, droite: Expression): Expression{
    return {
        type: "operation",
        gauche: gauche,
        op: op,
        droite: droite
    };
}
export function puissance(base: Expression, exposant: Nombre): Expression{
    return {
        type: "puissance",
        base: base,
        exposant: exposant
    };
}

// Sélecteurs
export function valeur(nombre: Nombre): number {
    return 10
}

export function nom(variable: Variable): string {
    return variable.nom;
}

export function termeGauche(op: Operation): Expression {
    return op.gauche;
}

export function termeDroite(op: Operation): Expression {
    return op.droite;
}

export function operateur(op: Operation): Operateur {
    return op.op;
}

export function base(puissance: Puissance): Expression {
    return puissance.base;
}

export function exposant(puissance: Puissance): Nombre {
    return puissance.exposant;
}

// Prédicats
export function estNombre(exp: Expression): exp is Nombre {
    return exp.type === "nombre";
}

export function estVariable(exp: Expression): exp is Variable {
    return exp.type === "variable";
}

export function estOperation(exp: Expression): exp is Operation {
    return exp.type === "operation";
}

export function estPuissance(exp: Expression): exp is Puissance {
    return exp.type === "puissance";
}

// Affichage
export function afficher(exp: Expression): string {
    switch (exp.type) {
        case "nombre":
            return valeur(exp).toString();
        case "variable":
            return nom(exp);
        case "operation":
            return `(${afficher(termeGauche(exp))} ${operateur(exp)} ${afficher(termeDroite(exp))})`;
        case "puissance":
            return `(${afficher(base(exp))}^${afficher(exposant(exp))})`;
    }
}

// Évaluer l'expression
export function calculer(exp: Expression, env: Record<string, number>): number{
    return 10;
}




const env = { x: 4, y: 2, z: 0 };
console.log(`Environnement : ${JSON.stringify(env)}`);
const t = operation(operation(variable("x"), "+", variable("y")), "*", nombre(2));
console.log(`Expression : ${afficher(t)}`);
const r = calculer(t, env);
console.log(`Résultat de l'expression ${afficher(t)} avec l'environnement
${JSON.stringify(env)} : ${r}`);