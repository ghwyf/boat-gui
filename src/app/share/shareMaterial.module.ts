import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule, MatGridListModule } from '@angular/material';
const materialModules = [
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule
];
@NgModule({
    declarations: [
    ],
    imports: [
        FormsModule,
        CommonModule,
        MatInputModule,
        ...materialModules
    ],
    providers: [
    ],
    exports: [
        FormsModule,
        CommonModule,
        ...materialModules
    ]
})
export class ShareMaterialModule { }
