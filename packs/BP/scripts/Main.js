import { world, system } from "@minecraft/server";

world.afterEvents.chatSend.subscribe(ev => {
	let message = ev.message
	if (message == 'show_objectives') {
		ev.sender.runCommandAsync(`title @s title legend.objectives.§lObjectives§r:\n- Reach the Crypt`)
	}
})