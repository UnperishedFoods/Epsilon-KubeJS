StartupEvents.registry('fluid', event => {
  event.create('archwood_sap')
    .displayName('Archwood Sap')
    .stillTexture('kubejs:block/archwood_sap_still')
    .flowingTexture('kubejs:block/archwood_sap_flowing')
    .bucketColor(0xb59ddd)
})

StartupEvents.registry('item', e => {
  e.create('essence_crystal').maxStackSize(64)
})

ItemEvents.modification(event => {
  event.modify('essence_crystal', item => {
    item.rarity = 'UNCOMMON'
  })
})