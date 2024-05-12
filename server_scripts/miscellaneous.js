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
  event.smithing(
    "artifacts:everlasting_beef", // arg 1: output
    "forbidden_arcanus:darkstone_upgrade_smithing_template", // arg 2: template
    "minecraft:beef", // arg 3: the item to be upgraded
    "forbidden_arcanus:eternal_stella", // arg 4: the upgrade item
  )
  event.shapeless('1x kubejs:pourable_milk_bucket', ['minecraft:milk_bucket', 'supplementaries:faucet'])
  event.recipes.create.crushing(['minecraft:milk_bucket', 'supplementaries:faucet'], 'kubejs:pourable_milk_bucket')
})

console.info('Misc loaded.')