import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

interface Cachorro {
  id: number;
  nome: string;
  raca: string;
}

interface GraficoQtdPorRaca {
  raca: string;
  quantidade: number;
}

@Controller('cachorro')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createCachorro(@Body() body: any) {
    return this.appService.insert(body);
  }

  @Get('list')
  getCachorros(): Cachorro[] {
    return this.appService.getCachorros();
  }

  @Get('grafico')
  getGraficoQtdCachorrosPorRaca(): GraficoQtdPorRaca {
    return this.appService.getGraficoQtdPorRaca();
  }

  @Get('grafico2')
  getGraficoQtdDeRacas(): GraficoQtdPorRaca {
    return this.appService.getGraficoQtdDeRacas();
  }

  @Get('grafico3')
  getGraficoQtdPorNome(): GraficoQtdPorRaca {
    return this.appService.getGraficoQtdPorNome();
  }
}
