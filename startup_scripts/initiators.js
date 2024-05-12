StartupEvents.registry('item', e => {
e.create('magic_initiator').maxStackSize(1)
e.create('combat_initiator').maxStackSize(1)
e.create('tech_initiator').maxStackSize(1)
})

ItemEvents.modification(event => {
  event.modify('kubejs:magic_initiator', item => {
    item.rarity = 'RARE'
  })
  event.modify('kubejs:combat_initiator', item => {
    item.rarity = 'RARE'
  })
  event.modify('kubejs:tech_initiator', item => {
    item.rarity = 'RARE'
  })
})

console.info('Magic, Tech, and Combat initiated.') 