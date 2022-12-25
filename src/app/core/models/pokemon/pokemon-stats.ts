/**
 * Interface para los stats del pokemón.
 */
export interface PokemonStats{
    /**
     * Stat base.
     */
    base_stat: number;
    /**
     * Esfuerzo.
     */
    effort: number;
    /**
     * Stat.
     */
    stat: Stat;
}

/**
 * Nombre del stat del pokemón.
 */
type Stat = {
    name: string;
}