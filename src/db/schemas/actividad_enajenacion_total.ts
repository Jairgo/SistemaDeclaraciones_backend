import { ActividadEnajenacionSchema } from './actividad_enajenacion';
import { MontoSchema } from './monto';
import { Schema } from 'mongoose';


export const ActividadEnajenacionTotalSchema = new Schema({
  remuneracionTotal: MontoSchema,
  actividades: [ActividadEnajenacionSchema],
});
