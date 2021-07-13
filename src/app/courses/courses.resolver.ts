import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, finalize, first, tap } from 'rxjs/operators';
import { AppState } from '../reducers';
import { CoursesActions } from './action-types';
import { areAllCoursesLoaded } from './courses.selectors';
import { Course } from './model/course';

@Injectable()
export class CoursesResolver implements Resolve<Course[]> {

  loading = false;
  
  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store
      .pipe(
        select(areAllCoursesLoaded),
        tap((areAllCoursesLoaded) => {
          if (!this.loading && !areAllCoursesLoaded) {
            this.loading = true;
            this.store.dispatch(CoursesActions.loadAllCourses());
          }
        }),
        filter((areAllCoursesLoaded) => areAllCoursesLoaded),
        first(),
        finalize(() => this.loading = false),
      );
  }

}