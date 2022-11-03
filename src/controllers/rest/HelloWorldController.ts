import {Controller} from "@tsed/di";
import { PathParams } from "@tsed/platform-params";
import {Get, Returns, Summary} from "@tsed/schema";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/getHello")
  getHello() {
    return "hello";
  }

  @Get("/SumaNumeros")
  getSumaNumeros() {
    return 1 + 2;
  }

  @Get("/MiNombre")
  getMiNombre() {
    return "Tito Fajardo";
  }

  HelloWorldFunction() {
    return "Hello World";
  }

  @Get("/suma/:a/:b") 
  @Summary("Obtiene la suma de dos numeros")
  @(Returns(200).Description("Obtiene expediente con datos para pago"))
  suma(@PathParams("a") a: number, 
       @PathParams("b") b: number): number {
    try {
      if (a == 1) {
        return this._sumarDosNumeros(a, b);
      }
      return a + b;
    }
    catch (x) {
      x.status = 400;
      throw x;
    }
  }

  @Get("/resta/:a/:b") 
  @Summary("Obtiene la resta de dos numeros")
  @(Returns(200).Description("Obtiene expediente con datos para pago"))
  resta(@PathParams("a") a: number, 
       @PathParams("b") b: number): number {
    try {
      if (a == 1) {
        return this._restarDosNumeros(a, b);
      }
      return a - b;
    }
    catch (x) {
      x.status = 400;
      throw x;
    }
  }

  @Get("/multiplicacion/:a/:b") 
  @Summary("Obtiene la multiplicacion de dos numeros")
  @(Returns(200).Description("Obtiene expediente con datos para pago"))
  multiplicacion(@PathParams("a") a: number, 
       @PathParams("b") b: number): number {
    try {
      if (a == 1) {
        return this._multiplicarDosNumeros(a, b);
      }
      return a * b;
    }
    catch (x) {
      x.status = 400;
      throw x;
    }
  }

  aFunction() {
    return "hello";
  }

  _sumarDosNumeros(a: number, b: number){
    return a + b;
  }

  _restarDosNumeros(a: number, b: number){
    return a - b;
  }
  _multiplicarDosNumeros(a: number, b: number){
    return a * b;
  }
  _dividirDosNumeros(a: number, b: number){
    return a / b;
  }

}

