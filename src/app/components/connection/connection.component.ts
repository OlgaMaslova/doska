import { Component, NgZone, OnInit } from '@angular/core';
import { I18n, Amplify, Hub, Auth } from 'aws-amplify';
import { AuthenticatorService, translations } from '@aws-amplify/ui-angular';
import { Router } from '@angular/router';
import awsExports from '../../../aws-exports';

@Component({
    selector: 'app-connection',
    templateUrl: './connection.component.html',
    styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {
    hubListener = (data) => {
        switch (data.payload.event) {
            case 'signIn':
                this.handleRedirection();
                break;
            case 'signUp':
                console.log('user signed up');
                break;
            case 'signOut':
                console.log('user signed out');
                break;
            case 'signIn_failure':
                console.log('user sign in failed');
                break;
            case 'configured':
                console.log('the Auth module is configured');
                break;
            default:
                console.log(data.payload.event);
        }
    };

    constructor(
        public authenticator: AuthenticatorService,
        private ngZone: NgZone,
        private router: Router
    ) {
        Amplify.configure(awsExports);
    }

    ngOnInit(): void {
        Hub.listen('auth', this.hubListener);
    }

    ngOnDestroy() {
        Hub.remove('auth', this.hubListener);
    }

    async handleRedirection() {
        console.log('redirect to admin');
        this.ngZone.run(() => {
            this.router.navigate(['admin']);
        });
    }

    async signOut() {
        await Auth.signOut();
    }
}
