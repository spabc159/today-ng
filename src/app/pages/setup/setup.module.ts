import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SetupComponent } from './setup.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

// import { LocalStorageService } from '../../services/local-storage/local-storage.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule
  ],
  providers: [
    { provide: LocalStorageService } // 可使用简洁的语法，即直接使用ApiService
  ],
  declarations: [SetupComponent]
})
export class SetupModule { }
