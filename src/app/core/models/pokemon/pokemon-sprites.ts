/**
 * Interface para los sprites del pokemón.
 */
export interface PokemonSprites{
    /**
     * Otros sprites
     */
    other: OtherSprite;
}
/**
 * Objeto
 */
type OtherSprite = {
    /**
     * Sprite del dream world
     */
    dream_world: DreamWorldSprite;
}
/**
 * Objeto
 */
type DreamWorldSprite = {
    /**
     * Sprite por defecto del dream world
     */
    front_default: string;
}
