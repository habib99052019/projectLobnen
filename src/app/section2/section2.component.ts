import { Component, OnInit } from '@angular/core';
;
@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {
  venice={ id:0,
          price:"from $139k USD",
          brochure:'/assets/brochure.pdf',
          catigorie:"Studio & Apartments",
          prencentage:"10%",
          plan:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSqc7GLS6lyZl_Wt9lDYecD6qM2kvVcmKD3BPBtvgA7w&s",
          title:"Our Vision",
          video: "/assets/video/rev2.mp4",//"https://www.youtube.com/embed/pxEWiz40xBo?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1" ,
          titleHtml1:"Our",
          titleHtml2: "Vision",
          location:"DUBAÏ  MEYDAN ONE",
          pyement:"4 yrs",
          sTitle:"We aim to be the trusted investment partner for anyone looking to invest in the dynamic and growing real estate market of Dubai by offering exceptional and customized services that meet our clients' needs and help them maximize their investment returns",
          desc:"We aim to be the trusted investment partner for anyone looking to invest in the dynamic and growing real estate market of Dubai by offering exceptional and customized services that meet our clients' needs and help them maximize their investment returns",
          descFinale:"Our Organization Consultancy, headquartered in Lebanon, specializes in offering expert investment consultancy services in Dubai's dynamic real estate market. Founded by seasoned professionals in real estate and investment, our firm is dedicated to providing personalized and comprehensive solutions to investors seeking lucrative opportunities in Dubai",

          images:[
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiJLTr2MjWEOXwKY-7xwyrYeBYX7TxorD-IObTZd-XkQ&s',
            
    
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqshSSNELGsobK1xRrVGdd0Jieodp9h67Kc1QUb3Uww&s",
    "https://goldenbricks.ae/wp-content/uploads/2023/07/The-Skys-the-Limit-How-to-Maximize-Your-Returns-on-Dubai-Real-Estate-Investments-Golden-Bricks-Real-Estate-Dubai-01.jpg",  
    "https://heart-of-carthage-dubai.com/backend/uploads/1697757804310t%C3%83%C2%A9l%C3%83%C2%A9chargement.jfif",
     
    "https://heart-of-carthage-dubai.com/backend/uploads/1697757820838venice-1.jpg",
           
          "https://heart-of-carthage-dubai.com/backend/uploads/1697757878780images%20(3).jfif",
          "https://heart-of-carthage-dubai.com/backend/uploads/1697758001766images.jfif",
          "https://www.dubai-sales-office.com/Projects/Arada/JOURI-HILLS-Dubai/images/gallery9.jpg",
          "https://www.dubai-sales-office.com/Projects/Arada/JOURI-HILLS-Dubai/images/gallery1.jpg",
          "https://heart-of-carthage-dubai.com/backend/uploads/1697757834079images%20(1).jfif",
          "https://riviera-meydan.ae/wp-content/uploads/2020/10/15543660971850878787.jpg",
          "https://riviera-meydan.ae/wp-content/uploads/2020/10/1579530258434495137.jpg",
         
    
    
        ]
      ,
      img:[
        "https://heart-of-carthage-dubai.com/backend/uploads/16755625067961668403583.jpg",
        "https://azizidevelopments.com/assets/images/properties/beach-oasis/1665579700748337076.jpg",

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcodO8Jx9ppT20QXF7V0mnNdAlHxpe5NRLJHutvduDlEuvBlKOsvMWO2Z7yqRD6UmTpRE&usqp=CAU",
"https://heart-of-carthage-dubai.com/backend/uploads/167556250311316462266821501584749.jpg",       
]
      
      }

  constructor() { }

  ngOnInit(): void {
  }

}
