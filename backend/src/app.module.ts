import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraficosController } from './graficos/graficos.controller';
import { GraficosService } from './graficos/graficos.service';

@Module({
  imports: [],
  controllers: [AppController, GraficosController],
  providers: [AppService, GraficosService],
})
export class AppModule {}
