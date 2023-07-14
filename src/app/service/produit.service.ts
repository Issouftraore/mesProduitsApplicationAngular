import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiURL, apiUrlCat } from '../config';
import { CategorieWrapped } from '../model/categorieWrapped.model';
import { Produit } from '../model/produit.model';
const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  produits: Produit[] = [];
  produit!: Produit;

  apiUrlCat: string = 'http://localhost:8080/produits/cat';
  // categories :Categorie[];

  constructor(private http: HttpClient) {
    /*  this.categories = [
      {
        idCat:1,
        nomCat: 'PC',
      },
      {
        idCat:2,
        nomCat: 'Autres',
      }
    ]; */
    /*  this.produits = [
      {
        idProduit: 1,
        nomProduit: 'HP',
        prixProduit: 120.2548,
        dateCreation: new Date('12/7/2001'),
        categorie :{
          idCat:2,
          nomCat: 'Autres',
        }
      },
      {
        idProduit: 2,
        nomProduit: 'LENOVO',
        prixProduit: 1200.2548,
        dateCreation: new Date('12/7/2001'),
        categorie :{
          idCat:2,
          nomCat: 'Autres',
        }
      },
      {
        idProduit: 3,
        nomProduit: 'ACCER',
        prixProduit: 120012.2548,
        dateCreation: new Date('12/7/2001'),
        categorie :{
          idCat:1,
          nomCat: 'PC',
        }
      },
    ]; */
  }
  listeProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(apiURL);
  }

  /*ajouterProduit(produit: Produit) {
    this.produits.push(produit);
  }*/

  ajouterProduit(prod: Produit): Observable<Produit> {
    return this.http.post<Produit>(apiURL, prod, httpOptions);
  }

  supprimerProduit(id: number) {
    const url = `${apiURL} / ${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterProduit(id: number): Observable<Produit> {
    const url = `${apiURL}/${id}`;
    return this.http.get<Produit>(url);
  }

  updateProduit(prod: Produit) {
    return this.http.put<Produit>(apiURL, prod, httpOptions);
  }

  trierProduits() {}

  listeCategorie(): Observable<CategorieWrapped> {
    return this.http.get<CategorieWrapped>(apiUrlCat);
  }

  /*consulterCategorie(id:number):Categorie{
    return this.categories.find(cat =>  cat.idCat == id)!;
  } */

  rechercheParCategorie(idCat: number): Observable<Produit[]> {
    const url = `${apiURL}/prodcat/${idCat}`;
    return this.http.get<Produit[]>(url);
  }
}
