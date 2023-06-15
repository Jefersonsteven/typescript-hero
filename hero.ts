type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal';

// types
type HeroBasic = {
  name: string
  age: number
}

type HeroProperties = {
  readonly id?: HeroId // only lecture
  isActive?: boolean // optional properties
  powerScale?: HeroPowerScale
  address?: {
    planet: string,
    city: string
  }
}

// types unions
type Hero = HeroBasic & HeroProperties

const addressHero: HeroProperties['address'] = {
  planet: 'Earth',
  city: 'Bogota'
}

// typeof+
type Address = typeof addressHero

const addressSpider: Address = {
  planet: 'Earth',
  city: 'New York'
}

// return type

function createAddresss() {
  return {
    planet: 'Earth',
    city: 'Medellin'
  }
}

type Address2 = ReturnType<typeof createAddresss>


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
