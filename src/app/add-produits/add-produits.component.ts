import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../service/produit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-produits',
  templateUrl: './add-produits.component.html',
  styleUrls: ['./add-produits.component.css'],
})
export class AddProduitsComponent implements OnInit {
  newProduit = new Produit();
  categories!: Categorie[];
  newIdCat!: number;
  newCategorie!: Categorie;

  message!: string;

  constructor(private produitService: ProduitService, private router: Router) {}

  ngOnInit(): void {
    this.produitService.listeCategorie().subscribe((cats) => {
      if (cats._embedded && cats._embedded.categories)
    this.categories =cats._embedded?.categories;
      console.log(cats);
    });
  }

  /* addProduit() {
    //console.log(this.newIdCat);
    //  this.newCategorie = this.produitService.consulterCategorie(this.newIdCat);
     this.newProduit.categorie = this.newCategorie;
    this.produitService.ajouterProduit(this.newProduit);
    this.message =
      'produit ' +
      ' ' +
      this.newProduit.nomProduit +
      ' ' +
      ' ajouter avec succes!! ';
      this.router.navigate(['produits']);
  }*/

  addProduit() {
    this.newProduit.categorie = this.categories.find(
      (cat) => cat.idCat == this.newIdCat
    )!;
    this.produitService.ajouterProduit(this.newProduit).subscribe((prod) => {
      console.log(prod);
      this.router.navigate(['produits']);
    });
  }
}
