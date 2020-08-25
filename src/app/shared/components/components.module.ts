//-------------- Core ---------------------------------------------------------------------------------------------//
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//-------------- Custom Components --------------------------------------------------------------------------------//
import { ImageBackgroundSectionComponent } from './image-background-section/image-background-section.component';
import { FormLabelComponent } from './form-label/form-label.component';
import { InputFieldComponentReactive } from './input-field-reactive/input-field-reactive.component';
import { AvatarThumbComponent } from './avatar-thumb/avatar-thumb.component';
import { SummaryIconComponent } from './summary-icon/summary-icon.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageTitleComponent } from './page-title/page-title.component';

//FRESH CODE
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DatepickerModalComponent } from './date-picker/components/date-picker-modal/date-picker-modal.component';
import { InputItemComponent } from './input-item/input-item.component';
import { MultiStepNavComponent } from './multi-step-nav/multi-step-nav.component';
import { IconCardButtonComponent } from './icon-card-button/icon-card-button.component';
import { AvatarCardButtonComponent } from './avatar-card-button/avatar-card-button.component';
import { SmallIconButtonComponent } from './small-icon-button/small-icon-button.component';
import { InputTextAreaItemComponent } from './input-textarea-item/input-textarea-item.component';

//-------------- Modules ------------------------------------------------------------------------------------------//
import { IonicModule } from '@ionic/angular';
import { NgxMaskModule } from "ngx-mask";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { AngularMaterialUIModule } from './../../core/modules/angular-material-ui.module';

//-------------- Directives --------------------------------------------------------------------------------------//
import { InputDisabledDirective } from '../directives/disable.directive';
import { DatePickerDirective } from './date-picker/directives/date-picker.directive';
import { IonMaskDirective } from './../directives/mask.directive';

//--------------- Pipes --------------------------------------------------------------------------------------------//
import { FileSizeFormatPipe } from '../pipes/file-size-format.pipe';

const modules: Array<any> = [
    MDBBootstrapModule,
    AngularMaterialUIModule,
    IonicModule
];

const directives: Array<any> = [
    InputDisabledDirective,
    DatePickerDirective,
    IonMaskDirective,
];

const pipes: Array<any> = [
    FileSizeFormatPipe
]

const customComponents: Array<any> = [
    //Old Code Base Components
    ImageBackgroundSectionComponent,
    InputItemComponent,
    FormLabelComponent,
    InputFieldComponentReactive,
    AvatarThumbComponent,
    SummaryIconComponent,
    PageHeaderComponent,
    PageTitleComponent,
    //Fresh Code
    InputItemComponent,
    DatePickerComponent,
    DatepickerModalComponent,
    MultiStepNavComponent,
    IconCardButtonComponent,
    AvatarCardButtonComponent,
    SmallIconButtonComponent,
    InputTextAreaItemComponent,
];
@NgModule({
    declarations: [...customComponents, ...directives, ...pipes],
    imports: [
        //vendor 
        CommonModule,  //ngIf, *ngFor
        RouterModule,  //routerLink, <router-outlet>
        ReactiveFormsModule,
        FormsModule,
        //local
        ...modules,
        NgxMaskModule,

    ],
    exports: [
        ...customComponents, 
        ...modules,
        ...directives,
    ]
})
export class ComponentsModule { }
