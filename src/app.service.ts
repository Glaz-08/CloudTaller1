import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo(): { nombre: string; apellido: string } {
    return {
      nombre: 'Manuel',
      apellido: 'García',
    };
  }

  calculateNumber(number: number): number {
    return (number + 5) * 2;
  }

  processInfo(nombre: string, edad: number, n: number): { frase: string; calculo: number } {
    const calculo = edad / n;
    const frase = `${nombre} tiene ${edad} años, y ${edad} dividido por ${n} es ${calculo.toFixed(2)}`;
    return {
      frase,
      calculo,
    };
  }
}
