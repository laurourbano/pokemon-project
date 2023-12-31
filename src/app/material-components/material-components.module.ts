import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatTabsModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class MaterialComponentsModule { }
