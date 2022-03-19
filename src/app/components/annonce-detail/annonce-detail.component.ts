import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { throws } from 'assert';
import { AnnonceService } from 'src/app/annonce.service';
import { ExtendedAnnonce } from 'src/app/types.service';

@Component({
    selector: 'app-annonce-detail',
    templateUrl: './annonce-detail.component.html',
    styleUrls: ['./annonce-detail.component.scss']
})
export class AnnonceDetailComponent implements OnInit {
    annonceID: string;

    annonce: ExtendedAnnonce;

    commentForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private annonceService: AnnonceService,
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            if (params.id) {
                this.annonceID = params.id;
                this.setAnnonce();
            }
        });
        this.commentForm = this.fb.group({
            author: [null, [Validators.required]],
            text: [null, [Validators.required]]
        });
    }

    async setAnnonce() {
        await this.annonceService.getAnnonce(this.annonceID).then((annonce) => {
            this.annonce = annonce;
        });
    }

    async onComment() {
        if (!this.commentForm.valid) {
            return;
        }
        const input = this.commentForm.value;
        input.annonceID = this.annonceID;
        const createdComment = await this.annonceService.createComment(input);
        if (createdComment) {
            console.log(createdComment);
            this.annonce.comments!.items.push(createdComment);
        }
        this.commentForm.reset();
    }
}
