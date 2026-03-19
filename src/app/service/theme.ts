import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService{
  isDark=false;
  toggleTheme(){
    this.isDark=!this.isDark
  }
  getTheme(){
    return this.isDark
  }
}
