import { NgModule } from '@angular/core';
import { SectionCardComponent } from './section-card/section-card.component';
import { CommonModule } from '@angular/common';

// 这里公共组件声明导出
@NgModule({
    declarations: [SectionCardComponent],
    imports: [CommonModule],
    exports: [SectionCardComponent]
})
export class DemoCommonModule {}
