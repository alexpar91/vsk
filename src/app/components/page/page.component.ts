import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  imageLogoVSK: string;
  imageLogoEuroplan: string;

  imageAppstore: string;
  imageGooglePlay: string;
  imagelogoGooglePlay: string;
  imageQr: string;


  imageBonusKasko: string;
  imgBonusProperty: string;
  imgBonusVacancy: string;
  image3: string;
  imageDMS: string;
  image1: string;
  IMG: string;
  imgBonusHealth3: string;
  imgBonusHealth1: string;
  imageFrame: string;

  imageF: string;
  imageVK: string;
  imageYan: string;
  imageYoot: string;
  imageInst: string;
  imageOdn: string;
  vskaliLogo:string;
  imageVsk:string;
  
  
  features:string[];
  tools = false;
  constructor(){
    this.imageLogoVSK='assets/img/Color.svg';
    this.imageLogoEuroplan='assets/img/logoeuro.svg';

    this.imageAppstore='assets/img/appstore.svg';
    this.imageGooglePlay='assets/img/googleplay.svg';
    this.imagelogoGooglePlay='assets/img/logogp.svg';
    this.imageQr='assets/img/qrcode.svg';


    this.imageBonusKasko='assets/img/imgBonusKasko.svg';
    this.imgBonusProperty='assets/img/imgBonusProperty.svg';
    this.imgBonusVacancy='assets/img/imgBonusVacancy.svg';
    this.image3='assets/img/image 3.svg';
    this.imageDMS='assets/img/Frame 97.svg';
    this.image1='assets/img/image 1.svg';
    this.IMG='assets/img/IMG.svg';
    this.imgBonusHealth3='assets/img/imgBonusHealth3.svg';
    this.imgBonusHealth1='assets/img/imgBonusHealth1.svg';
    this.imageFrame='assets/img/Frame.svg';

    this.imageF='assets/img/Social.svg';
    this.imageVK='assets/img/SocialVK.svg';
    this.imageYan='assets/img/Socialyan.svg';
    this.imageYoot='assets/img/SocialYoot.svg';
    this.imageInst='assets/img/SocialInst.svg';
    this.imageOdn='assets/img/SocialOdn.svg';
    this.vskaliLogo='assets/img/vskaliLogo.svg';
    this.imageVsk='assets/img/vsk.svg';

    this.features=["Специальная программа контроля страховой защиты для вас и вашей семьи","Специальные цены","125 000+ предприятий и организаций под страховой защитой ВСК","100+ страховых услуг","На рынке с 1992 года","Компания года 2015"]
  }

  ngOnInit(): void {
  }

}
