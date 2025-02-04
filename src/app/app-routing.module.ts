import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './tabs/tabs.module#TabsPageModule',
    canActivate: [AuthGuard]
  },
  { path: 'signin', loadChildren: './pages/signin/signin.module#SigninPageModule' },
  { path: 'terms', loadChildren: './pages/terms/terms.module#TermsPageModule' },
  { path: 'privacy', loadChildren: './pages/privacy/privacy.module#PrivacyPageModule' },
  { path: 'card/:id', loadChildren: './pages/card-detail/card-detail.module#CardDetailPageModule' },
  { path: 'deck/detail/:id', loadChildren: './pages/deck-detail/deck-detail.module#DeckDetailPageModule' },
  { path: 'deck/create', loadChildren: './pages/create-deck/create-deck.module#CreateDeckPageModule' },
  { path: 'deck/add/:id', loadChildren: './pages/deck-add/deck-add.module#DeckAddPageModule' },
  { path: 'deck/:deckId/:cardId', loadChildren: './pages/deck-card-detail/deck-card-detail.module#DeckCardDetailPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
