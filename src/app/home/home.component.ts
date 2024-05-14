import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup, FormGroupDirective, NgForm, FormArray } from '@angular/forms';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
declare function playVideo():void

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  changingImage :any
  afflobnen=true
  img = "assets/images/logoVenice.png"
  src="https://e7.pngegg.com/pngimages/494/103/png-clipart-abu-dhabi-flag-of-the-united-arab-emirates-gianni-gelato-general-trading-llc-efatoora-others-flag-sphere.png"
  video:any
  vid="https://www.heart-of-carthage-dubai.com/assets/video/v1.mp4"
  user= new FormGroup({
   
    name: new FormControl('',[Validators.required ]),
   
    lastName: new FormControl(''),
    phone: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    typRef:new FormControl(""),
    project:new FormControl(""),
    typM:new FormControl(""),
    typB:new FormControl(""),
    date:new FormControl(""),
    DateN:new FormControl(""),
    country:new FormControl(""),
    time:new FormControl(""),

  
  })
  checkAffLobnen= ()=>{
   
     if(this.src=="https://e7.pngegg.com/pngimages/494/103/png-clipart-abu-dhabi-flag-of-the-united-arab-emirates-gianni-gelato-general-trading-llc-efatoora-others-flag-sphere.png")
      {
        
      this.src="https://e7.pngegg.com/pngimages/698/809/png-clipart-flag-of-lebanon-emoji-national-flag-emoji-flag-leaf-thumbnail.png"
      }
      else{
        this.src="https://e7.pngegg.com/pngimages/494/103/png-clipart-abu-dhabi-flag-of-the-united-arab-emirates-gianni-gelato-general-trading-llc-efatoora-others-flag-sphere.png"
      }
    // ektib lcode mte3ik lina
  
    

    //hedhi matna7ihech
    setTimeout(() => {
       this.checkAffLobnen()
    }, 1000);
  }
  element:any

  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute ,private http:HttpClient ) { }

  ngOnInit(): void {
    
    this.checkAffLobnen()
    playVideo()
    this.video= this.sanitizer.bypassSecurityTrustResourceUrl(this.vid);
    //   const script = document.createElement('script')
    // this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/vendor/global/global.min.js')
    //  document.body.appendChild()
    //   if(this.route.snapshot.paramMap.get('id')==""){
    //   this.img="assets/images/l2.png"

    //   }
    //  if(this.route.snapshot.paramMap.get('id')=="WEH - Real Estate"){
    //   this.img="assets/images/l4.png"

    //   }

  }
  sendEmail(){
    if(this.user.value.name=="" || this.user.value.email=='' || this.user.value.phone=='') {
      alert('All fields are required!')
      }
      else{
        
        this.http.post('https://heart-of-carthage-dubai.com/backend' +'/email/send-mail1/',{... this.user.value,
        project:"lobnen" + " " +"date Meet :" + this.user.value.date + " time :" + this.user.value.time 
      }).subscribe(res=>{
          console.log(res)
        alert("successfully registered")})
      }
  }
}
