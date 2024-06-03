StartupEvents.registry('fluid', event => {
  event.create('fruit_juice')
    .displayName('Fruit juice')
    .stillTexture('kubejs:fluid/fruit_juice_still')
    .flowingTexture('kubejs:fluid/fruit_juice_flowing')
    .bucketColor(0xeb9b34)
  
  event.create('vinegar')
  .displayName('Vinegar')
  .stillTexture('kubejs:fluid/vinegar_still')
  .flowingTexture('kubejs:fluid/vinegar_flowing')
  .bucketColor(0xffffff)
  
  event.create('hydrochloric_acid')
  .thinTexture(0xded9d3)
  .bucketColor(0xded9d3)
  .displayName('Hydrochloric acid')
  
  event.create('calcium_ion_solution')
  .thinTexture(0xfff9f2)
  .bucketColor(0xfff9f2)
  .displayName('Calcium ion solution')
})

StartupEvents.registry('item', e => {
e.create('calcium_chloride')
})