ServerEvents.recipes((event) => {
	event.shaped(
	"8x forbidden_arcanus:darkstone",
		[
			"BBB",
			"BAB",
			"BBB",
		],
		{
			A: "forbidden_arcanus:dark_matter",
			B: "minecraft:stone"
		},
	)
	event.remove({ id: 'forbidden_arcanus:mundabitur_dust' })
		event.recipes.create.crushing('forbidden_arcanus:mundabitur_dust', 'forbidden_arcanus:rune')
	event.recipes.ars_nouveau.imbuement(
		'ars_nouveau:source_gem',
		'forbidden_arcanus:rune',
		500,
		['minecraft:pink_dye', '#quark:corundum', 'minecraft:redstone'],
	)
	event.recipes.ars_nouveau.imbuement(
		'minecraft:glass',
		'forbidden_arcanus:arcane_crystal',
		1000,
		[],
	)
})