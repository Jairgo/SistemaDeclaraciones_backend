import { CatalogoSchema } from './catalogo';
import { MontoSchema } from './monto';
import { Schema } from 'mongoose';


export const ActividadEnajenacionSchema = new Schema({
  remuneracion: MontoSchema,
  tipoEnajenacion: CatalogoSchema,
});