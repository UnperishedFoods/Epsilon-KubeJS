ServerEvents.recipes((event) => {
  event.shaped(
    "epsilon:pickaxe_of_bob",
    [
      "ABA",
      " C ",
      " D ",
    ],
    {
      A: "mekanism:block_uranium",
      B: "minecraft:quartz_block",
      C: "pneumaticcraft:logistics_core",
      D: "minecraft:stick",
    },
  )
})