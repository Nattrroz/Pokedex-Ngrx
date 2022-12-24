import { PokemonSprites } from "./pokemon-sprites";
import { PokemonStats } from "./pokemon-stats";

/**
 * Interfaz para los datos del pokemón.
 */
export interface Pokemon{
    /**
     * Identificador del pokemón.
     */
    id: number;
    /**
     * Altura del pokemón.
     */
    height: number;
    /**
     * Nombre del pokemón.
     */
    name: string;
    /**
     * Experiencia base del pokemón.
     */
    base_experience: number;
    /**
     * Sprites del pokemón.
     */
    sprites: PokemonSprites;
    /**
     * Stats del pokemón.
     */
    stats: PokemonStats[];
    /**
     * Peso del pokemón.
     */
    weight: number;
    /**
     * Habilidades del pokemón.
     */
    abilities: Abilities[]
    /**
     * Especie de pokemón.
     */
    species: Species;

    /**
     * Tipos de pokemón.
     */
    types: Types[];
}
/**
 * Tipo de habilidades del pokemón.
 */
export type Abilities = {
    ability: Ability;
    is_hidden: boolean;
}
/**
 * Nombre de habilidad del pokemón.
 */
 export type Ability = {
    name: string;
}
/**
 * Tipo de especie de pokemón.
 */
export type Species = {
    name: string;
}
/**
 * Tipos de pokemón.
 */
export type Types = {
    type: Type;
}
/**
 * Nombre del tipo de pokemón.
 */
export type Type = {
    name: string;
}