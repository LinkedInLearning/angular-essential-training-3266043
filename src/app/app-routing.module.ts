import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { PreloadingService } from './services/preloading.service';

const routes: Routes = [
  {
    path: 'profile/:id',
    loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent),
    title: (route: ActivatedRouteSnapshot) => `Gem Finder | Profile for ${route.paramMap.get('id')}`
  },
  {
    path: 'players',
    loadChildren: () => import('./pages/players/players.module').then(m => m.PlayersModule),
    title: 'Gem Finder | All Players',
    data: { preload: true }
  },
  {
    path: 'leaderboards',
    loadChildren: () => import('./pages/leaderboards/leaderboards.module').then(m => m.LeaderboardsModule),
    title: 'Gem Finder | Leaderboards'
  },
  {
    path: 'messages',
    loadComponent: () => import('./pages/messages/messages.component').then(m => m.MessagesComponent),
    data: { preload: true }
  },
  {
    path: '',
    redirectTo: `/players`,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/players'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadingService })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
