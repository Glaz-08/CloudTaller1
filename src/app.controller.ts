import { Controller, Get, Post, Param, Body, BadRequestException, ParseIntPipe, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import { InfoDto } from './info.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // GET / - devuelve nombre y apellido
  @Get()
  getInfo() {
    return this.appService.getInfo();
  }

  // GET /:number - devuelve (number+5)*2
  @Get(':number')
  calculateNumber(@Param('number', ParseIntPipe) number: number) {
    return { resultado: this.appService.calculateNumber(number) };
  }

  // POST / - recibe nombre, edad, n y devuelve frase y calculo
  @Post()
  @HttpCode(200)
  processInfo(@Body() infoDto: InfoDto) {
    return this.appService.processInfo(infoDto.nombre, infoDto.edad, infoDto.n);
  }
}
