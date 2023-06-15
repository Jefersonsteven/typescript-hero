type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal';

type HeroBasic = {
  name: string
  age: number
}

type HeroProperties = {
  readonly id?: HeroId
  isActive?: boolean
  powerScale?: HeroPowerScale
}

type Hero = HeroBasic & HeroProperties

function createHero(hero: Hero): Hero {
  const { name, age } = hero
  return Object.freeze({
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true
  })
}

const thor = createHero({ name: "thor", age: 500, powerScale: "galactic" });
const hulk = createHero({ name: "hulk", age: 45, powerScale: "planetary" });
