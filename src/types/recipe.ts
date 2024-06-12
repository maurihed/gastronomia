export type Supply = {
  nombre: number;
  cantidad: string;
  unidad: string;
}

export type Recipe = {
  id: number;
  titulo: string;
  imagen: string;
  descripcion: string;
  ingredientes: Supply[];
  procedimiento: string[];
}
