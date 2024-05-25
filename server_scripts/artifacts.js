ServerEvents.recipes((event) => {
  event.smithing(
    "artifacts:everlasting_beef", // arg 1: output
    "forbidden_arcanus:darkstone_upgrade_smithing_template", // arg 2: template
    "minecraft:beef", // arg 3: the item to be upgraded
    "forbidden_arcanus:eternal_stella", // arg 4: the upgrade item
  );
  event.shaped(
    "artifacts:umbrella",
    [
      "ABA",
      " C ",
      " C ",
    ],
    {
      A: "minecraft:red_wool",
      B: "minecraft:white_wool",
      C: "minecraft:stick",
    },
  );
  event.shaped(
    "artifacts:plastic_drinking_hat",
    [
      "A A",
      "BCB",
      "   ",
    ],
    {
      A: "minecraft:glass_bottle",
      B: "cyclic:fluid_pipe",
      C: "minecraft:leather_helmet",
    },
  );
  event.shaped(
    "artifacts:novelty_drinking_hat",
    [
      "A A",
      "BCB",
      "   ",
    ],
    {
      A: "minecraft:glass_bottle",
      B: "cyclic:fluid_pipe",
      C: "minecraft:diamond_helmet",
    },
  );
  event.shaped(
    "artifacts:snorkel",
    [
      "C  ",
      "ABA",
      "   ",
    ],
    {
      A: "minecraft:glass",
      B: "minecraft:string",
      C: "minecraft:bamboo",
    },
  );
  event.shaped(
    "artifacts:night_vision_goggles",
    [
      "CDC",
      "ABA",
      "   ",
    ],
    {
      A: "minecraft:lime_glass",
      B: "minecraft:string",
      C: "minecraft:redstone_lamp",
      D: "cyclic:energy_pipe",
    },
  );
  event.shaped(
    "artifacts:villager_hat",
    [
      "AAA",
      "BCB",
      "   ",
    ],
    {
      A: "minecraft:hay_block",
      B: "minecraft:emerald",
      C: "minecraft:leather_helmet",
    },
  );
  event.shaped(
    "artifacts:superstitious_hat",
    [
      " A ",
      " B ",
      "BBB",
    ],
    {
      A: "minecraft:gold_block",
      B: "minecraft:emerald_block",
    },
  )
  event.shaped(
    "artifacts:cowboy_hat",
    [
      "   ",
      " A ",
      "AAA",
    ],
    {
      A: "minecraft:leather",
    },
  )
  event.shaped(
    "artifacts:anglers_hat",
    [
      " BA",
      "B B",
      "   ",
    ],
    {
      A: "minecraft:salmon",
      B: "minecraft:cod",
    },
  )
  event.shaped(
    "artifacts:lucky_scarf",
    [
      "B  ",
      "BAB",
      "  B",
    ],
    {
      A: "minecraft:emerald",
      B: "minecraft:lime_wool",
    },
  )
  event.shaped(
    "artifacts:scarf_of_invisibility",
    [
      "B  ",
      "BAB",
      "  B",
    ],
    {
      A: "minecraft:diamond",
      B: "minecraft:blue_wool",
    },
  )
  event.shaped(
    "artifacts:cross_necklace",
    [
      "AAA",
      "A A",
      " B ",
    ],
    {
      A: "minecraft:gold_nugget",
      B: "minecraft:gold_ingot",
    },
  )
  event.shaped(
    "artifacts:panic_necklace",
    [
      "AAA",
      "A A",
      " B ",
    ],
    {
      A: "minecraft:string",
      B: "minecraft:sugar",
    },
  )
  event.shaped(
    "artifacts:shock_pendant",
    [
      "AAA",
      "A A",
      " B ",
    ],
    {
      A: "minecraft:string",
      B: "minecraft:lightning_rod",
    },
  )
  event.shaped(
    "artifacts:flame_pendant",
    [
      "AAA",
      "A A",
      " B ",
    ],
    {
      A: "minecraft:iron_nugget",
      B: "minecraft:flint_and_steel",
    },
  )
  event.shaped(
    "artifacts:thorn_pendant",
    [
      "AAA",
      "A A",
      " B ",
    ],
    {
      A: "minecraft:string",
      B: "supplementaries:bamboo_spikes",
    },
  )
  event.shaped(
    "artifacts:charm_of_sinking",
    [
      "AAA",
      "A A",
      " B ",
    ],
    {
      A: "minecraft:leather",
      B: "minecraft:lapis_lazuli",
    },
  )
  event.shaped(
    "artifacts:cloud_in_a_bottle",
    [
      "BAB",
      "BCB",
      "BBB",
    ],
    {
      A: "#minecraft:logs",
      B: "minecraft:glass",
      C: "quark:bottled_cloud",
    },
  )
  event.shaped(
    "artifacts:obsidian_skull",
    [
      "AAA",
      "BAB",
      "A A",
    ],
    {
      A: "minecraft:obsidian",
      B: "minecraft:blaze_powder",
    },
  )
  event.shaped(
    "artifacts:antidote_vessel",
    [
      "BBB",
      "ACA",
      "AAA",
    ],
    {
      A: "#minecraft:terracotta",
      B: "create:golden_sheet",
      C: "minecraft:milk_bucket",
    },
  )
  event.shaped(
    "artifacts:universal_attractor",
    [
      "A A",
      "B B",
      "BBB",
    ],
    {
      A: "create:golden_sheet",
      B: "minecraft:red_wool",
    },
  )
  event.shaped(
    "artifacts:crystal_heart",
    [
      "AAA",
      "ABA",
      " A ",
    ],
    {
      A: "minecraft:red_stained_glass",
      B: "minecraft:diamond_block",
    },
  )
  event.shaped(
    "artifacts:helium_flamingo",
    [
      "AAA",
      "A A",
      "ABA",
    ],
    {
      A: "create_dd:rubber",
      B: "minecraft:pink_dye",
    },
  )
  event.shaped(
    "artifacts:chorus_totem",
    [
      " B ",
      "CAC",
      " C ",
    ],
    {
      A: "minecraft:totem_of_undying",
      B: "minecraft:ender_pearl",
      C: "minecraft:chrous_fruit",
    },
  )
  event.shaped(
    "artifacts:digging_claws",
    [
      "BAA",
      "B A",
      "BAA",
    ],
    {
      A: "minecraft:leather",
      B: "minecraft:lapis_block",
    },
  )
  event.shaped(
    "artifacts:feral_claws",
    [
      "BAA",
      "B A",
      "BAA",
    ],
    {
      A: "minecraft:leather",
      B: "minecraft:emerald",
    },
  )
  event.shaped(
    "artifacts:power_glove",
    [
      "BBB",
      "BBB",
      " A ",
    ],
    {
      A: "minecraft:stone",
      B: "minecraft:gold_ingot",
    },
  )
  event.shaped(
    "artifacts:fire_gauntlet",
    [
      "BBB",
      "BCB",
      " A ",
    ],
    {
      A: "minecraft:stone",
      B: "minecraft:magma_block",
      C: "minecraft:blaze_powder",
    },
  )
  event.shaped(
    "artifacts:pocket_piston",
    [
      " B ",
      " A ",
      "   ",
    ],
    {
      A: "minecraft:sticky_piston",
      B: "minecraft:stick",
    },
  )
  event.shaped(
    "artifacts:vampiric_glove",
    [
      "   ",
      "ABA",
      "   ",
    ],
    {
      A: "forbidden_arcanus:bat_wing",
      B: "aether:leather_gloves",
    },
  )
  event.shaped(
    "artifacts:golden_hook",
    [
      "BB ",
      " B ",
      " A ",
    ],
    {
      A: "create_dd:rubber",
      B: "minecraft:gold_ingot",
    },
  )
  event.shaped(
    "artifacts:onion_ring",
    [
      "AAA",
      "A A",
      "AAA",
    ],
    {
      A: "farmersdelight:onion",
    },
  )
  event.shaped(
    "artifacts:pickaxe_heater",
    [
      "AAA",
      "ABA",
      " C ",
    ],
    {
      A: "minecraft:stone",
      B: "minecraft:blaze_powder",
      C: "minecraft:furnace",
    },
  )
  event.shaped(
    "artifacts:aqua_dashers",
    [
      "   ",
      "BCB",
      "A A",
    ],
    {
      A: "create_dd:rubber",
      B: "minecraft:leather",
      C: "minecraft:feather",
    },
  )
  event.shaped(
    "artifacts:bunny_hoppers",
    [
      "   ",
      "B B",
      "A A",
    ],
    {
      A: "minecraft:rabbit_foot",
      B: "#minecraft:wool",
    },
  )
  event.shaped(
    "artifacts:kitty_slippers",
    [
      "   ",
      "A A",
      "B B",
    ],
    {
      A: "#minecraft:wool",
      B: "minecraft:phantom_membrane",
    },
  )
  event.shaped(
    "artifacts:running_shoes",
    [
      "   ",
      "A A",
      "B B",
    ],
    {
      A: "minecraft:red_wool",
      B: "create_dd:rubber",
    },
  )
  event.shaped(
    "artifacts:snowshoes",
    [
      "   ",
      "BAB",
      "C C",
    ],
    {
      A: "minecraft:string",
      B: "#minecraft:wool",
      C: "supplementaries:bamboo_spikes",
    },
  )
  event.shaped(
    "artifacts:steadfast_spikes",
    [
      "   ",
      "B B",
      "A A",
    ],
    {
      A: "cyclic:spikes_iron",
      B: "#minecraft:wool",
    },
  )
  event.shaped(
    "artifacts:flippers",
    [
      "   ",
      "A A",
      "B B",
    ],
    {
      A: "create_dd:rubber",
      B: "minecraft:lapis_lazuli",
    },
  )
  event.shaped(
    "artifacts:rooted_boots",
    [
      "   ",
      "B B",
      "A A",
    ],
    {
      A: "minecraft:hanging_roots",
      B: "minecraft:leather",
    },
  )
  event.shaped(
    "artifacts:whoopee_cushion",
    [
      "AAA",
      "ABA",
      " A ",
    ],
    {
      A: "create_dd:rubber",
      B: "minecraft:pink_dye",
    },
  )
});