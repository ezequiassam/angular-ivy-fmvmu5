export interface Filme {
  id: number;
  name: string;
  stars: number;
  description: string;
}

export const filmes = [
  {
    id: 1,
    name: 'ETERNOS',
    stars: 8,
    description:
      'Os Eternos são uma raça de seres imortais que viveram durante a antiguidade da Terra, moldando sua história e suas civilizações enquanto batalhavam os malignos Deviantes.',
  },
  {
    id: 2,
    name: 'MARIGHELLA',
    stars: 9,
    description:
      'Comandando um grupo de jovens guerrilheiros, Marighella tenta divulgar sua luta contra a ditadura para o povo brasileiro, mas a censura descredita a revolução. Seu principal opositor é Lúcio, policial que o rotula como inimigo público.',
  },
  {
    id: 3,
    name: 'ALERTA VERMELHO',
    stars: 10,
    description:
      'Um alerta vermelho da Interpol é emitido e o agente do FBI John Hartley assume o caso. Durante sua busca, ele se vê diante de um assalto ousado e é forçado a se aliar ao maior ladrão de arte da história, Nolan Booth, para capturar a ladra de arte mais procurada do mundo atualmente, Sarah Black.',
  },
];
