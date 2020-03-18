var masterystudies = {
	initCosts: {
		time: {241: 2e71, 251: 5e71, 252: 5e71, 253: 5e71, 261: 2e71, 262: 2e71, 263: 2e71, 264: 2e71, 265: 2e71, 266: 2e71, 271: 2.7434842249657063e76, 272: 2.7434842249657063e76, 273: 2.7434842249657063e76, 281: 6.858710562414266e76, 282: 6.858710562414266e76, 291: 2.143347050754458e77, 292: 2.143347050754458e77, 301: 8.573388203017832e77, 302: 2.6791838134430725e78, 303: 8.573388203017832e77, 311: 8.573388203017832e77, 312: 8.573388203017832e77, 321: 2.6791838134430727e76, 322: 9.324815538194444e77, 323: 2.6791838134430727e76, 331: 1.0172526041666666e79, 332: 1.0172526041666666e79, 341: 9.5367431640625e78, 342: 1.0172526041666666e79, 343: 1.0172526041666666e79, 344: 9.5367431640625e78, 351: 2.1192762586805557e79, 361: 1.5894571940104167e79, 362: 1.5894571940104167e79, 371: 2.1192762586805557e79, 372: 6.622738308376736e79, 373: 2.1192762586805557e79, 381: 6.622738308376736e79, 382: 6.622738308376736e79, 383: 6.622738308376736e79, 391: 8.27842288547092e79, 392: 8.27842288547092e79, 393: 8.27842288547092e79, 401: 4.967053731282552e80, 402: 8.278422885470921e80, 411: 1.3245476616753473e71, 412: 1.655684577094184e71, 421: 1.9868214925130208e72, 431: 1.1037897180627893e75},
		time_legacy: {241: 1e71, 251: 2e71, 252: 2e71, 253: 2e71, 261: 5e71, 262: 5e71, 263: 5e71, 264: 5e71, 265: 5e71, 266: 5e71},
		ec: {13: 1.7777777777777776e72, 14: 1.7777777777777776e72},
		ec_legacy: {13: 1e72, 14: 1e72},
		dil: {7: 2e82, 8: 2e84, 9: 4e85, 10: 4e87, 11: 3e90, 12: 3e92, 13: 1e94, 14: 1e97},
		dil_legacy: {13: 1e95, 14: 1e98}
	},
	costs: {
		time: {},
		time_mults: {241: 1, 251: 2.5, 252: 2.5, 253: 2.5, 261: 6, 262: 6, 263: 6, 264: 6, 265: 6, 266: 6, 271: 2, 272: 2, 273: 2, 281: 4, 282: 4, 291: 1, 292: 1, 301: 2, 302: 131072, 303: 2, 311: 64, 312: 64, 321: 2, 322: 2, 323: 2, 331: 2, 332: 2, 341: 1, 342: 1, 343: 1, 344: 1, 351: 4, 361: 1, 362: 1, 371: 2, 372: 2, 373: 2, 381: 1, 382: 1, 383: 2, 391: 1, 392: 1, 393: 1, 401: 1e10, 402: 1e10, 411: 1, 412: 1, 421: 1, 431: 1},
		time_mults_legacy: {},
		ec: {},
		dil: {}
	},
	costMult: 1,
	ecReqs: {
		13: function() {
			let comps = ECTimesCompleted("eterc13")
			return 728e3 + (tmp.ngp3l ? 6000 : (4000 + 500 * comps)) * comps
		},
		14: function() {
			return 255e5 + 9e5 * ECTimesCompleted("eterc14")
		}
	},
	ecReqsStored: {},
	ecReqDisplays: {
		13: function() {
			return getFullExpansion(masterystudies.ecReqsStored[13]) + " dimension boosts"
		},
		14: function() {
			return getFullExpansion(masterystudies.ecReqsStored[14]) + "% replicate chance"
		}
	},
	unlockReqConditions: {
		7: function() {
			return tmp.ngp3l || quantumWorth.gte(50)
		},
		8: function() {
			return tmp.qu.electrons.amount >= 16750
		},
		9: function() {
			return QCIntensity(8) >= 1
		},
		10: function() {
			return tmp.qu.pairedChallenges.completed == 4
		},
		11: function() {
			return tmp.eds[1].perm == 10
		},
		12: function() {
			return tmp.eds[8].perm >= 10
		},
		13: function() {
			return tmp.qu.nanofield.rewards >= 16
		},
		14: function() {
			return player.achievements.includes("ng3p34")
		}
	},
	unlockReqDisplays: {
		7: function() {
			if (!tmp.ngp3l) return "50 quantum worth"
		},
		8: function() {
			return getFullExpansion(16750) + " electrons"
		},
		9: function() {
			return "Complete Quantum Challenge 8"
		},
		10: function() {
			return "Complete Paired Challenge 4"
		},
		11: function() {
			return getFullExpansion(10) + " worker replicants"
		},
		12: function() {
			return getFullExpansion(10) + " Eighth Emperor Dimensions"
		},
		13: function() {
			return getFullExpansion(16) + " Nanofield rewards"
		},
		14: function() {
			return "Get 'The Challenging Day' achievement"
		}
	},
	types: {t: "time", ec: "ec", d: "dil"},
	studies: [],
	timeStudies: [],
	timeStudyDescs: {
		241: "The IP mult multiplies IP gain by 2.2x per upgrade.",
		251: "Remote antimatter galaxies scaling starts 1 galaxy later per 3,000 dimension boosts.",
		252: "Remote antimatter galaxies scaling starts 1 galaxy later per 7 free galaxies.",
		253: function() {
			return "Remote antimatter galaxies scaling starts "+(tmp.ngp3l?"20 galaxies later per 9 extra replicated galaxies.":"1 galaxy later per 4 total replicated galaxies.")
		},
		261: "Dimension boost costs scale by another 1 less.",
		262: "Dimension boosts boost Meta Dimensions at reduced rate.",
		263: "Meta-dimension boosts boost dilated time production.",
		264: "Gain more tachyon particles based on your normal galaxies.",
		265: "Replicate chance upgrades can go over 100%.",
		266: "Reduce the post-400 max replicated galaxy cost scaling.",
		271: "You can buy beyond 1ms interval upgrades but the cost starts to increase faster.",
		272: "Pick all paths on all 3-way splits in time studies.",
		273: "Replicate chance boosts itself.",
		281: "Replicanti multiplier boosts DT production at greatly reduced rate.",
		282: "Replicanti multiplier boosts Meta Dimensions at greatly reduced rate.",
		291: "You gain 1% of your EP gained on eternity each second.",
		292: "You can gain tachyon particles without disabling dilation.",
		301: "Remote cost scaling starts 1 galaxy later per 4.15 extra replicated galaxies.",
		302: "Pick all time studies before mastery studies.",
		303: "Meta Dimensions are stronger based on your galaxies.",
		311: "Replicanti boost to all Infinity Dimensions is 17.3x stronger.",
		312: "Meta-dimension boosts are 4.5% stronger and cost scale by 1 less.",
		321: "Buff multiplier per 10 normal Dimensions to <span id='321effect'></span>x if it is 1x.",
		322: "Tickspeed boosts DT production at greatly reduced rate.",
		323: "Cancel dilation penalty for Normal Dimensions boost from replicanti.",
		331: "Dimension Supersonic scaling starts 340,000 later and makes cost increases slower by 3 less.",
		332: "You gain replicanti faster based on your normal galaxies.",
		341: "Preons boost DT production at reduced rate.",
		342: "All replicated galaxies are stronger and use the same formula.",
		343: "Free galaxies are as strong as a normal replicated galaxy.",
		344: "Replicated galaxies are more effective based on your preons.",
		351: "Time Shards boost all Meta Dimensions.",
		361: "Hatch speed is faster based on your tachyon particles.",
		362: function() {
			return "Reduce the softcap for preon boost"+(player.aarexModifications.ngumuV?" and preons reduce green power effect.":".")
		},
		371: "Hatch speed is faster based on your extra replicated galaxies.",
		372: "Hatch speed is faster based on your time shards.",
		373: "You get more preons based on your galaxies.",
		381: "Hatch speed is faster based on your tickspeed reduction multiplier.",
		382: "Eighth Dimensions boost Meta Dimensions.",
		383: "Blue power boosts Meta Dimensions.",
		391: "Hatch speed is faster based on your meta-antimatter.",
		392: "Preons boost all Emperor Dimensions.",
		393: "Workers boost Meta Dimensions.",
		401: "The production of preon anti-energy is slower based on your preons.",
		402: "Emperor Dimensions and hatch speed are faster by 25x.",
		411: "The production of preon energy is faster based on your replicants.",
		412: "Preon effect is 25% stronger.",
		421: "Tickspeed boosts preon energy production.",
		431: "Branches are faster based on your free galaxies."
	},
	hasStudyEffect: [251, 252, 253, 262, 263, 264, 273, 281, 282, 301, 303, 322, 332, 341, 344, 351, 361, 371, 372, 373, 381, 382, 383, 391, 392, 393, 401, 411, 421, 431],
	studyEffectDisplays: {
		251: function(x) {
			return "+" + getFullExpansion(Math.floor(x))
		},
		252: function(x) {
			return "+" + getFullExpansion(Math.floor(x))
		},
		253: function(x) {
			return "+" + getFullExpansion(Math.floor(x))
		},
		273: function(x) {
			return "^" + shorten(x)
		},
		301: function(x) {
			return "+" + getFullExpansion(Math.floor(x))
		},
		332: function(x) {
			return shortenDimensions(x) + "x"
		},
		344: function(x) {
			return (x * 100 - 100).toFixed(2) + "%"
		},
		431: function(x) {
			let msg = shorten(x) + "x"
			if (shiftDown && tmp.eg431) msg += ", Galaxy amount: " + getFullExpansion(Math.floor(player.dilation.freeGalaxies)) + "+" + getFullExpansion(Math.floor(tmp.eg431))
			return msg
		}
	},
	ecsUpTo: 14,
	unlocksUpTo: 14,
	allConnections: {241: [251, 253, 252], 251: [261, 262], 252: [263, 264, "d7"], 253: [265, 266], 261: ["ec13"], 262: ["ec13"], 263: ["ec13"], 264: ["ec14"], 265: ["ec14"], 266: ["ec14"], d7: [272], 271: [281], 272: [271, 273, 281, 282, "d8"], 273: [282], d8: ["d9"], d9: [291, 292, 302], 291: [301], 292: [303], 301: [311], 302: ["d10"], 303: [312], 311: [321], 312: [323], d10: [322], 322: [331, 332], 331: [342], 332: [343], 342: [341], 343: [344], 344: [351], 351: ["d11"], d11: [361, 362], 361: [371], 362: [373], 371: [372], 372: [381], 373: [382], 381: [391], 382: [383], 383: [393], 391: [392], 393: [392], 392: ["d12"], d12: [401, 402], 401: [411], 402: [412], 411: [421], 412: ["d13"], 421: ["d13"], d13: [431], 431: ["d14"]},
	allUnlocks: {
		d7: function() {
			return quantumed
		},
		322: function() {
			return player.masterystudies.includes("d10") || ghostified
		},
		361: function() {
			return player.masterystudies.includes("d11") || ghostified
		},
		r40: function() {
			return player.masterystudies.includes("d12") || ghostified
		},
		r43: function() {
			return player.masterystudies.includes("d13") || ghostified
		}
	},
	unlocked: [],
	spentable: [],
	latestBoughtRow: 0,
	ttSpent: 0
}

