import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { Pokemon } from "src/app/core/models/pokemon/pokemon.model";

/**
 * Constante que identifica la interfaz para la inyección de dependencias.
 */
export const POKEMON_ENDPOINT_SERVICE = new InjectionToken<PokemonEndpointService>('POKEMON_ENDPOINT_SERVICE');

/**
 * Servicio que realiza el llamado al endpoint del proveedor de servicios.
 */
export interface PokemonEndpointService{
    getPokemon(pokemonId: number): Observable<Pokemon>;
}