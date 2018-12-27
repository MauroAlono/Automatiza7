import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Automatiza7RegionModule } from './region/region.module';
import { Automatiza7CountryModule } from './country/country.module';
import { Automatiza7LocationModule } from './location/location.module';
import { Automatiza7DepartmentModule } from './department/department.module';
import { Automatiza7TaskModule } from './task/task.module';
import { Automatiza7EmployeeModule } from './employee/employee.module';
import { Automatiza7JobModule } from './job/job.module';
import { Automatiza7JobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        Automatiza7RegionModule,
        Automatiza7CountryModule,
        Automatiza7LocationModule,
        Automatiza7DepartmentModule,
        Automatiza7TaskModule,
        Automatiza7EmployeeModule,
        Automatiza7JobModule,
        Automatiza7JobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Automatiza7EntityModule {}
