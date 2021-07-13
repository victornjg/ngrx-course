import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { CoursesActions } from './action-types';
import { CoursesHttpService } from './services/courses-http.service';

@Injectable()
export class CoursesEffects {

  loadAllCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.loadAllCourses),
      concatMap(action => this.coursesService.findAllCourses()),
      map(courses => CoursesActions.allCoursesLoaded({ courses })),
    )
  );

  constructor(private actions$: Actions, private coursesService: CoursesHttpService) { }
}