function enterMasteryPortal() {
	if (player.dilation.upgrades.includes("ngpp6")) {
		recordUpDown(1)
		showEternityTab("masterystudies")
	}
}

function exitMasteryPortal() {
	recordUpDown(2)
	showEternityTab("timestudies")
}

function convertMasteryStudyIdToDisplay(x) {
	x=x.toString()
	var ec=x.split("ec")[1]
	var dil=x.split("d")[1]
	return ec?"ec"+ec+"unl":dil?"dilstudy"+dil:"timestudy"+x
}

function updateMasteryStudyCosts() {
	var oldBought=masterystudies.bought
	masterystudies.latestBoughtRow=0
	masterystudies.costMult=1
	masterystudies.bought=0
	masterystudies.ttSpent=0
	for (id=0;id<player.masterystudies.length;id++) {
		var t=player.masterystudies[id].split("t")[1]
		if (t) {
			setMasteryStudyCost(t,"t")
			masterystudies.ttSpent+=masterystudies.costs.time[t]
			masterystudies.costMult*=getMasteryStudyCostMult(t)
			masterystudies.latestBoughtRow=Math.max(masterystudies.latestBoughtRow,Math.floor(t/10))
			masterystudies.bought++
		}
	}
	for (id=0;id<masterystudies.timeStudies.length;id++) {
		var name=masterystudies.timeStudies[id]
		if (!masterystudies.unlocked.includes(name)) break
		if (!player.masterystudies.includes("t"+name)) setMasteryStudyCost(name,"t")
	}
	for (id=13;id<=masterystudies.ecsUpTo;id++) {
		if (!masterystudies.unlocked.includes("ec"+id)) break
		setMasteryStudyCost(id,"ec")
		masterystudies.ecReqsStored[id]=masterystudies.ecReqs[id]()
	}
	for (id=7;id<=masterystudies.unlocksUpTo;id++) {
		if (!masterystudies.unlocked.includes("d"+id)) break
		setMasteryStudyCost(id,"d")
	}
	if (oldBought!=masterystudies.bought) updateSpentablemasterystudies()
	if (player.eternityChallUnlocked>12) masterystudies.ttSpent+=masterystudies.costs.ec[player.eternityChallUnlocked]
	if (masterystudies.bought>=48) giveAchievement("The Theory of Ultimate Studies")
	updateMasteryStudyTextDisplay()
}

