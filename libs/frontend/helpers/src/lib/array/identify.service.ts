import { Injectable } from '@angular/core';

interface WithId {
  id: number;
}

@Injectable({ providedIn: 'root' })
export class Identify {
  identify<T extends WithId>(el: T): number {
    return el.id;
  }
}


