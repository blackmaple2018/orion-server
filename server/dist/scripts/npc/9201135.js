/* Mia Warp	So people aren't stuck in Nath.*/var status = -1;var maps = Array(550000000, 551000000);var names = Array("Trendzone Metropolis(10,000 mesos)", "Kampung Village (50,000 mesos)");var cost = Array(10000, 50000);var selectedMap = -1;var mapId = 0;function start() {	status++;    action(1, 0, 0);}function action(mode, type, selection){	cm.debug('mode: ' + mode + " type: " + type + " selection: " + selection + " status: " + status);	mapId = cm.getPlayer().getMapId();	if(mode == 0){		cm.sendNext("There's a lot to see in this town, too. Let me know if you want to go somewhere else.");		cm.dispose();		return;	}	if((mapId == maps[0] || mapId == maps[1]) && status < 3){				status = 3;		cm.sendYesNo("Would you like to travel back?");				return;	}	if(type == 0){		cm.sendSimple("Where whould you like to travel?#l\r\n#L1#" + names[0] + "\r\n#L2#" + names[1] + "#k#l");		return;	}	if(selection == 1 && status < 3){		status = 0;		cm.sendYesNo("Would you like to travel to Trendzone Metropolis? To over Trendzone Metropolis, it will cost you 10,000 mesos. Would you like to go there now?");		return;	}	if(selection == 2 && status < 3){		status = 1;		cm.sendYesNo("Would you like to travel to Kampung Village? To over Kampung Village, it will cost you 50,000 mesos. Would you like to go there now?");		return;	}	if(status == 0){		if(cm.getPlayer().getMeso() < cost[0]){			cm.sendNext("You don't have enought mesos...");		}		else{			cm.warp(maps[0]);			cm.getPlayer().gainMeso(-cost[0], true);			cm.dispose();			return;		}	}	else if(status == 1){		if(cm.getPlayer().getMeso() < cost[1]){			cm.sendNext("You don't have enought mesos...");		}else{			cm.warp(maps[1]);			cm.getPlayer().gainMeso(-cost[1], true);			cm.dispose();			return;					}	}	else if(status == 3){		cm.warp(540000000);		cm.dispose();		return;	}		}