import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  dado: any;
  constructor() { }

  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  deleteData(key: string) {
    localStorage.removeItem(key);
  }

  clearData() {
    localStorage.clear();
  }

}