function setupmasterystudies() {
	masterystudies.studies=[241]
	var map=masterystudies.studies
	var part
	var pos=0
	while (true) {
		var id=map[pos]
		if (!id) {
			if (!part) break
			map.push(part)
			id=part
			part=""
		}
		if (typeof(id)=="number") masterystudies.timeStudies.push(id)
		var paths=masterystudies.allConnections[id]
		if (paths) for (var x=0;x<paths.length;x++) {
			var y=paths[x]
			if (!map.includes(y)) {
				if (y.toString()[0]=="d") part=y
				else map.push(y)
			}
		}
		pos++
	}
	for (id=0;id<masterystudies.timeStudies.length;id++) {
		var name=masterystudies.timeStudies[id]
		var html="<span id='ts"+name+"Desc'></span>"
		if (masterystudies.hasStudyEffect.includes(name)) html+="<br>Currently: <span id='ts"+name+"Current'></span>"
		html+="<br>Cost: <span id='ts"+name+"Cost'></span> Time Theorems"
		document.getElementById("timestudy"+name).innerHTML=html
	}
}

function updateUnlockedmasterystudies() {
	var unl=true
	var rowNum=0
	masterystudies.unlocked=[]
	for (var x=0;x<masterystudies.studies.length;x++) {
		var id=masterystudies.studies[x]
		var divid=convertMasteryStudyIdToDisplay(id)
		if (Math.floor(id/10)>rowNum) {
			rowNum=Math.floor(id/10)
			if (masterystudies.allUnlocks["r"+rowNum]&&!masterystudies.allUnlocks["r"+rowNum]()) unl=false
			document.getElementById(divid).parentElement.parentElement.parentElement.parentElement.style=unl?"":"display: none !important"
			if (unl) masterystudies.unlocked.push("r"+rowNum)
		} else if (divid[0]=="d") document.getElementById(divid).parentElement.parentElement.parentElement.parentElement.style=unl?"":"display: none !important"
		if (masterystudies.allUnlocks[id]&&!masterystudies.allUnlocks[id]()) unl=false
		document.getElementById(divid).style.visibility=unl?"":"hidden"
		if (unl) masterystudies.unlocked.push(id)
	}
}

