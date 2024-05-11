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
})