import { ResolveFn } from '@angular/router';
import { Ingridient } from '../models/ingridient.model';
import { inject } from '@angular/core';
import { IngridientService } from '../services/ingridient.service';

export const ingridientResolver: 
ResolveFn<Ingridient> = (route, state) => {
  return inject(IngridientService).getById(Number(route.paramMap.get('id'))!);
};
