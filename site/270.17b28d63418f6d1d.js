"use strict";(self.webpackChunkPanelSG=self.webpackChunkPanelSG||[]).push([[270],{9858:(q,g,r)=>{r.r(g),r.d(g,{TestDocenteModule:()=>E});var l=r(6895),u=r(668),e=r(8256),m=r(4204),h=r(2126),p=r(9017),a=r(433);function v(o,i){if(1&o&&(e.TgZ(0,"option",18),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.s9C("value",t.valueAnswer),e.xp6(1),e.hij(" ",t.nameAnswer," ")}}function Z(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",14)(1,"label",15),e._uU(2),e.qZA(),e.TgZ(3,"select",16),e.NdJ("ngModelChange",function(n){const d=e.CHM(t).$implicit,C=e.oxw();return e.KtG(C.answers[d._id]=n)}),e.YNc(4,v,2,2,"option",17),e.qZA()()}if(2&o){const t=i.$implicit,s=e.oxw();e.xp6(2),e.hij(" ",t.nameQuestion,""),e.xp6(1),e.s9C("name",t._id),e.Q6J("ngModel",s.answers[t._id]),e.xp6(1),e.Q6J("ngForOf",t.answer)}}let T=(()=>{class o{constructor(t,s,n,c,d){this.questionService=t,this.notification=s,this.casoService=n,this.router=c,this.route=d,this.test=[],this.answers=[]}ngOnInit(){this.date=new Date,this.id=this.route.snapshot.paramMap.get("id"),this.getCaso(),this.getTest()}create(){const t=Object.entries(this.answers).map(([n,c])=>({refQuestion:n,valueAnswer:parseInt(c,10)}));this.casoService.createTestTeacher({ciStudent:this.caso?.ciStudent,ciTeacher:this.caso?.ciTeacher,answers:t}).subscribe(n=>{const{message:c}=n;console.log(c),this.router.navigate(["../../listar"],{relativeTo:this.route})},n=>{this.notification.showError("Error",0===n.status?"Error de conexi\xf3n con el servidor":"Error al guardar los datos del test")})}getCaso(){this.casoService.getCaso(this.id).subscribe(t=>{const{message:s,data:n}=t;this.caso=n,console.log(s)},t=>{this.notification.showError("Error",0===t.status?"Error de conexi\xf3n con el servidor":"Error al obtener los datos del caso")})}getTest(){this.questionService.getAllQuestion().subscribe(t=>{const{message:s,data:n}=t;this.test=n,console.log(t),console.log(s)},t=>{this.notification.showError("Error",0===t.status?"Error de conexi\xf3n con el servidor":"Error al cargar las preguntas")})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.R),e.Y36(h.T),e.Y36(p.z),e.Y36(u.F0),e.Y36(u.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-editar"]],features:[e._Bn([l.uU])],decls:55,vars:11,consts:[[1,"w-[95%]","h-[90%]","lg:h-[95%]","lg:m-2","mx-4","my-2","bg-cameo","border-4","border-camelot","rounded-lg","overflow-x-hidden"],[1,"w-full","lg:h-[7%]","text-center","text-3xl","font-bold","text-camelot","py-2"],[1,"w-[90%]","flex","flex-col","lg:justify-start","my-2","lg:gap-2","ml-8"],[1,"grid","grid-cols-5","gap-2"],[1,"col-span-1"],[1,"text-camelot","font-bold","flex","flex-row"],[1,"col-span-4"],[1,"flex","flex-row","text-justify","text-nile-blue-200","flex-wrap","break-words"],[1,"flex","flex-row","text-nile-blue-200"],[3,"ngSubmit"],["class","w-[80%] my-2 border border-white rounded-lg p-2 flex flex-col lg:justify-start lg:gap-2 ml-4 first-letter shadow",4,"ngFor","ngForOf"],[1,"form-group"],[1,"buttons"],["type","submit",1,"btnEnviar"],[1,"w-[80%]","my-2","border","border-white","rounded-lg","p-2","flex","flex-col","lg:justify-start","lg:gap-2","ml-4","first-letter","shadow"],[1,"w-full","text-camelot","font-bold","flex","flex-row"],[1,"w-full","text-nile-blue","flex","flex-row",3,"ngModel","name","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2," Evaluaci\xf3n del docente "),e.qZA(),e.TgZ(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5)(7,"strong"),e._uU(8,"INSTRUCCI\xd3N PARA LA/EL DOCENTE:"),e.qZA()()(),e.TgZ(9,"div",6)(10,"label",7),e._uU(11," De los siguientes indicadores de riesgo presentes en ni\xf1as y ni\xf1os v\xedctimas de violencia sexual, marque de acuerdo a la frecuencia con la cual usted ha podido observar en la interacci\xf3n con le ni\xf1os o ni\xf1a referido en el contexto escolar siendo; 0 es nulo, 1 poco frecuente, 2 medianamente frecuente y 3 muy frecuente. "),e.qZA()()(),e.TgZ(12,"div",3)(13,"div",4)(14,"label",5),e._uU(15,"Docente evaluador"),e.qZA()(),e.TgZ(16,"div",6)(17,"label",8),e._uU(18),e.qZA()()(),e.TgZ(19,"div",3)(20,"div",4)(21,"label",5),e._uU(22,"Estudiante:"),e.qZA()(),e.TgZ(23,"div",6)(24,"label",8),e._uU(25),e.qZA()()(),e.TgZ(26,"div",3)(27,"div",4)(28,"label",5),e._uU(29,"Grado"),e.qZA()(),e.TgZ(30,"div",6)(31,"label",8),e._uU(32),e.qZA()()(),e.TgZ(33,"div",3)(34,"div",4)(35,"label",5),e._uU(36,"Paralelo"),e.qZA()(),e.TgZ(37,"div",6)(38,"label",8),e._uU(39),e.qZA()()(),e.TgZ(40,"div",3)(41,"div",4)(42,"label",5),e._uU(43,"Fecha de evaluaci\xf3n"),e.qZA()(),e.TgZ(44,"div",6)(45,"label",8),e._uU(46),e.ALo(47,"date"),e.qZA()()()(),e.TgZ(48,"form",9),e.NdJ("ngSubmit",function(){return s.create()}),e.TgZ(49,"fieldset"),e.YNc(50,Z,5,4,"div",10),e.TgZ(51,"div",11)(52,"div",12)(53,"button",13),e._uU(54,"Registrar"),e.qZA()()()()()()),2&t&&(e.xp6(18),e.AsE("",null==s.caso?null:s.caso.nameTeacher," ",null==s.caso?null:s.caso.lastNameTeacher,""),e.xp6(7),e.AsE("",null==s.caso?null:s.caso.nameStudent," ",null==s.caso?null:s.caso.lastNameStudent,""),e.xp6(7),e.Oqu(null==s.caso?null:s.caso.grade),e.xp6(7),e.Oqu(null==s.caso?null:s.caso.parallel),e.xp6(7),e.Oqu(e.xi3(47,8,s.date,"dd/MM/yyyy")),e.xp6(4),e.Q6J("ngForOf",s.test))},dependencies:[l.sg,a._Y,a.YN,a.Kr,a.EJ,a.JJ,a.JL,a.On,a.F,l.uU],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;align-items:center;justify-content:center}"]}),o})();var b=r(1045);function _(o,i){if(1&o&&(e.TgZ(0,"div")(1,"button",12),e._uU(2," Evaluar "),e.qZA()()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("routerLink","../evaluar/"+t.id)}}function A(o,i){1&o&&(e.TgZ(0,"div")(1,"button",13),e._uU(2," Atendido "),e.qZA()())}function x(o,i){if(1&o&&(e.TgZ(0,"tr")(1,"td")(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"td",9)(5,"strong"),e._uU(6,"CI: "),e.qZA(),e._uU(7),e._UZ(8,"br"),e.TgZ(9,"strong"),e._uU(10,"Nombres: "),e.qZA(),e._uU(11),e._UZ(12,"br"),e.TgZ(13,"strong"),e._uU(14,"Apellidos: "),e.qZA(),e._uU(15),e._UZ(16,"br"),e.qZA(),e.TgZ(17,"td",9)(18,"strong"),e._uU(19,"CI: "),e.qZA(),e._uU(20),e._UZ(21,"br"),e.TgZ(22,"strong"),e._uU(23,"Nombres: "),e.qZA(),e._uU(24),e._UZ(25,"br"),e.TgZ(26,"strong"),e._uU(27,"Apellidos: "),e.qZA(),e._uU(28),e._UZ(29,"br"),e.qZA(),e.TgZ(30,"td",9)(31,"strong"),e._uU(32,"Instituci\xf3n"),e.qZA(),e._uU(33),e.qZA(),e.TgZ(34,"td",9)(35,"div",10),e.YNc(36,_,3,1,"div",11),e.YNc(37,A,3,0,"div",11),e.qZA()()()),2&o){const t=i.$implicit,s=i.index;e.xp6(3),e.Oqu(s+1),e.xp6(4),e.hij("",t.CI," "),e.xp6(4),e.hij("",t.name," "),e.xp6(4),e.hij("",t.lastName," "),e.xp6(5),e.hij("",t.CIteacher," "),e.xp6(4),e.hij("",t.nameT," "),e.xp6(4),e.hij("",t.lastNameT," "),e.xp6(5),e.hij("",t.institution," "),e.xp6(2),e.Q6J("ngSwitch",t.statusTestTeacher),e.xp6(1),e.Q6J("ngSwitchCase",!1),e.xp6(1),e.Q6J("ngSwitchCase",!0)}}let f=(()=>{class o{constructor(t,s,n){this.notification=t,this.authService=s,this.casoService=n,this.casos=[],this.idUserTeacher=""}ngOnInit(){this.idUserTeacher=this.authService.getUserId(),this.casoService.getAllCasosTeacher(this.idUserTeacher).subscribe(t=>{const{message:s,data:n}=t;this.casos=n,console.log(s),console.log(n)},t=>{this.notification.showError("Error",0===t.status?"Error de conexi\xf3n con el servidor":"Error al cargar casos")})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.T),e.Y36(b.e),e.Y36(p.z))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-listar"]],decls:20,vars:2,consts:[[1,"contenedor"],[1,"body"],[1,"tittle"],[1,"table-responsive"],[1,"table","table-striped"],[1,"thead-inverse"],["scope","col"],["scope","col",2,"text-align","center"],[4,"ngFor","ngForOf"],[2,"width","50%","word-wrap","break-word"],[3,"ngSwitch"],[4,"ngSwitchCase"],["type","button",1,"btnAccion",3,"routerLink"],["type","button","disabled","",1,"btnAccion"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3," Casos Asignados "),e.qZA(),e.TgZ(4,"div",3)(5,"table",4)(6,"thead",5)(7,"tr")(8,"th",6),e._uU(9,"Caso"),e.qZA(),e.TgZ(10,"th",6),e._uU(11,"Estudiante"),e.qZA(),e.TgZ(12,"th",6),e._uU(13,"Docente"),e.qZA(),e.TgZ(14,"th",6),e._uU(15,"Instituci\xf3n"),e.qZA(),e.TgZ(16,"th",7),e._uU(17," Acciones"),e.qZA()()(),e.TgZ(18,"tbody"),e.YNc(19,x,38,11,"tr",8),e.qZA()()()()()),2&t&&(e.xp6(19),e.Q6J("ngForOf",s.casos)("ngForOf",s.casos))},dependencies:[l.sg,l.RF,l.n9,u.rH],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;align-items:center;justify-content:center}"]}),o})();const U=[{path:"",component:f,pathMatch:"full"},{path:"listar",component:f},{path:"evaluar/:id",component:T}];let w=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.Bz.forChild(U),u.Bz]}),o})(),E=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[l.ez,w,a.UX,a.u5]}),o})()}}]);