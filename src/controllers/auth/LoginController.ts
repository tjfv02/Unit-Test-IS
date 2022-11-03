import { Post } from "@tsed/common";
import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";

@Controller("/hello-world")
export class HelloWorldController {
  @Post("/login")
  login() {
    return "Nombre";
  }

  @Get("/getToken")
  getToken() {
    return "Este es un Token de prueba";
  }


}

