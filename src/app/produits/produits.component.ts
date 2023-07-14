import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {
  produits: Produit[] = [];
  constructor(private produitService: ProduitService) {
    // this.produits= produitService.listeProduit();
  }

  ngOnInit(): void {
    this.chargerProduit();
  }

  chargerProduit() {
    this.produitService.listeProduit().subscribe((prods) => {
      console.log(prods);
      this.produits = prods;
    });
  }

  supprimerProduit(p: Produit) {
    //console.log(prod);
    let conf = confirm('etes vous sur ?');
    if (conf) {
      if (p.idProduit !== undefined)
        this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
          console.log('produit supprimé');
          this.chargerProduit();
        });
    }
  }
}
