import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";

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
}

