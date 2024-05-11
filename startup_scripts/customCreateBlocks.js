StartupEvents.registry("block", (event) => {
  event.create("compressed_netherrack")
  .displayName("Compressed Netherrack")
  .material("stone")
  .hardness(1.0)
  .resistance(1.0)
  .tagBlock("mineable/pickaxe")
  .tagBlock("mineable:needs_stone_tool")
})