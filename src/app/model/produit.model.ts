import { Categorie } from './categorie.model';

export class Produit {
  [x: string]: any;
  idProduit?: number;
  nomProduit?: string;
  prixProduit?: number;
  dateCreation?: Date;
  categorie!: Categorie;
}
