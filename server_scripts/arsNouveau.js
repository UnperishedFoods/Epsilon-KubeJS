ServerEvents.recipes((event) => {
  event.shaped("ars_nouveau:spell_parchment", ["ACA", "CBC", "ACA"], {
    A: "ars_nouveau:source_gem",
    B: "minecraft:paper",
    C: "ars_nouveau:magebloom_fiber",
  })
  event.shapeless("ars_nouveau:novice_spell_book", [
    "minecraft:book",
    "3x ars_nouveau:spell_parchment",
  ])
  event.remove({ id: "ars_nouveau:novice_spell_book" })
  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [{ item: "ars_nouveau:magebloom" }],
    tool: { tag: "forge:tools/knives" },
    result: [{ item: "ars_nouveau:magebloom_fiber", count: 4 }],
  })
  event.remove({ id: "ars_nouveau:magebloom_fiber" })
  event.remove({ id: "ars_nouveau:imbuement_amethyst" })
  event.remove({ id: "ars_nouveau:imbuement_lapis" })
  event.recipes.ars_nouveau.imbuement(
    "ad_astra:ice_shard", // input item
    "ars_nouveau:source_gem", // output
    500, // source cost
    [],
  )
  event.remove({ id: "ars_nouveau:apprentice_spell_book_upgrade"})
event.shaped("ars_nouveau:apprentice_spell_book", 
["CEC", 
 "BAB",
 "CDC"], {
  A: "ars_nouveau:novice_spell_book",
  B: "ars_nouveau:spell_parchment",
  C: "ars_nouveau:source_gem_block",
  D: "minecraft:diamond_block",
  E: "ars_nouveau:source_berry_pie"
 })
  event.remove({ id: "ars_nouveau:imbuement_conjuration_essence" })
  event.recipes.ars_nouveau.imbuement(
    "ars_nouveau:source_gem", //in
    "ars_nouveau:conjuration_essence", //out
    2000, //source
    ["minecraft:book", "ars_nouveau:starbuncle_shards", "ars_nouveau:magebloom"],
  )
  event.remove({ id: "ars_nouveau:imbuement_air_essence" })
  event.recipes.ars_nouveau.imbuement(
    "ars_nouveau:source_gem",
    "ars_nouveau:air_essence",
    2000,
    ["minecraft:feather", "minecraft:arrow", "immersive_aircraft:propeller"],
  )
  event.remove({ id: "ars_nouveau:imbuement_water_essence" })
  event.recipes.ars_nouveau.imbuement(
    "ars_nouveau:source_gem",
    "ars_nouveau:water_essence",
    2000,
    ["minecraft:water_bucket", "minecraft:kelp", "minecraft:melon_slice"],
  )
})

console.info('Loaded recipes for Ars Nouveau')