import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { AdDirective } from './AdDirective';
import { OrgansationStructure } from './OrgansationStructure';
import { OrgansationStructureComponentInterface } from './OrgansationStructure';
import { Directive, ViewContainerRef } from '@angular/core';



@Component({
  selector: 'organisation-structure',
  template: `<body>
              <div class="content">
              <section>
              <header>
               <span>Ferris Air organization structure<hr class="line"></span>
              </header>
              </section>
              <section>
                <img src="assets/letter.svg" style="height:150px;width: 250px">
              </section>
              <ng-template ad-host style="align-content: center;"></ng-template>
              </div>
              </body>
            `,
  styleUrls: ['./organisation-structure.component.css']
})


export class OrganisationStructureComponent implements OnInit,OnDestroy {

	@Input() ads:OrgansationStructure[];//Takes an array of AdItems as input

	currentAdIndex = -1;

	@ViewChild(AdDirective,{static:true}) adHost:AdDirective;

	interval:any;

  constructor(public viewContainerRef: ViewContainerRef,private componentFactoryResolver: ComponentFactoryResolver) { }


  ngOnInit() {
  	this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }


  loadComponent() {
  	this.currentAdIndex = (this.currentAdIndex + 1)% this.ads.length;//Awesome math to count down

  	const adItem = this.ads[this.currentAdIndex];

  	const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

  	const viewContainerRef = this.adHost.viewContainerRef;

  	viewContainerRef.clear();

  	const componentRef = viewContainerRef.createComponent(componentFactory);//returns a reference to the loaded component

    (<OrgansationStructureComponentInterface>componentRef.instance).data = adItem.data;
 	}
	

	getAds() {
    this.loadComponent();

    /*this.interval = setInterval(() => {
      this.loadComponent();
   		 }, 3000);*/
  }

	}

