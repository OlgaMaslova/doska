import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-switch-locale',
    templateUrl: './switch-locale.component.html',
    styleUrls: ['./switch-locale.component.scss']
})
export class SwitchLocaleComponent implements OnInit {
    constructor(private translate: TranslateService) {}

    ngOnInit(): void {}

    onLocaleClick(locale: string) {
        this.translate.use(locale);
    }
}
