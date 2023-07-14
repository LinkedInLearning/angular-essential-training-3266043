export interface Player {
  name: string;
  id: string;
  score: number;
  online: boolean;
  gems: Array<'Diamond' | 'Emerald' | 'Quartz' | 'Ruby' | 'Sapphire' | 'Topaz'>;
}
