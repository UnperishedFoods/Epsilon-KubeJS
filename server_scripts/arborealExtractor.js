ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:tree_extractor',
    trunk: 'ars_nouveau:blue_archwood_log',
    leaves: 'ars_nouveau:blue_archwood_leaves',
    result: { fluid: 'kubejs:archwood_sap', amount: 25 }
  })
  event.custom({
    type: 'thermal:tree_extractor',
    trunk: 'ars_nouveau:red_archwood_log',
    leaves: 'ars_nouveau:red_archwood_leaves',
    result: { fluid: 'kubejs:archwood_sap', amount: 25 }
  })
  event.custom({
    type: 'thermal:tree_extractor',
    trunk: 'ars_nouveau:purple_archwood_log',
    leaves: 'ars_nouveau:purple_archwood_leaves',
    result: { fluid: 'kubejs:archwood_sap', amount: 25 }
  })
  event.custom({
    type: 'thermal:tree_extractor',
    trunk: 'ars_nouveau:green_archwood_log',
    leaves: 'ars_nouveau:green_archwood_leaves',
    result: { fluid: 'kubejs:archwood_sap', amount: 25 }
  })
})