function updateSpentablemasterystudies() {
	masterystudies.spentable=[]
	addSpentablemasterystudies(241)
}

function addSpentablemasterystudies(x) {
	var map=[x]
	var part
	var pos=0
	while (true) {
		var id=map[pos]
		if (!id) break
		if (masterystudies.unlocked.includes(id)&&!masterystudies.spentable.includes(id)) masterystudies.spentable.push(id)
		if (player.masterystudies.includes(typeof(id)=="number"?"t"+id:id)) {
			var paths=masterystudies.allConnections[id]
			if (paths) for (var x=0;x<paths.length;x++) map.push(paths[x])
		}
		pos++
	}
}

function setMasteryStudyCost(id,type) {
	let d=masterystudies.initCosts
	type=masterystudies.types[type]
	masterystudies.costs[type][id]=((tmp.ngp3l&&d[type+"_legacy"][id])||d[type][id]||0)*masterystudies.costMult
}

function getMasteryStudyCostMult(id) {
	return (tmp.ngp3l&&masterystudies.costs.time_mults_legacy[id])||masterystudies.costs.time_mults[id]||1
}

function buyMasteryStudy(type, id, quick=false) {
	if (quick) setMasteryStudyCost(id,type)
	if (canBuyMasteryStudy(type, id)) {
		player.timestudy.theorem-=masterystudies.costs[masterystudies.types[type]][id]
		if (type=='ec') {
			player.eternityChallUnlocked=id
			player.etercreq=id
			updateEternityChallenges()
			delete tmp.qu.autoECN
		} else player.masterystudies.push(type+id)
		if (type=="t") {
			addSpentablemasterystudies(id)
			if (id==302) maybeShowFillAll()
			if (quick) {
				masterystudies.costMult*=getMasteryStudyCostMult(id)
				masterystudies.latestBoughtRow=Math.max(masterystudies.latestBoughtRow,Math.floor(id/10))
			}
			if (id==241&&!GUBought("gb3")) {
				var otherMults=1
				if (player.achievements.includes("r85")) otherMults*=4
				if (player.achievements.includes("r93")) otherMults*=4
				var old=getIPMultPower()
				ipMultPower=2.2
				player.infMult=player.infMult.div(otherMults).pow(Math.log10(getIPMultPower())/Math.log10(old)).times(otherMults)
			}
			if (id==266&&player.replicanti.gal>399) {
				var gal=player.replicanti.gal
				player.replicanti.gal=0
				player.replicanti.galCost=new Decimal(player.galacticSacrifice!=undefined?1e110:1e170)
				player.replicanti.galCost=getRGCost(gal)
				player.replicanti.gal=gal
			}
			if (id==383) updateColorCharge()
		}
		if (type=="d") {
			if (id==7) {
				showTab("quantumtab")
				showQuantumTab("electrons")
				updateElectrons()
			}
			if (id==8||id==9||id==14) {
				showTab("challenges")
				showChallengesTab("quantumchallenges")
				updateQuantumChallenges()
				if (id==9) updateGluons()
			}
			if (id==10) {
				showTab("quantumtab")
				showQuantumTab("replicants")
				document.getElementById("timestudy322").style.display=""
				updateReplicants()
			}
			if (id==11) {
				showTab("dimensions")
				showDimTab("emperordimensions")
				document.getElementById("timestudy361").style.display=""
				document.getElementById("timestudy362").style.display=""
				document.getElementById("edtabbtn").style.display=""
				updateReplicants()
			}
			if (id==12) {
				showTab("quantumtab")
				showQuantumTab("nanofield")
				document.getElementById("nanofieldtabbtn").style.display = ""
			}
			if (id==13) {
				showTab("quantumtab")
				showQuantumTab("tod")
				updateColorCharge()
				updateTODStuff()
			}
		}
		if (!quick) {
			if (type=="t") {
				if (id==302) fillAll()
				masterystudies.bought++
			} else if (type=="ec") {
				showTab("challenges")
				showChallengesTab("eternitychallenges")
			} else if (type=="d") {
				updateUnlockedmasterystudies()
				updateSpentablemasterystudies()
			}
			updateMasteryStudyCosts()
			updateMasteryStudyButtons()
			drawMasteryTree()
		}
	}
}

