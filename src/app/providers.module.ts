import { Provider } from "@angular/core";
import { POKEMON_ENDPOINT_SERVICE } from "./core/interfaces/services/pokemon/pokemon-endpoint-service.interface";
import { DefaultPokemonEndpointService } from "./services/pokemon/default-pokemon.service";

/**
* Clase para el manejo de endpoints.
*/
export const Providers: Provider[] = [
    {
      provide: POKEMON_ENDPOINT_SERVICE,
      useClass: DefaultPokemonEndpointService
    }
  ];