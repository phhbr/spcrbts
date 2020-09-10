import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgrammingComponent } from './programming/programming.component';
import { BlocklyComponent } from './blockly/blockly.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ProgrammingComponent, BlocklyComponent],
  imports: [
    SharedModule
  ]
})
export class ProgrammingModule { }
