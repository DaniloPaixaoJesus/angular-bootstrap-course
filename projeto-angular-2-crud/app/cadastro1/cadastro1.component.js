"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var foto_component_1 = require("../foto/foto.component");
var forms_1 = require("@angular/forms");
var CadastroComponent1 = /** @class */ (function () {
    function CadastroComponent1(http, fb) {
        this.foto = new foto_component_1.FotoComponent();
        this.http = http;
        this.meuForm = fb.group({
            titulo: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            url: ['', forms_1.Validators.required],
            descricao: [''],
        });
    }
    /**
        model-driven form validation

     */
    CadastroComponent1.prototype.cadastrar = function (event) {
        var _this = this;
        //evento é encapsulado e passado para o angular cancelar a submissao do formulário recarregando a pagina
        event.preventDefault();
        console.log(this.foto);
        // cria uma instância de Headers
        var headers = new http_1.Headers();
        // Adiciona o tipo de conteúdo application/json 
        headers.append('Content-Type', 'application/json');
        this.http.post('v1/fotos', JSON.stringify(this.foto), { headers: headers })
            .subscribe(function () {
            _this.foto = new foto_component_1.FotoComponent();
            console.log('Foto salva com sucesso');
        }, function (erro) { return console.log(erro); });
    };
    CadastroComponent1 = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cadastro1',
            templateUrl: './cadastro1.component.html'
        }),
        __metadata("design:paramtypes", [http_1.Http, forms_1.FormBuilder])
    ], CadastroComponent1);
    return CadastroComponent1;
}());
exports.CadastroComponent1 = CadastroComponent1;
//# sourceMappingURL=cadastro1.component.js.map