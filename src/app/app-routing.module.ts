import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProduitsComponent } from './add-produits/add-produits.component';
import { LoginComponent } from './login/login.component';
import { ProduitsComponent } from './produits/produits.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';

const routes: Routes = [
  { path: 'produits', component: ProduitsComponent },
  { path: 'add-produit', component: AddProduitsComponent },
  { path: ' ', redirectTo: 'produits', pathMatch: 'full' },
  { path: 'updateProduit/:id', component: UpdateProduitComponent },
  { path: 'rechercheParCategorie', component: RechercheParCategorieComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
