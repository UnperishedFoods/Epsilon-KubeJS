StartupEvents.registry("block", (event) => {
  event.create("compressed_netherrack")
  .displayName("Compressed Netherrack")
  .material("stone")
  .soundType("stone")
  .hardness(1.0)
  .resistance(1.0)
  .requiresTool(true)
  .tagBlock("mineable/pickaxe")
  .tagBlock("mineable:needs_stone_tool")
})

console.log('Custom create blocks loaded')