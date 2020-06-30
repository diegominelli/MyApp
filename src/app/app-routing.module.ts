import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // {
  //   path: 'feed',
  //   loadChildren: () => import('../pages/feed/feed.module').then( m => m.FeedPageModule)
  // },
  {
    path: 'intro',
    loadChildren: () => import('../pages/intro/intro.module').then( m => m.IntroPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
