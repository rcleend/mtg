import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'cards',
        children: [
          {
            path: '',
            loadChildren: '../pages/cards/cards.module#CardsPageModule'
          }
        ]
      },
      {
        path: 'decks',
        children: [
          {
            path: '',
            loadChildren: '../pages/decks/decks.module#DecksPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/cards',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/cards',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
