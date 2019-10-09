import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OC-ng-blog';
  posts = [
    {
      title: 'MonPremierPost',
      // tslint:disable-next-line: max-line-length
      content: 'Et prima post Osdroenam quam, ut dictum est ab hac descriptione discrevimus, Commagena, nunc Euphratensis, clementer adsurgit, Hierapoli, vetere Nino et Samosata civitatibus amplis inlustris.',
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: 'MonSecondPost',
      // tslint:disable-next-line: max-line-length
      content: 'Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.',
      loveIts: 2,
      created_at: new Date()
    },
    {
      title: 'MonTroisièmePost',
      // tslint:disable-next-line: max-line-length
      content: 'Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi. praediximus enim Montium sub ipso vivendi termino his vocabulis appellatos fabricarum culpasse tribunos ut adminicula futurae molitioni pollicitos.',
      loveIts: -1,
      created_at: new Date()
    }
  ]
}