function canBuyMasteryStudy(type, id) {
	if (type=='t') {
		if (inQCModifier("sm")&&masterystudies.bought>=20) return false
		if (player.timestudy.theorem<masterystudies.costs.time[id]||player.masterystudies.includes('t'+id)||player.eternityChallUnlocked>12||!masterystudies.timeStudies.includes(id)) return false
		if (masterystudies.latestBoughtRow>Math.floor(id/10)) return false
		if (!masterystudies.spentable.includes(id)) return false
	} else if (type=='d') {
		if (player.timestudy.theorem<masterystudies.costs.dil[id]||player.masterystudies.includes('d'+id)) return false
		if (!ghostified && !(masterystudies.unlockReqConditions[id] && masterystudies.unlockReqConditions[id]())) return false
		if (!masterystudies.spentable.includes("d"+id)) return false
	} else {
		if (player.timestudy.theorem<masterystudies.costs.ec[id]||player.eternityChallUnlocked) return false
		if (!masterystudies.spentable.includes("ec"+id)) return false
		if (player.etercreq==id) return true
		if (id==13) return player.resets>=masterystudies.ecReqsStored[13]
		return Math.round(player.replicanti.chance*100)>=masterystudies.ecReqsStored[14]
	}
	return true
}
	
function updateMasteryStudyButtons() {
	if (!tmp.ngp3) return
	for (id=0;id<masterystudies.timeStudies.length;id++) {
		var name=masterystudies.timeStudies[id]
		var div=document.getElementById("timestudy"+name)
		if (!masterystudies.unlocked.includes(name)) break
		if (player.masterystudies.includes("t"+name)) div.className="timestudybought"
		else if (canBuyMasteryStudy('t', name)) div.className="timestudy"
		else div.className="timestudylocked"
		if (masterystudies.hasStudyEffect.includes(name)) {
			var mult=getMTSMult(name, "ms")
			document.getElementById("ts"+name+"Current").textContent=(masterystudies.studyEffectDisplays[name]?masterystudies.studyEffectDisplays[name](mult):shorten(mult)+"x")
		}
	}
	for (id=13;id<=masterystudies.ecsUpTo;id++) {
		var div=document.getElementById("ec"+id+"unl")
		if (!masterystudies.unlocked.includes("ec"+id)) break
		if (player.eternityChallUnlocked==id) div.className="eternitychallengestudybought"
		else if (canBuyMasteryStudy('ec', id)) div.className="eternitychallengestudy"
		else div.className="timestudylocked"
	}
	for (id=7;id<=masterystudies.unlocksUpTo;id++) {
		var div=document.getElementById("dilstudy"+id)
		if (!masterystudies.unlocked.includes("d"+id)) break
		if (player.masterystudies.includes("d"+id)) div.className="dilationupgbought"
		else if (canBuyMasteryStudy('d', id)) div.className="dilationupg"
		else div.className="timestudylocked"
	}
}

