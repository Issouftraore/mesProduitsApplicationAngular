import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styleUrls: ['./recherche-par-categorie.component.css']
})
export class RechercheParCategorieComponent {
  IdCategorie! : number;
  produits! : Produit[];
  categories! : Categorie[];
  constructor( private produitService : ProduitService){
  }
  ngOnInit(): void {

    this.produitService.listeCategorie().subscribe((cats) => {
      console.log(cats);
      this.categories = cats._embedded.categories;
    });

  }

  onChange(){
    this.produitService.rechercheParCategorie(this.IdCategorie).subscribe((prods)=>{
      this.produits=prods
    });
  }
}
