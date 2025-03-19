import Tecnologia from "../tecnologia/Tecnologia";
import {Tipo} from "./Tipo";
import {Nivel} from "./Nivel";

export default interface IProjeto {
    id: number;
    nome: string;
    descricao: string;
    imagens: string[];
    tipo: Tipo;
    nivel: Nivel;
    repositorio: string;
    destaque: boolean;
    tecnologias: Tecnologia[];
}