// Paint color data for Chrysler do Brasil, 1970–1981
// Hex values are educated period-correct placeholders; correct with archival data when available.

export const DATA = {
  1970: [
    { name: 'Amarelo Montego',   hex: '#e8b842' },
    { name: 'Branco Polar',      hex: '#f3efe6' },
    { name: 'Azul Atlântico',    hex: '#2e4a6b' },
    { name: 'Verde Colonial',    hex: '#3f5a3a' },
    { name: 'Vermelho Imperial', hex: '#8c1e22' },
  ],
  1971: [
    { name: 'Amarelo Canário',   hex: '#f0c93a' },
    { name: 'Branco Neve',       hex: '#f5f2eb' },
    { name: 'Azul Turquesa',     hex: '#3a8a8e' },
    { name: 'Verde Amazonas',    hex: '#356b48' },
    { name: 'Vermelho Granada',  hex: '#7a1d2a' },
  ],
  1972: [
    { name: 'Bege Saara',        hex: '#cdb88a' },
    { name: 'Branco Clássico',   hex: '#efeae0' },
    { name: 'Azul Mediterrâneo', hex: '#34597d' },
    { name: 'Verde Oliva',       hex: '#6b6e3a' },
    { name: 'Marrom Café',       hex: '#5a3a26' },
  ],
  1973: [
    { name: 'Amarelo Ouro',      hex: '#d6a330' },
    { name: 'Branco Pérola',     hex: '#efece4' },
    { name: 'Azul Noturno',      hex: '#1f2f50' },
    { name: 'Verde Musgo',       hex: '#4a5a35' },
    { name: 'Vermelho Rubi',     hex: '#7d1c2e' },
  ],
  1974: [
    { name: 'Laranja Caribe',    hex: '#d96a2b' },
    { name: 'Branco Ártico',     hex: '#f1ede4' },
    { name: 'Azul Capri',        hex: '#3a6f95' },
    { name: 'Verde Esmeralda',   hex: '#2d6a4a' },
    { name: 'Marrom Terra',      hex: '#6a4527' },
  ],
  1975: [
    { name: 'Amarelo Solar',     hex: '#e6b32a' },
    { name: 'Branco Aspen',      hex: '#efebe1' },
    { name: 'Azul Índigo',       hex: '#2a3a6b' },
    { name: 'Verde Floresta',    hex: '#2f4a32' },
    { name: 'Vermelho Fogo',     hex: '#9a2418' },
  ],
  1976: [
    { name: 'Bege Champanhe',    hex: '#d7c39a' },
    { name: 'Branco Cristal',    hex: '#f3efe7' },
    { name: 'Azul Imperial',     hex: '#26416e' },
    { name: 'Verde Limão',       hex: '#a4b04a' },
    { name: 'Marrom Bronze',     hex: '#8a5a2a' },
  ],
  1977: [
    { name: 'Amarelo Mostarda',  hex: '#caa12a' },
    { name: 'Branco Antigo',     hex: '#ece6d6' },
    { name: 'Azul Safira',       hex: '#2c4a78' },
    { name: 'Verde Caribe',      hex: '#3a8a6b' },
    { name: 'Vermelho Cereja',   hex: '#8d1c28' },
  ],
  1978: [
    { name: 'Dourado Metálico',  hex: '#b89545' },
    { name: 'Branco Nevada',     hex: '#efebe2' },
    { name: 'Azul Petróleo',     hex: '#244a52' },
    { name: 'Verde Jade',        hex: '#3f7560' },
    { name: 'Marrom Mogno',      hex: '#5a2e22' },
  ],
  1979: [
    { name: 'Prata Lunar',       hex: '#b8b5ad' },
    { name: 'Branco Geada',      hex: '#f0ede5' },
    { name: 'Azul Royal',        hex: '#243a78' },
    { name: 'Verde Pistache',    hex: '#aabd7a' },
    { name: 'Vermelho Carmim',   hex: '#8a1a2c' },
  ],
  1980: [
    { name: 'Cinza Prata',       hex: '#a8a59d' },
    { name: 'Branco Luxo',       hex: '#f1ede4' },
    { name: 'Azul Celeste',      hex: '#6e95b8' },
    { name: 'Verde Acqua',       hex: '#7ab0a4' },
    { name: 'Marrom Tabaco',     hex: '#6a4628' },
  ],
  1981: [
    { name: 'Amarelo Champagne', hex: '#d8be6b' },
    { name: 'Branco Diamante',   hex: '#f2efe7' },
    { name: 'Azul Oceano',       hex: '#2a557a' },
    { name: 'Verde Brasília',    hex: '#356b3a' },
    { name: 'Vermelho Vinho',    hex: '#5e1a26' },
  ],
};

export const YEARS = Object.keys(DATA).map(Number).sort((a, b) => a - b);

// Placeholder car models — replace per color when real archival data is available
export const MODELS_DEFAULT = [
  'Dodge Dart',
  'Dodge Charger',
  'Dodge Le Baron',
  'Dodge Magnum',
  'Dodge Polara',
];
