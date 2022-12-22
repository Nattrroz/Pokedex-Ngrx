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
     * Especie de pokemón.
     */
    //species: Species;

    /**
     * Tipos de pokemón.
     */
    //types: Types[];
}

// type Species = {
//     name: string;
// }

// type Types = {
//     type: Type;
// }

// type Type = {
//     name: string;
// }