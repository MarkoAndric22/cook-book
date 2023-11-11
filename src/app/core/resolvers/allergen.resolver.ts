import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AllergenService } from '../services/allergen.service';
import { Allergen } from '../models/allergen.model';

export const allergenResolver: ResolveFn<Allergen> = (route, state) => {
  return inject(AllergenService).getById(Number(route.paramMap.get('id'))!);
};
