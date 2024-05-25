ServerEvents.recipes((event) => {
event.recipes.create.crushing('kubejs:crushed_essence_crystal', 'kubejs:essence_crystal')
  
  event.recipes.createFilling('kubejs:air_essence_powder', [
    'kubejs:crushed_essence_crystal',
    Fluid.of('createbb:oxygen', 250)
    ])

event.recipes.create.compacting('kubejs:earth_essence_powder',['kubejs:crushed_essence_crystal','minecraft:granite','minecraft:stone']).heated()
  
event.recipes.create.mixing('kubejs:fire_essence_powder', ['minecraft:fire_charge','kubejs:crushed_essence_crystal']).heated()

event.recipes.create.emptying([Fluid.of('biomesoplenty:blood',250),'minecraft:rotten_flesh'],'#forge:meat')
  
event.recipes.create.mixing('kubejs:conjuration_essence_powder',[Fluid.of('biomesoplenty:blood',500),'kubejs:crushed_essence_crystal','minecraft:book'])
  
  event.recipes.create.deploying('kubejs:incomplete_water_essence_powder', ['kubejs:crushed_essence_crystal', 'minecraft:cod'])
  event.recipes.create.deploying('kubejs:water_essence_powder', ['kubejs:incomplete_water_essence_powder', 'minecraft:salmon'])

  event.recipes.create.compacting('kubejs:manipulation_essence_powder',['kubejs:crushed_essence_crystal','minecraft:clock','minecraft:ender_pearl'])

  event.recipes.create.mixing('kubejs:abjuration_essence_powder',[Fluid.of('create:potion',1000),'kubejs:crushed_essence_crystal','minecraft:glowstone_dust'])

event.recipes.create.mixing('ars_nouveau:water_essence', [Fluid.of('starbunclemania:source_fluid',250), 'kubejs:water_essence_powder'])
  event.recipes.create.mixing('ars_nouveau:fire_essence', [Fluid.of('starbunclemania:source_fluid',250), 'kubejs:fire_essence_powder'])
event.recipes.create.mixing('ars_nouveau:abjuration_essence', [Fluid.of('starbunclemania:source_fluid',250), 'kubejs:abjuration_essence_powder'])
event.recipes.create.mixing('ars_nouveau:conjuration_essence', [Fluid.of('starbunclemania:source_fluid',250), 'kubejs:conjuration_essence_powder'])
event.recipes.create.mixing('ars_nouveau:manipulation_essence', [Fluid.of('starbunclemania:source_fluid',250), 'kubejs:manipulation_essence_powder'])
event.recipes.create.mixing('ars_nouveau:air_essence', [Fluid.of('starbunclemania:source_fluid',250), 'kubejs:air_essence_powder'])
  event.recipes.create.mixing('ars_nouveau:earth_essence', [Fluid.of('starbunclemania:source_fluid',250), 'kubejs:earth_essence_powder'])
})

console.log('Essences have been loaded!')