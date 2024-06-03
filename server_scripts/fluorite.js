ServerEvents.recipes((event) => {
  event.recipes.create.compacting('kubejs:fruit_juice',['#forge:fruits',Fluid.of('minecraft:water',1000)])
  event.recipes.create.mixing(Fluid.of('kubejs:vinegar',250),[Fluid.of('kubejs:fruit_juice',250)])
  event.recipes.create.mixing(Fluid.of('kubejs:hydrochloric_acid',250),[Fluid.of('kubejs:vinegar',250),'mekanism:salt'])

  event.recipes.create.mixing('kubejs:calcium_chloride',[Fluid.of('kubejs:hydrochloric_acid',1000),'create:limestone'])
  event.recipes.create.mixing(Fluid.of('kubejs:calcium_ion_solution',1000),[Fluid.of('minecraft:water',1000),'kubejs:calcium_chloride'])
  event.recipes.create.mixing('mekanism:fluorite_gem',[Fluid.of('minecraft:water',1000),Fluid.of('kubejs:calcium_ion_solution',500)])
})

console.log('Fluorite loaded')