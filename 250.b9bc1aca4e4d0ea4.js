"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[250],{6236:(C,r,t)=>{t.d(r,{J:()=>p}),t(8288);var f=t(6895),c=t(4650);let p=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[f.ez]}),e})()},5250:(C,r,t)=>{t.r(r),t.d(r,{AuthSignOutModule:()=>A});var d=t(9132),g=t(4859),l=t(6236),h=t(4466),x=t(7579),v=t(5963),b=t(8746),f=t(2529),c=t(2722),p=t(8505),e=t(4650),o=t(5817),i=t(6895);function m(n,s){if(1&n&&(e.ynx(0),e._uU(1),e.ALo(2,"i18nPlural"),e.BQk()),2&n){const a=e.oxw();e.xp6(1),e.hij(" Redirecting in ",e.xi3(2,1,a.countdown,a.countdownMapping)," ")}}function w(n,s){1&n&&(e.ynx(0),e._uU(1," You are now being redirected! "),e.BQk())}const y=function(){return["/sign-in"]},F=[{path:"",component:(()=>{class n{constructor(a,u){this._authService=a,this._router=u,this.countdown=5,this.countdownMapping={"=1":"# second",other:"# seconds"},this._unsubscribeAll=new x.x}ngOnInit(){this._authService.signOut(),(0,v.H)(1e3,1e3).pipe((0,b.x)(()=>{this._router.navigate(["sign-in"])}),(0,f.o)(()=>this.countdown>0),(0,c.R)(this._unsubscribeAll),(0,p.b)(()=>this.countdown--)).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}}return n.\u0275fac=function(a){return new(a||n)(e.Y36(o.e),e.Y36(d.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["auth-sign-out"]],decls:15,vars:4,consts:[[1,"flex","flex-col","flex-auto","items-center","sm:justify-center","min-w-0"],[1,"w-full","sm:w-auto","py-8","px-4","sm:p-12","sm:rounded-2xl","sm:shadow","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12","mx-auto"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight","text-center"],[1,"flex","justify-center","mt-0.5","font-medium"],[4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary","text-center"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"]],template:function(a,u){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e._uU(6,"You have signed out!"),e.qZA(),e.TgZ(7,"div",6),e.YNc(8,m,3,4,"ng-container",7),e.YNc(9,w,2,0,"ng-container",7),e.qZA(),e.TgZ(10,"div",8)(11,"span"),e._uU(12,"Go to"),e.qZA(),e.TgZ(13,"a",9),e._uU(14,"sign in "),e.qZA()()()()()),2&a&&(e.xp6(8),e.Q6J("ngIf",u.countdown>0),e.xp6(1),e.Q6J("ngIf",0===u.countdown),e.xp6(4),e.Q6J("routerLink",e.DdM(3,y)))},dependencies:[d.yS,i.O5,i.Gx],encapsulation:2}),n})()}];let A=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.Bz.forChild(F),g.ot,l.J,h.m]}),n})()}}]);