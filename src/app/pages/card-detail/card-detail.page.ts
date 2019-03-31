import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { ActivatedRoute } from '@angular/router';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';


@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html',
  styleUrls: ['./card-detail.page.scss'],
})
export class CardDetailPage implements OnInit {
  card: any;

  constructor(private cardService: CardService, private route: ActivatedRoute, private socialSharing: SocialSharing, private file: File) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.card = this.cardService.loadCard(id, this.setCard.bind(this));
  }

  setCard(card: object) {
    this.card = card
    console.log(this.card);
  }

  shareCard() {
    this.socialSharing.share(`Look at this MTG card! ${this.card.name}: \n${this.card.imageUrl}`, null, null);
  }

}
