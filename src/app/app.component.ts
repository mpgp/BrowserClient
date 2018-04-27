import { Component, OnInit } from '@angular/core';

import { environment } from '../environments/environment';

@Component({
    selector: 'mpgp-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    public username = '...';

    public async ngOnInit(): Promise<void> {
        this.username = await fetch(`${environment.apiUrl}/Account`)
            .then(response => response.json())
            .then(data => data.username);
    }
}