function updateMasteryStudyTextDisplay() {
	if (!player.masterystudies) return
	document.getElementById("costmult").textContent=shorten(masterystudies.costMult)
	document.getElementById("totalmsbought").textContent=masterystudies.bought
	document.getElementById("totalttspent").textContent=shortenDimensions(masterystudies.ttSpent)
	for (id=0;id<masterystudies.timeStudies.length;id++) {
		var name=masterystudies.timeStudies[id]
		if (!masterystudies.unlocked.includes(name)) break
		document.getElementById("ts"+name+"Cost").textContent=shorten(masterystudies.costs.time[name])
	}
	for (id=13;id<=masterystudies.ecsUpTo;id++) {
		if (!masterystudies.unlocked.includes("ec"+id)) break
		document.getElementById("ec"+id+"Cost").textContent="Cost: "+shorten(masterystudies.costs.ec[id])+" Time Theorems"
		document.getElementById("ec"+id+"Req").style.display=player.etercreq==id?"none":"block"
		document.getElementById("ec"+id+"Req").textContent="Requirement: "+masterystudies.ecReqDisplays[id]()
	}
	for (id=7;id<=masterystudies.unlocksUpTo;id++) {
		if (!masterystudies.unlocked.includes("d"+id)) break
		var req=masterystudies.unlockReqDisplays[id]&&masterystudies.unlockReqDisplays[id]()
		document.getElementById("ds"+id+"Cost").textContent="Cost: "+shorten(masterystudies.costs.dil[id])+" Time Theorems"
		if (req) document.getElementById("ds"+id+"Req").innerHTML=ghostified||!req?"":"<br>Requirement: "+req
	}
	if (quantumed) document.getElementById("321effect").textContent=shortenCosts(new Decimal("1e430"))
}

