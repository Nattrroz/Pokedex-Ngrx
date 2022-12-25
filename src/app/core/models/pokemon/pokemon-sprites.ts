/**
 * Interface para obtener un sprite específico del pokemón.
 */
export interface PokemonSprites{
    other: OtherSprite;
}

/**
 * Sprite del dream world.
 */
export type OtherSprite = {
    dream_world: DreamWorldSprite;
}

/**
 * Sprite por defecto del dream world.
 */
export type DreamWorldSprite = {
    front_default: string;
}
