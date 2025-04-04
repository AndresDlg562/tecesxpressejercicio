

export type Student = {
  matricula: string;
  nombre : string;
  estatus?: "Aprobado" | "Pendiente" | "Reestructura" | "Expulsado";
  calificacion: number;
  deuda : number;
}