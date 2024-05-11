StartupEvents.registry('item', e => {
e.create('magic_initiator').maxStackSize(1)
e.create('combat_initiator').maxStackSize(1)
e.create('tech_initiator').maxStackSize(1)
})

console.info('Magic, Tech, and Combat initiated.') 