var occupied
function drawMasteryBranch(id1, id2) {
	var type1=id1.split("ec")[1]?"c":id1.split("dil")[1]?"d":id1.split("time")[1]?"t":undefined
	var type2=id2.split("ec")[1]?"c":id2.split("dil")[1]?"d":id2.split("time")[1]?"t":undefined
	var start=document.getElementById(id1).getBoundingClientRect();
	var end=document.getElementById(id2).getBoundingClientRect();
	var x1=start.left + (start.width / 2) + (document.documentElement.scrollLeft || document.body.scrollLeft);
	var y1=start.top + (start.height / 2) + (document.documentElement.scrollTop || document.body.scrollTop);
	var x2=end.left + (end.width / 2) + (document.documentElement.scrollLeft || document.body.scrollLeft);
	var y2=end.top + (end.height / 2) + (document.documentElement.scrollTop || document.body.scrollTop);
	msctx.lineWidth=15;
	msctx.beginPath();
	var drawBoughtLine=true
	if (type1=="t"||type1=="d") drawBoughtLine=player.masterystudies.includes(type1+id1.split("study")[1])
	if (type2=="t"||type2=="d") drawBoughtLine=drawBoughtLine&&player.masterystudies.includes(type2+id2.split("study")[1])
	if (type2=="c") drawBoughtLine=drawBoughtLine&&player.eternityChallUnlocked==id2.slice(2,4)
	if (drawBoughtLine) {
		if (type2=="d" && player.options.theme == "Aarex's Modifications") {
			msctx.strokeStyle=parseInt(id2.split("study")[1])<8?"#D2E500":parseInt(id2.split("study")[1])>9?"#333333":"#009900";
		} else if (type2=="c") {
			msctx.strokeStyle="#490066";
		} else {
			msctx.strokeStyle="#000000";
		}
	} else if (type2=="d" && player.options.theme == "Aarex's Modifications") {
		msctx.strokeStyle=parseInt(id2.split("study")[1])<8?"#697200":parseInt(id2.split("study")[1])>11?"#727272":parseInt(id2.split("study")[1])>9?"#262626":"#006600";
	} else msctx.strokeStyle="#444";
	msctx.moveTo(x1, y1);
	msctx.lineTo(x2, y2);
	msctx.stroke();
	if (!occupied.includes(id2) && type2 == "t") {
		occupied.push(id2)
		if (shiftDown) {
			var start = document.getElementById(id2).getBoundingClientRect();
			var x1 = start.left + (start.width / 2) + (document.documentElement.scrollLeft || document.body.scrollLeft);
			var y1 = start.top + (start.height / 2) + (document.documentElement.scrollTop || document.body.scrollTop);
			var mult = getMasteryStudyCostMult(id2.split("study")[1])
			var msg = id2.split("study")[1] + " (" + (mult>1e3?shorten(mult):mult) + "x)"
			msctx.fillStyle = 'white';
			msctx.strokeStyle = 'black';
			msctx.lineWidth = 3;
			msctx.font = "15px Typewriter";
			msctx.strokeText(msg, x1 - start.width / 2, y1 - start.height / 2 - 1);
			msctx.fillText(msg, x1 - start.width / 2, y1 - start.height / 2 - 1);
		}
	}
}

function drawMasteryTree() {
	msctx.clearRect(0, 0, msc.width, msc.height);
	if (player === undefined) return
	if (document.getElementById("eternitystore").style.display === "none" || document.getElementById("masterystudies").style.display === "none" || player.masterystudies === undefined) return
	occupied=[]
	drawMasteryBranch("back", "timestudy241")
	for (var x=0;x<masterystudies.studies.length;x++) {
		var id=masterystudies.studies[x]
		var paths=masterystudies.allConnections[id]
		if (!masterystudies.unlocked.includes(id)) return
		if (paths) for (var y=0;y<paths.length;y++) if (masterystudies.unlocked.includes(paths[y])) drawMasteryBranch(convertMasteryStudyIdToDisplay(id), convertMasteryStudyIdToDisplay(paths[y]))
	}
}

