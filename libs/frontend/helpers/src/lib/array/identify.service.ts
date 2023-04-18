interface WithId {
  id: number;
}

export function identify<T extends WithId>(index:number, el: T): number {
    return el.id;
}


