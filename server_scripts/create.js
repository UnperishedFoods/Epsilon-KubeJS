ServerEvents.recipes((event) => {
  event.shapeless('create:andesite_alloy', [
    'minecraft:andesite',
    'minecraft:diorite'
  ])
  event.recipes.create.splashing([
    Item.of('minecraft:andesite').withChance(0.35), 
    Item.of('minecraft:diorite').withChance(0.35), 
    Item.of('minecraft:granite').withChance(0.35)],
    'minecraft:magma_block'
  )
  event.remove({ id: 'create_dd:superheating/magma_block' })
  event.recipes.create.compacting('kubejs:compressed_netherrack', 'minecraft:netherrack').heated()
  event.blasting('minecraft:magma_block', 'kubejs:compressed_netherrack')
  event.blasting('minecraft:netherrack', 'minecraft:gravel')
  event.remove({ id: 'create:splashing/magma_block' })
event.recipes.createCompacting([
  Item.of('kubejs:essence_crystal').withChance(0.2), 'create_dd:raw_rubber'], 
  [Fluid.of(('kubejs:archwood_sap'), 250)])
  event.remove({ id: 'create:crafting/kinetics/belt_connector' })
  event.remove({ id: 'create_dd:mixing/raw_rubber' })
  event.remove({ output: 'thermal:slag' })
  event.remove({ id: 'create_wt:weapons/tiny_pickaxe/diamond_nugget'})
})

console.log('Create has been loaded!')