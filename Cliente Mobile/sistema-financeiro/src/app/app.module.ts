import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [AppComponent],
  imports: [ CoreModule, AppRoutingModule, IonicStorageModule.forRoot()],
  bootstrap: [AppComponent],
})
export class AppModule {}