function getMTSMult(id, uses = "") {
	if (id==251) return Math.floor(player.resets/3e3)
	if (id==252) return Math.floor(player.dilation.freeGalaxies/7)
	if (id==253) {
		if (tmp.ngp3l) return Math.floor(extraReplGalaxies/9)*20
		return Math.floor(getTotalRG()/4)
	}
	if (id==262) {
		if (tmp.ngp3l) return Math.max(player.resets/15e3-19,1)
		return Decimal.pow(Math.max(player.resets/5e4-10,1),Math.sqrt(Math.max(player.resets/1e5-5.5,1)))
	}
	if (id==263) {
		let x=player.meta.resets
		if (!tmp.ngp3l) x=x*(x+10)/60
		return x+1
	}
	if (id==264) {
		if (tmp.ngp3l) return Math.pow(player.galaxies+1,0.25)*2
		return player.galaxies/100+1
	}
	if (id==273) {
		var intensity = 0
		if (player.masterystudies !== undefined && (player.masterystudies.includes("t273") || uses.includes("ms"))) intensity = 5
		if (ghostified && player.ghostify.neutrinos.boosts > 1 && !uses.includes("pn")) intensity += tmp.nb[1]
		if (uses.includes("intensity")) return intensity
		return Decimal.max(Math.log10(player.replicanti.chance + 1), 1).pow(intensity)
	}
	if (id==281) return Decimal.pow(10,Math.pow(tmp.rm.max(1).log10(),0.25)/10)
	if (id==282) return Decimal.pow(10,Math.pow(tmp.rm.max(1).log10(),0.25)/15)
	if (id==301) return Math.floor(extraReplGalaxies/4.15)
	if (id==303) return Decimal.pow(4.7,Math.pow(Math.log10(Math.max(player.galaxies,1)),1.5))
	if (id==322) {
		let log = Math.sqrt(Math.max(3-getTickspeed().log10(),0))/2e4
		if (log>110) log=Math.sqrt(log*27.5)+55
		if (log>1e3&&player.aarexModifications.ngudpV!==undefined) log=Math.pow(7+Math.log10(log),3)
		return Decimal.pow(10,log)
	}
	if (id==332) return Math.max(player.galaxies, 1)
	if (id==341) return Decimal.pow(2,Math.sqrt(tmp.qu.replicants.quarks.add(1).log10()))
	if (id==344) return Math.pow(tmp.qu.replicants.quarks.div(1e7).add(1).log10(),0.25)*0.17+1
	if (id==351) {
		let log=player.timeShards.max(1).log10()*14e-7
		if (log>1e4) log=Math.pow(log*Math.pow(10,36),.1)
		return Decimal.pow(10,log)
	}
	if (id==361) return player.dilation.tachyonParticles.max(1).pow(0.01824033924212366)
	if (id==371) return Math.pow(extraReplGalaxies+1,0.3)
	if (id==372) return Math.sqrt(player.timeShards.add(1).log10())/20+1
	if (id==373) return Math.pow(player.galaxies+1,0.55)
	if (id==381) return Decimal.min(getTickSpeedMultiplier(), 1).log10() / -135 + 1
	if (id==382) return player.eightAmount.max(1).pow(Math.PI)
	if (id==383) return Decimal.pow(3200,Math.pow(tmp.qu.colorPowers.b.add(1).log10(),0.25))
	if (id==391) return player.meta.antimatter.max(1).pow(8e-4)
	if (id==392) return Decimal.pow(1.6,Math.sqrt(tmp.qu.replicants.quarks.add(1).log10()))
	if (id==393) return Decimal.pow(4e5,Math.sqrt(tmp.twr.add(1).log10()))
	if (id==401) {
		let log=tmp.qu.replicants.quarks.div(1e28).add(1).log10()*0.2
		if (log>5) log=Math.log10(log*2)*5
		return Decimal.pow(10,log)
	}
	if (id==411) return tmp.tra.div(1e24).add(1).pow(0.2)
	if (id==421) {
		let ret=Math.pow(Math.max(-getTickspeed().log10()/1e13-0.75,1),4)
		if (ret>100) ret=Math.sqrt(ret*100)
		return ret
	}
	if (id==431) {
		let x=player.dilation.freeGalaxies+tmp.eg431
		return Decimal.pow(Math.max(x/1e4,1),Math.max(x/1e4+Math.log10(x)/2,1))
	}
}


var upDown={
	point: 0,
	times: 0
}

function recordUpDown(x) {
	if (upDown.point>0&&upDown.point==x) return
	upDown.point=x
	upDown.times++
	if (upDown.times>=200) giveAchievement("Up and Down and Up and Down...")
}
