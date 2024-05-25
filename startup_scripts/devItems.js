StartupEvents.registry('item', (event) => {
  event.create('pickaxe_of_bob')
  .displayName('Pickaxe of Bob')
  .maxStackSize(64)
})

ItemEvents.modification(event => {
  event.modify('kubejs:pickaxe_of_bob', item => {
    item.maxDamage(1750)
    item.digSpeed(11)
  })
})
// Define the custom item data with the new attribute and value