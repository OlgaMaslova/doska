import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';

@Pipe({
    name: 'localizedDate'
})
export class LocalizedDatePipe implements PipeTransform {
    dateTimeToLocalString = (dateInput: number | string | Date, pattern) => {
        let lang = 'en-EN';

        lang = this.translate.currentLang
            ? this.translate.currentLang
            : this.translate.defaultLang;

        let options: {
            month?;
            year?;
            day?;
            hour?;
            minute?;
            second?;
            dateStyle?;
            timeStyle?;
            weekday?;
        };

        switch (pattern) {
            case 'day_numeric':
                options = { day: 'numeric' };
                break;
            case 'day':
                options = { weekday: 'long' };
                break;
            case 'date':
                options = { dateStyle: 'long' };
                break;
            case 'short_date_time':
                options = {
                    year: '2-digit',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit'
                };
                break;
            case 'time':
                options = { hour: 'numeric', minute: 'numeric' };
                break;
            default:
                options = {
                    timeStyle: 'short',
                    dateStyle: 'long'
                };
        }
        return new Date(dateInput).toLocaleString(lang, options);
    };

    constructor(private translate: TranslateService) {}

    transform(date: number | string | Date, mode?: any): Observable<string> {
        let subscript: Subscription;
        const dateObserver: Observable<string> = new Observable((observer) => {
            subscript = this.translate.onLangChange.subscribe((event) => {
                observer.next(this.dateTimeToLocalString(date, mode));
            });
            observer.next(this.dateTimeToLocalString(date, mode));
            return {
                unsubscribe() {
                    subscript.unsubscribe();
                }
            };
        });
        return dateObserver;
    }
}
