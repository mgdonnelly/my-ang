import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

export const SHARED_MATERIAL_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatTableModule,
  FlexLayoutModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule
];

@NgModule({
  imports: [CommonModule, ...SHARED_MATERIAL_MODULES],
  exports: [...SHARED_MATERIAL_MODULES],
  declarations: []
})
export class SharedImportsModule { }
