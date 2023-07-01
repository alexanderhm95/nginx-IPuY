"use strict";(self.webpackChunkPanelSG=self.webpackChunkPanelSG||[]).push([[970],{6970:(S,g,s)=>{s.r(g),s.d(g,{DocentesModule:()=>F});var u=s(6895),d=s(668),n=s(433);class v{constructor(){this.form=new n.cw({ciTeacher:new n.NI("",[n.kI.required,n.kI.minLength(10),n.kI.maxLength(10)]),name:new n.NI("",[n.kI.required,n.kI.minLength(3)]),lastName:new n.NI("",[n.kI.required,n.kI.minLength(3)]),address:new n.NI("",[n.kI.required,n.kI.minLength(20)]),phone:new n.NI("",[n.kI.required,n.kI.minLength(6),n.kI.maxLength(10)]),email:new n.NI("",[n.kI.required,n.kI.email]),nameInstitucion:new n.NI(!1)})}selectValidator(r){const t=r.value;return null==t||""===t?{required:!0}:null}}var e=s(8256),Z=s(9456),f=s(2126),p=s(5575);function T(o,r){if(1&o&&(e.TgZ(0,"option",28),e._uU(1),e.qZA()),2&o){const t=r.$implicit;e.Q6J("value",t.nameInstitution),e.xp6(1),e.hij(" ",t.nameInstitution," ")}}let _=(()=>{class o{constructor(t,i,l,a,c){this.institutionService=t,this.notification=i,this.teacherService=l,this.route=a,this.router=c,this.formDocente=new v,this.instituciones=[]}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.formDocente.form.reset(),this.getInstitutions(),this.getTeacher()}update(){const{ciTeacher:t,name:i,lastName:l,address:a,phone:c,email:J,nameInstitucion:L}=this.formDocente.form.value;this.teacherService.updateTeacher(this.id,{CI:t,name:i,lastName:l,address:a,phone:c,email:J,nameInstitution:L}).subscribe(m=>{const{message:x}=m;this.notification.showSuccess("Exito",x),console.log(x),this.router.navigate(["../../listar"],{relativeTo:this.route})},m=>{0===m.status?this.notification.showError("Error","Error de conexi\xf3n con el servidor"):(this.notification.showError("Error","Error al modificar docente"),console.log(m))})}getTeacher(){this.teacherService.getTeacher(this.id).subscribe(t=>{const{message:i,data:l}=t;this.teacher=l,console.log(l),this.setValuesTeacher(this.teacher),console.log(i)},t=>{console.log(t)})}setValuesTeacher(t){this.formDocente.form.setValue({ciTeacher:t.CI,name:t.name,lastName:t.lastName,address:t.address,phone:t.phone,email:t.email,nameInstitucion:t.nameInstitution}),this.formDocente.form.get("institucion")?.patchValue(t.nameInstitution),this.formDocente.form.markAllAsTouched()}getInstitutions(){this.institutionService.getAllInstitution().subscribe(t=>{const{message:i,data:l}=t;this.instituciones=l,console.log(i)})}cancel(){this.router.navigate(["../../listar"],{relativeTo:this.route})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(Z.b),e.Y36(f.T),e.Y36(p.H),e.Y36(d.gz),e.Y36(d.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-editar"]],decls:60,vars:3,consts:[[1,"w-[95%]","lg:h-[95%]","m-2","bg-cameo","border-4","border-camelot","rounded-lg","overflow-x-hidden"],[1,"w-full","lg:h-[8%]","pt-4","text-center","text-3xl","font-bold","text-camelot"],[1,"w-full","lg:h-[92%]",3,"formGroup","ngSubmit"],[1,"w-full","flex","flex-col"],[1,"lg:w-[60%]","w-[80%]","h-[10%]","py-2","mb-2","text-start","text-lg","font-bold","text-camelot-400","border-b-2","border-camelot","flex","justify-start","items-end"],[1,"lg:w-[60%]","w-[80%]","grid","lg:grid-cols-4","mb-4","grid-cols-1"],[1,"w-full","col-span-2","text-camelot","text-lg","mr-2","text-left"],["for","name"],[1,"w-full","col-span-2","text-nile-blue","text-lg"],["type","text","id","name","formControlName","name",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400"],["for","lastName"],["type","text","id","lastName","formControlName","lastName",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400"],["for","cedula"],["type","text","id","cedula","formControlName","ciTeacher",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400"],["for","direccion"],["type","text","id","direccion","formControlName","address",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400"],["for","telefono"],["type","text","id","telefono","formControlName","phone",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400"],["for","email"],["type","text","id","email","formControlName","email",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400"],["for","institucion"],["id","selectTeacher","formControlName","nameInstitucion",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400"],["value","0"],[3,"value",4,"ngFor","ngForOf"],[1,"lg:w-[60%]","w-[80%]","grid","lg:grid-cols-4","mb-4","grid-cols-1","justify-end","items-end"],[1,"w-full","flex","text-camelot","text-lg","mr-2","mb-2","justify-end","items-end"],["type","button",1,"border-2","border-camelot","text-base","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","hover:bg-nile-blue","hover:text-cameo","mr-2",3,"click"],["type","submit",1,"border-2","border-camelot","text-base","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","hover:bg-nile-blue","hover:text-cameo",3,"disabled"],[3,"value"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2," Edici\xf3n docente "),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return i.update()}),e.TgZ(4,"fieldset",3)(5,"div",4),e._uU(6," Datos personales "),e.qZA(),e.TgZ(7,"div",5)(8,"div",6)(9,"label",7),e._uU(10," Nombre: "),e.qZA()(),e.TgZ(11,"div",8),e._UZ(12,"input",9),e.qZA()(),e.TgZ(13,"div",5)(14,"div",6)(15,"label",10),e._uU(16," Apellido: "),e.qZA()(),e.TgZ(17,"div",8),e._UZ(18,"input",11),e.qZA()(),e.TgZ(19,"div",5)(20,"div",6)(21,"label",12),e._uU(22," C\xe9dula: "),e.qZA()(),e.TgZ(23,"div",8),e._UZ(24,"input",13),e.qZA()(),e.TgZ(25,"div",5)(26,"div",6)(27,"label",14),e._uU(28," Direcci\xf3n: "),e.qZA()(),e.TgZ(29,"div",8),e._UZ(30,"input",15),e.qZA()(),e.TgZ(31,"div",5)(32,"div",6)(33,"label",16),e._uU(34," Telefono: "),e.qZA()(),e.TgZ(35,"div",8),e._UZ(36,"input",17),e.qZA()(),e.TgZ(37,"div",5)(38,"div",6)(39,"label",18),e._uU(40," Email: "),e.qZA()(),e.TgZ(41,"div",8),e._UZ(42,"input",19),e.qZA()(),e.TgZ(43,"div",4),e._uU(44," Datos institucionales "),e.qZA(),e.TgZ(45,"div",5)(46,"div",6)(47,"label",20),e._uU(48," Instituci\xf3n: "),e.qZA()(),e.TgZ(49,"div",8)(50,"select",21)(51,"option",22),e._uU(52,"Seleccione una instituci\xf3n"),e.qZA(),e.YNc(53,T,2,2,"option",23),e.qZA()()(),e.TgZ(54,"div",24)(55,"div",25)(56,"button",26),e.NdJ("click",function(){return i.cancel()}),e._uU(57," Cancelar "),e.qZA(),e.TgZ(58,"button",27),e._uU(59," Editar "),e.qZA()()()()()()),2&t&&(e.xp6(3),e.Q6J("formGroup",i.formDocente.form),e.xp6(50),e.Q6J("ngForOf",i.instituciones),e.xp6(5),e.Q6J("disabled",i.formDocente.form.invalid))},dependencies:[u.sg,n._Y,n.YN,n.Kr,n.Fj,n.EJ,n.JJ,n.JL,n.sg,n.u],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;align-items:center;justify-content:center}"]}),o})();var h=s(6561),A=s(2340);function w(o,r){1&o&&(e.TgZ(0,"div",18),e._uU(1," Activo "),e.qZA())}function q(o,r){1&o&&(e.TgZ(0,"div",19),e._uU(1," Inactivo "),e.qZA())}function C(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td",11),e._uU(2),e.qZA(),e.TgZ(3,"td",11),e._uU(4),e.qZA(),e.TgZ(5,"td",11),e._uU(6),e.qZA(),e.TgZ(7,"td",11),e._uU(8),e.qZA(),e.TgZ(9,"td",11)(10,"label",12),e.YNc(11,w,2,0,"div",13),e.YNc(12,q,2,0,"div",14),e.qZA()(),e.TgZ(13,"td",11),e._uU(14),e.qZA(),e.TgZ(15,"td",15)(16,"button",16),e._uU(17," Editar "),e.qZA(),e.TgZ(18,"button",17),e.NdJ("click",function(){const a=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.delete(a.id))}),e._uU(19," Eliminar "),e.qZA()()()}if(2&o){const t=r.$implicit;e.xp6(2),e.Oqu(t.CI),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.email),e.xp6(2),e.Oqu(t.phone),e.xp6(3),e.Q6J("ngIf",t.status),e.xp6(1),e.Q6J("ngIf",!t.status),e.xp6(2),e.Oqu(t.nameInstitution),e.xp6(2),e.Q6J("routerLink","../editar/"+t.id)}}function I(o,r){1&o&&(e.TgZ(0,"div",18),e._uU(1," Activo "),e.qZA())}function y(o,r){1&o&&(e.TgZ(0,"div",19),e._uU(1," Inactivo "),e.qZA())}function U(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",20)(1,"div",21)(2,"div",22),e._uU(3," CI: "),e.qZA(),e.TgZ(4,"div",23),e._uU(5),e.qZA()(),e.TgZ(6,"div",21)(7,"div",22),e._uU(8," Nombres: "),e.qZA(),e.TgZ(9,"div",23),e._uU(10),e.qZA()(),e.TgZ(11,"div",21)(12,"div",22),e._uU(13," Email: "),e.qZA(),e.TgZ(14,"div",23),e._uU(15),e.qZA()(),e.TgZ(16,"div",21)(17,"div",22),e._uU(18," Telefono: "),e.qZA(),e.TgZ(19,"div",23),e._uU(20),e.qZA()(),e.TgZ(21,"div",21)(22,"div",22),e._uU(23," Estado: "),e.qZA(),e.TgZ(24,"div",23)(25,"label",12),e.YNc(26,I,2,0,"div",13),e.YNc(27,y,2,0,"div",14),e.qZA()()(),e.TgZ(28,"div",21)(29,"div",22),e._uU(30," Instituci\xf3n: "),e.qZA(),e.TgZ(31,"div",23),e._uU(32),e.qZA()(),e.TgZ(33,"div",24)(34,"button",16),e._uU(35," Editar "),e.qZA(),e.TgZ(36,"button",25),e.NdJ("click",function(){const a=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.delete(a.id))}),e._uU(37," Eliminar "),e.qZA()()()}if(2&o){const t=r.$implicit;e.xp6(5),e.hij(" ",t.CI," "),e.xp6(5),e.hij(" ",t.name," "),e.xp6(5),e.hij(" ",t.email," "),e.xp6(5),e.hij(" ",t.phone," "),e.xp6(6),e.Q6J("ngIf",t.status),e.xp6(1),e.Q6J("ngIf",!t.status),e.xp6(5),e.hij(" ",t.nameInstitution," "),e.xp6(2),e.Q6J("routerLink","../editar/"+t.id)}}let b=(()=>{class o{constructor(t,i){this.notification=t,this.docenteService=i,this.api=A.N.api+"/api/1.0",this.docentes=[],this.search=""}ngOnInit(){this.getTeachers()}getTeachers(){this.docenteService.getAllTeacher().subscribe(t=>{const{message:i,data:l}=t;this.docentes=l,console.log(l),console.log(i)},t=>{0===t.status?this.notification.showError("Error","Error de conexi\xf3n, fallo en el servidor"):console.log(t)})}delete(t){this.notification.showConfirm("warning","Eliminar Docente","\xbfEstas seguro de eliminar este docente?","Si, eliminar!","Cancelar").then(i=>{i.isConfirmed&&this.docenteService.deleteTeacher(t).subscribe(l=>{const{message:a}=l;this.notification.showSuccess("Docente",a),this.ngOnInit()},l=>{0===l.status?this.notification.showError("Error ","No se pudo conectar con el servidor"):console.log(l)})})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(f.T),e.Y36(p.H))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-listar"]],features:[e._Bn([h.u])],decls:29,vars:9,consts:[[1,"w-[95%]","h-[90%]","lg:h-[95%]","lg:m-2","mx-4","my-2","bg-cameo","border-4","border-camelot","rounded-lg","overflow-x-hidden"],[1,"w-full","lg:h-[7%]","text-center","text-3xl","font-bold","text-camelot","py-2"],[1,"w-full","lg:h-[8%]","h-[10%]","flex","flex-row","lg:justify-start","justify-between","py-2","lg:gap-4"],["placeholder","Buscar por nombre",1,"ml-4","px-2","border-b-2","border-camelot","rounded-lg","bg-none","text-camelot","text-xs","font-semibold","tracking-wide","w-[40%]","lg:w-[20%]","focus:outline-none","focus:border-camelot-400",3,"ngModel","ngModelChange"],[1,"w-full","lg:h-auto","px-4","py-2","rounded-lg","shadow","hidden","lg:block"],[1,"w-full","lg:h-[92%]","my-2"],[1,"bg-nile-blue-200","border-b-2","border-nile-blue","text-cameo"],[1,"p-3","text-sm","font-semibold","tracking-wide","text-center"],[4,"ngFor","ngForOf"],[1,"w-full","lg:h-auto","px-4","py-2","rounded-lg","lg:hidden"],["class","w-full h-full flex flex-col mb-2 border border-camelot rounded-lg hover:shadow-sm hover:shadow-camelot-300",4,"ngFor","ngForOf"],[1,"p-3","text-sm","text-black-100","tracking-wide","text-left"],["for","flexSwitchCheckDefault",1,"inline-block","pl-[0.15rem]","hover:cursor-pointer"],["class","bg-green bg-opacity-25 rounded-lg p-2 text-nile-blue text-center tracking-wider  text-sm",4,"ngIf"],["class","bg-red bg-opacity-25 rounded-lg p-2 text-nile-blue text-center tracking-wider  text-sm",4,"ngIf"],[1,"p-3","text-sm","text-black-100","tracking-wide","text-center","flex","flex-row","items-center","justify-center"],["type","button",1,"border-2","border-camelot","text-sm","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","mr-2",3,"routerLink"],["type","button",1,"border-2","border-camelot","text-sm","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","mr-2",3,"click"],[1,"bg-green","bg-opacity-25","rounded-lg","p-2","text-nile-blue","text-center","tracking-wider","text-sm"],[1,"bg-red","bg-opacity-25","rounded-lg","p-2","text-nile-blue","text-center","tracking-wider","text-sm"],[1,"w-full","h-full","flex","flex-col","mb-2","border","border-camelot","rounded-lg","hover:shadow-sm","hover:shadow-camelot-300"],[1,"w-full","grid","grid-cols-5","break-all","items-left","space-x-2","text","pl-2","py-2","pr-2"],[1,"col-span-2","break-all","font-bold","text-camelot"],[1,"col-span-3","break-all","text-nile-blue"],[1,"flex","flex-row","gap-2","justify-end","my-2"],["type","button",1,"border-2","border-camelot","text-sm","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2," Gesti\xf3n docentes "),e.qZA(),e.TgZ(3,"div",2)(4,"input",3),e.NdJ("ngModelChange",function(a){return i.search=a}),e.qZA()(),e.TgZ(5,"div",4)(6,"table",5)(7,"thead",6)(8,"tr")(9,"th",7),e._uU(10,"CI"),e.qZA(),e.TgZ(11,"th",7),e._uU(12,"Nombres"),e.qZA(),e.TgZ(13,"th",7),e._uU(14,"Email"),e.qZA(),e.TgZ(15,"th",7),e._uU(16,"Telefono"),e.qZA(),e.TgZ(17,"th",7),e._uU(18,"Estado"),e.qZA(),e.TgZ(19,"th",7),e._uU(20,"Instituci\xf3n"),e.qZA(),e.TgZ(21,"th",7),e._uU(22," Acciones"),e.qZA()()(),e.TgZ(23,"tbody"),e.YNc(24,C,20,8,"tr",8),e.ALo(25,"filterTables"),e.qZA()()(),e.TgZ(26,"div",9),e.YNc(27,U,38,8,"div",10),e.ALo(28,"filterTables"),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("ngModel",i.search),e.xp6(20),e.Q6J("ngForOf",e.xi3(25,3,i.docentes,i.search)),e.xp6(3),e.Q6J("ngForOf",e.xi3(28,6,i.docentes,i.search)))},dependencies:[u.sg,u.O5,d.rH,n.Fj,n.JJ,n.On,h.u],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;align-items:center;justify-content:center}"]}),o})();const N=[{path:"",component:b,pathMatch:"full"},{path:"listar",component:b},{path:"registrar",component:(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-registrar"]],decls:2,vars:0,template:function(t,i){1&t&&(e.TgZ(0,"p"),e._uU(1,"registrar works!"),e.qZA())}}),o})()},{path:"editar/:id",component:_}];let k=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.Bz.forChild(N),d.Bz]}),o})();var E=s(4466);let F=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,k,n.UX,n.u5,E.m]}),o})()}}]);