/**
 * Enum para los tipos de pokemones
 */
export enum PokemonTypes{
    normal = "normal",
    fighting = "fighting",
    flying = "flying",
    poison = "poison",
    ground = "ground",
    rock = "rock",
    bug = "bug",
    ghost = "ghost",
    steel = "steel",
    fire = "fire",
    water = "water",
    grass = "grass",
    electric = "electric",
    psychic = "psychic",
    ice = "ice",
    dragon = "dragon",
    dark = "dark",
    fairy = "fairy",
    unknown = "unknown",
    shadow = "shadow"
}

/**
 * Obtiene el string del tipo de pokemón
 */
export const GetPokemonType = new Map<string, string>([
    [PokemonTypes.normal, "Normal"],
    [PokemonTypes.fighting, "Lucha"],
    [PokemonTypes.flying, "Volador"],
    [PokemonTypes.poison, "Veneno"],
    [PokemonTypes.ground, "Tierra"],
    [PokemonTypes.rock, "Roca"],
    [PokemonTypes.bug, "Bicho"],
    [PokemonTypes.ghost, "Fantasma"],
    [PokemonTypes.steel, "Acero"],
    [PokemonTypes.fire, "Fuego"],
    [PokemonTypes.water, "Agua"],
    [PokemonTypes.grass, "Planta"],
    [PokemonTypes.electric, "Eléctrico"],
    [PokemonTypes.psychic, "Psíquico"],
    [PokemonTypes.ice, "Hielo"],
    [PokemonTypes.dragon, "Dragón"],
    [PokemonTypes.dark, "Siniestro"],
    [PokemonTypes.fairy, "Hada"],
    [PokemonTypes.unknown, "???"],
    [PokemonTypes.shadow, "Sombra"],
]);


/**
 * Obtiene el icono del tipo de pokemón
 */
export const GetPokemonTypeIcon = new Map<string, string>([
    [PokemonTypes.normal, "/assets/img/pokemon-types/normal.png"],
    [PokemonTypes.fighting, "/assets/img/pokemon-types/fighting.png"],
    [PokemonTypes.flying, "/assets/img/pokemon-types/flying.png"],
    [PokemonTypes.poison, "/assets/img/pokemon-types/poison.png"],
    [PokemonTypes.ground, "/assets/img/pokemon-types/ground.png"],
    [PokemonTypes.rock, "/assets/img/pokemon-types/rock.png"],
    [PokemonTypes.bug, "/assets/img/pokemon-types/bug.png"],
    [PokemonTypes.ghost, "/assets/img/pokemon-types/ghost.png"],
    [PokemonTypes.steel, "/assets/img/pokemon-types/steel.png"],
    [PokemonTypes.fire, "/assets/img/pokemon-types/fire.png"],
    [PokemonTypes.water, "/assets/img/pokemon-types/water.png"],
    [PokemonTypes.grass, "/assets/img/pokemon-types/grass.png"],
    [PokemonTypes.electric, "/assets/img/pokemon-types/electric.png"],
    [PokemonTypes.psychic, "/assets/img/pokemon-types/psychic.png"],
    [PokemonTypes.ice, "/assets/img/pokemon-types/ice.png"],
    [PokemonTypes.dragon, "/assets/img/pokemon-types/dragon.png"],
    [PokemonTypes.dark, "/assets/img/pokemon-types/dark.png"],
    [PokemonTypes.fairy, "/assets/img/pokemon-types/fairy.png"],
    [PokemonTypes.unknown, "/assets/img/pokemon-types/unknown.png"],
    [PokemonTypes.shadow, "/assets/img/pokemon-types/shadow.png"],
]);

/**
 * Obtiene el background del tipo de pokemón
 */
export const GetPokemonTypeBackground = new Map<string, string>([
    [PokemonTypes.normal, "grey darken-1"],
    [PokemonTypes.fighting, "pink darken-1"],
    [PokemonTypes.flying, "blue darken-1"],
    [PokemonTypes.poison, "purple darken-1"],
    [PokemonTypes.ground, "brown"],
    [PokemonTypes.rock, "grey"],
    [PokemonTypes.bug, "green"],
    [PokemonTypes.ghost, "indigo"],
    [PokemonTypes.steel, "blue-grey"],
    [PokemonTypes.fire, "orange darken-1"],
    [PokemonTypes.water, "blue"],
    [PokemonTypes.grass, "green darken-1"],
    [PokemonTypes.electric, "amber"],
    [PokemonTypes.psychic, "red lighten-1"],
    [PokemonTypes.ice, "cyan"],
    [PokemonTypes.dragon, "light-blue darken-4"],
    [PokemonTypes.dark, "blue-grey darken-2"],
    [PokemonTypes.fairy, "purple lighten-2"],
    [PokemonTypes.unknown, "black"],
    [PokemonTypes.shadow, "grey darken-4"],
]);
