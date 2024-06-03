ServerEvents.recipes((event) => {
  event.shaped(
    "6x minecraft:stone",
    [
      // arg 1: output
      "ADB",
      "DCD", // arg 2: the shape (array of strings)
      "BDA",
    ],
    {
      A: "minecraft:andesite",
      B: "minecraft:diorite", //arg 3: the mapping object
      C: "minecraft:granite",
      D: "minecraft:cobblestone",
    },
  )
  event.shapeless('1x kubejs:pourable_milk_bucket', ['minecraft:milk_bucket', 'supplementaries:faucet'])
  event.recipes.create.crushing(['minecraft:milk_bucket', 'supplementaries:faucet'], 'kubejs:pourable_milk_bucket')
  event.recipes.create.mixing('minecraft:ghast_tear',[Fluid.of('minecraft:water',500),'create:powdered_obsidian','minecraft:gunpowder'])

  event.recipes.create.compacting([
    Item.of('forbidden_arcanus:xpetrified_orb').withChance(1), 
    Item.of('forbidden_arcanus:xpetrified_orb').withChance(0.70), 
    Item.of('forbidden_arcanus:xpetrified_orb').withChance(0.50),
    Item.of('forbidden_arcanus:xpetrified_orb').withChance(0.20)],
    Fluid.of('cyclic:xpjuice',1000)
  )
  event.recipes.create.crushing('thermal:sulfur_dust', 'thermal:sulfur')
})

console.info('Misc loaded.')