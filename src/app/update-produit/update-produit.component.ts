import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [],
})
export class UpdateProduitComponent implements OnInit {
  categories!: Categorie[];
  updatedCatId?: number;
  currentProduit = new Produit();

  constructor(
    private activatedRoute: ActivatedRoute,
    private produitService: ProduitService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.produitService.listeCategorie().subscribe((cats) => {
      if (cats._embedded && cats._embedded.categories)
      this.categories = cats._embedded?.categories;
      console.log(cats);
    });

    this.produitService
      .consulterProduit(this.activatedRoute.snapshot.params['id'])
      .subscribe((prod) => {
        this.currentProduit = prod;
        this.updatedCatId = this.currentProduit.categorie.idCat;
      });
  }

  updateProduit() {
    this.currentProduit.categorie = this.categories.find(
      (cat) => cat.idCat == this.updatedCatId
    )!;
    this.produitService.updateProduit(this.currentProduit).subscribe(
      (prod) => {
        this.router.navigate(['produits']);
      },
      (Error) => {
        alert('probleme lors de la modification');
      }
    );
  }
}
