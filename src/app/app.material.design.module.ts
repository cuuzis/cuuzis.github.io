import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [BrowserAnimationsModule, MatToolbarModule, MatButtonModule, MatTabsModule, MatSidenavModule],
  exports: [BrowserAnimationsModule, MatToolbarModule, MatButtonModule, MatTabsModule, MatSidenavModule]
})
export class MaterialDesignModule { }
