import { NgModule } from '@angular/core';

import { Automatiza7SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [Automatiza7SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [Automatiza7SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Automatiza7SharedCommonModule {}
