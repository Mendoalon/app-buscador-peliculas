import { Movie } from "./movies";


//TODO: Interface para la respuesta de la api
export interface ApiResponse {
    Search:       Movie[];
    totalResults: string;
    Response:     string;
}