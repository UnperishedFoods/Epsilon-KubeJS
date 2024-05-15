StartupEvents.registry('fluid', event => {
  event.create('archwood_sap')
    .displayName('Archwood Sap')
    .stillTexture('kubejs:fluid/archwood_sap_still')
    .flowingTexture('kubejs:fluid/archwood_sap_flowing')
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
StartupEvents.registry('item', e => {
  e.create('crushed_essence_crystal').maxStackSize(64)
  e.create('water_essence_powder').maxStackSize(64)
  e.create('abjuration_essence_powder').maxStackSize(64)
  e.create('air_essence_powder').maxStackSize(64)
  e.create('fire_essence_powder').maxStackSize(64)
  e.create('earth_essence_powder').maxStackSize(64)
  e.create('conjuration_essence_powder').maxStackSize(64)
  e.create('manipulation_essence_powder').maxStackSize(64)
  e.create('incomplete_water_essence_powder').maxStackSize(64)
})