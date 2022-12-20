import { Observable } from "rxjs";
import { PokemonEndpointService } from "src/app/core/interfaces/services/pokemon/pokemon-endpoint-service.interface";
import { Pokemon } from "src/app/core/models/pokemon/pokemon.model";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

/**
 * Servicio del enpoint del pokemón.
 */
@Injectable()
export class DefaultPokemonEndpointService implements PokemonEndpointService{

    /**
     * Url base para el endpoint.
     */
    private baseUrl: any = environment.POKEMON_API;

    /**
     * Constructor
     * @param http Propiedad que hace referencia a los headers de la petición.
     */
    constructor(private http: HttpClient){}

    /**
     * Obtiene la información de un pokemón.
     * @param pokemonId Identificador del pokemón.
     */
    getPokemon(pokemonId: number): Observable<Pokemon> {
        const url = `${this.baseUrl}pokemon/${pokemonId}`;
        return this.http.get<Pokemon>(url);
    }
}