export interface PlayerScore {
  playerId: number;
  player: {
    id: number;
    name: string;
  };
  totalScore: number;
  posicao?: number; // Adiciona a propriedade 'posicao' opcional
}
