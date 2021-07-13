import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { finalize, first, tap } from 'rxjs/operators';
import { AppState } from '../reducers';
import { CoursesActions } from './action-types';
import { Course } from './model/course';

@Injectable()
export class CoursesResolver implements Resolve<Course[]> {

  loading = false;
  
  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store
      .pipe(
        tap(() => {
          if (!this.loading) {
            this.loading = true;
            this.store.dispatch(CoursesActions.loadAllCourses());
          }
        }),
        first(),
        finalize(() => this.loading = false),
      );
  }

}