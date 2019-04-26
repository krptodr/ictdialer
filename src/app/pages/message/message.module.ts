import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { MessageRoutingModule, routedComponents } from './message-routing.module';
import { FormsTextComponent } from '../message/text/text-component';
import { FormsTemplateComponent } from '../message/email/email-component';
import { FormsDocumentComponent } from '../message/document/document-component';
import { FormsRecordingComponent } from '../message/recording/recording-component';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSortModule, MatPaginator } from '@angular/material';
import { FileUploadModule } from 'ng2-file-upload';
import { MatButtonModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';



@NgModule({
    imports: [
      ThemeModule,
      MessageRoutingModule,
      MatTableModule,
      CdkTableModule,
      MatSortModule,
      FileUploadModule,
      MatButtonModule,
      MatPaginatorModule,
    ],
    declarations: [
      ...routedComponents,
    ],
  })
  export class MessageModule { }
