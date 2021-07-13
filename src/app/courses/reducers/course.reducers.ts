import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { CoursesActions } from '../action-types';
import { Course } from '../model/course';


export interface CoursesState extends EntityState<Course> {

}

export const adapter = createEntityAdapter<Course>();

export const initialCoursesState = adapter.getInitialState();

export const coursesReducer = createReducer(
  initialCoursesState,
  on(CoursesActions.allCoursesLoaded,
    (state, action) => adapter.setAll(action.courses, state))
)

export const { 
  selectAll,
} = adapter.getSelectors();