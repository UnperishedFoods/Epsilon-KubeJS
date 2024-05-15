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

StartupEvents.registry('fluid', event => {
  event.create('pourable_milk')
    .displayName('Pourable Milk')
    .stillTexture('kubejs:fluid/milk_still')
    .flowingTexture('kubejs:fluid/milk_flowing')
    .bucketColor(0xffffff)
})

console.log('Custom create blocks loaded')