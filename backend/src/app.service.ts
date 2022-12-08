import { Injectable } from '@nestjs/common';

const dbJson = [
  {
    id: 1,
    nome: 'Thor',
    raca: 'Labrador',
  },
  {
    id: 2,
    nome: 'Jack',
    raca: 'Husck Siberiano',
  },
  {
    id: 3,
    nome: 'Jack',
    raca: 'Cofape',
  },
  {
    id: 4,
    nome: 'Kiara',
    raca: 'Vira-lata',
  },
  {
    id: 5,
    nome: 'July',
    raca: 'Labrador',
  },
  {
    id: 6,
    nome: 'Fifi',
    raca: 'Pastor Alemao',
  },
  {
    id: 7,
    nome: 'Maju',
    raca: 'Vira-lata',
  },
  {
    id: 8,
    nome: 'Thor',
    raca: 'Vira-lata',
  },
];

interface Cachorro {
  id: number;
  nome: string;
  raca: string;
  idade?: number;
}

@Injectable()
export class AppService {
  async insert(body: any) {
    console.log(body);
    const newBody = {
      id: dbJson.length + 1,
      ...body,
    };

    dbJson.push(newBody);

    return { status: 'ok', message: 'Criado com sucesso' };
  }

  getCachorros(): Cachorro[] {
    return dbJson;
  }

  getGraficoQtdPorRaca(): any {
    const totalCachorro = dbJson.length;
    const grafico: any = [];

    dbJson.forEach((obj) => {
      if (grafico.find((item) => obj.raca == item.raca)) {
        grafico.find((item) => obj.raca == item.raca).quantidade += 1;
      } else {
        grafico.push({
          raca: obj.raca,
          quantidade: 1,
          porcentage: 0,
        });
      }
    });

    grafico.forEach((obj) => {
      obj.porcentage = (obj.quantidade / totalCachorro) * 100;
    });

    return grafico;
  }

  getGraficoQtdDeRacas(): any {
    return {
      cachorros: {
        qtdTotalRacas: [...new Set(dbJson.map((item) => item.raca))].length,
      },
      gatos: {
        qtdTotalRacas: 200,
      },
    };
  }

  getGraficoQtdPorNome(): any {
    const totalCachorro = dbJson.length;
    const grafico: any = [];

    dbJson.forEach((obj) => {
      if (grafico.find((item) => obj.nome == item.nome)) {
        grafico.find((item) => obj.nome == item.nome).quantidade += 1;
      } else {
        grafico.push({
          nome: obj.nome,
          quantidade: 1,
          porcentage: 0,
        });
      }
    });

    grafico.forEach((obj) => {
      obj.porcentage = (obj.quantidade / totalCachorro) * 100;
    });

    return grafico;
  }
}
