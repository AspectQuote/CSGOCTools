casespage = false
document.addEventListener("DOMContentLoaded", function(){
  dayssincecf = Math.floor(Math.abs((1582959600000-Date.now())/(24 * 60 * 60 * 1000)))
  document.getElementById("leftnavbarbottomflavor").innerHTML=`
    Built from scratch with ♥ by Aspect. <a href="https://csgoclicker.net" target="_blank">CSGOClicker</a> created by Banned and Roflzilla.
    <br/>
    CS:GO and all related assets are property of Valve Corp.
    <br/>
    It has been <span>${dayssincecf}</span> days since coinflip went down :(
  `
  if (casespage) {
    function getknifeicon(knife, pattern){
      var strret = ''
      switch (knife) {
        case "Bayonet":
          strret += 'Bayonet/'
          break;
        case "Flip Knife":
          strret += 'FlipKnife/'
          break;
        case "Gut Knife":
          strret += 'GutKnife/'
          break;
        case "Karambit":
          strret += 'Karambit/'
          break;
        case "M9 Bayonet":
          strret += 'M9Bayonet/'
          break;
        case "Huntsman Knife":
          strret += 'Huntsman/'
          break;
        case "-":
          strret += '-/'
          break;
        case "-":
          strret += '-/'
          break;
        default:
          strret += `Bayonet`
      }
      switch (pattern) {
        case "Fade":
          strret += "Fade.png"
          break;
        case "Vanilla":
          strret += "Vanilla.png"
          break;
        case "Slaughter":
          strret += "Slaughter.png"
          break;
        case "Crimson Web":
          strret += "CrimsonWeb.png"
          break;
        case "Case Hardened":
          strret += "CaseHardened.png"
          break;
        case "Blue Steel":
          strret += "BlueSteel.png"
          break;
        case "Stained":
          strret += "Stained.png"
          break;
        case "Night":
          strret += "Night.png"
          break;
        case "Safari Mesh":
          strret += "SafariMesh.png"
          break;
        case "Boreal Forest":
          strret += "BorealForest.png"
          break;
        case "Scorched":
          strret += "Scorched.png"
          break;
        case "Forest DDPAT":
          strret += "ForestDDPAT.png"
          break;
        case "Urban Masked":
          strret += "UrbanMasked.png"
          break;
        default:
          strret += "Vanilla.png"
      }
      return strret
    }
    function getknifename(knife, pattern){
      return `${knife} | ${pattern}`
    }
    function getpatternfloats(pattern){
      switch (pattern) {
        case "Fade":
          return ["0.00", "0.08"]
          break;
        case "Vanilla":
          return ["N/A", "N/A"]
          break;
        case "Slaughter":
          return ["0.01", "0.26"]
          break;
        case "Crimson Web":
          return ["0.06", "0.80"]
          break;
        case "Case Hardened":
          return ["0.00", "1.00"]
          break;
        case "Blue Steel":
          return ["0.00", "1.00"]
        break;
          case "Stained":
          return ["0.00", "1.00"]
          break;
        case "Night":
          return ["0.06", "0.80"]
          break;
        case "Safari Mesh":
          return ["0.06", "0.80"]
          break;
        case "Boreal Forest":
          return ["0.06", "0.80"]
          break;
        case "Scorched":
          return ["0.06", "0.80"]
          break;
        case "Forest DDPAT":
          return ["0.06", "0.80"]
          break;
        case "Urban Masked":
          return ["0.06", "0.80"]
          break;
        default:

      }
    }
    currentcase = 0
    cases = [
      {
        name: "CS:GO Weapon Case",
        type: "knife",
        icon: "weaponcase1.png",
        desc: "CS:GO's first case, this case was added in The Arms Deal update way back on the 14th of August, 2013.",
        milspec: [
          {
            name: "AUG | Wings",
            icon: "AUGWings",
            minfloat: "0.00",
            maxfloat: "0.14",
            canbestattrak: true
          },
          {
            name: "SG 553 | Ultraviolet",
            icon: "SG553Ultraviolet",
            minfloat: "0.06",
            maxfloat: "0.80",
            canbestattrak: true
          },
          {
            name: "MP7 | Skulls",
            icon: "MP7Skulls",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "Glock-18 | Dragon Tattoo",
            icon: "Glock18DragonTattoo",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "USP-S | Dark Water",
            icon: "USPSDarkWater",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "M4A1-S | Dark Water",
            icon: "M4A1SDarkWater",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "AK-47 | Case Hardened",
            icon: "AK47CaseHardened",
            minfloat: "0.00",
            maxfloat: "1.00",
            canbestattrak: true
          },
          {
            name: "Desert Eagle | Hypnotic",
            icon: "DesertEagleHypnotic",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "AWP | Lightning Strike",
            icon: "AWPLightningStrike",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          }
        ],
        gold: {
          knives: ["Bayonet", "Flip Knife", "Gut Knife", "Karambit", "M9 Bayonet"],
          patterns: ["Fade","Vanilla","Slaughter","Crimson Web","Case Hardened","Blue Steel","Stained","Night","Safari Mesh","Boreal Forest","Scorched","Forest DDPAT","Urban Masked"]
        }
      },
      {
        name: "CS:GO Weapon Case 2",
        type: "knife",
        icon: "weaponcase1.png",
        desc: "The second in a series of 3 Weapon Cases, Weapon Case 2 was added on the 8th of November, 2013",
        milspec: [
          {
            name: "P250 | Hive",
            icon: "P250Hive",
            minfloat: "0.00",
            maxfloat: "0.30",
            canbestattrak: true
          },
          {
            name: "FAMAS | Hexane",
            icon: "FAMASHexane",
            minfloat: "0.00",
            maxfloat: "0.40",
            canbestattrak: true
          },
          {
            name: "Tec-9 | Blue Titanium",
            icon: "Tec9BlueTitanium",
            minfloat: "0.00",
            maxfloat: "0.04",
            canbestattrak: true
          },
          {
            name: "M4A1-S | Blood Tiger",
            icon: "M4A1SBloodTiger",
            minfloat: "0.00",
            maxfloat: "0.30",
            canbestattrak: true
          },
          {
            name: "SCAR-20 | Crimson Web",
            icon: "SCAR20CrimsonWeb",
            minfloat: "0.06",
            maxfloat: "0.80",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "Nova | Graphite",
            icon: "NovaGraphite",
            minfloat: "0.00",
            maxfloat: "0.12",
            canbestattrak: true
          },
          {
            name: "Dual Berettas | Hemoglobin",
            icon: "DualBerettasHemoglobin",
            minfloat: "0.00",
            maxfloat: "0.20",
            canbestattrak: true
          },
          {
            name: "MP9 | Hypnotic",
            icon: "MP9Hypnotic",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "Five-SeveN | Case Hardened",
            icon: "FiveSeveNCaseHardened",
            minfloat: "0.00",
            maxfloat: "1.00",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "USP-S | Serum",
            icon: "USPSSerum",
            minfloat: "0.00",
            maxfloat: "0.25",
            canbestattrak: true
          },
          {
            name: "P90 | Cold Blooded",
            icon: "P90ColdBlooded",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "SSG 08 | Blood in the Water",
            icon: "SSG08BloodintheWater",
            minfloat: "0.06",
            maxfloat: "0.20",
            canbestattrak: true
          }
        ],
        gold: {
          knives: ["Bayonet", "Flip Knife", "Gut Knife", "Karambit", "M9 Bayonet"],
          patterns: ["Fade","Vanilla","Slaughter","Crimson Web","Case Hardened","Blue Steel","Stained","Night","Safari Mesh","Boreal Forest","Scorched","Forest DDPAT","Urban Masked"]
        }
      },
      {
        name: "CS:GO Weapon Case 3",
        type: "knife",
        icon: "weaponcase1.png",
        desc: "The last in a series of 3 Weapon Cases, Weapon Case 3 was added on the 12th of February, 2014",
        milspec: [
          {
            name: "P2000 | Red FragCam",
            icon: "P2000RedFragCam",
            canbestattrak: true
          },
          {
            name: "Dual Berettas | Panther",
            icon: "DualBerettasPanther",
            canbestattrak: true
          },
          {
            name: "Glock-18 | Blue Fissure",
            icon: "Glock18BlueFissure",
            canbestattrak: true
          },
          {
            name: "CZ75-Auto | Crimson Web",
            icon: "CZ75AutoCrimsonWeb",
            canbestattrak: true
          },
          {
            name: "USP-S | Stainless",
            icon: "USPSStainless",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "Tec-9 | Titanium Bit",
            icon: "Tec9TitaniumBit",
            canbestattrak: true
          },
          {
            name: "Five-SeveN | Copper Galaxy",
            icon: "FiveSeveNCopperGalaxy",
            canbestattrak: true
          },
          {
            name: "CZ75-Auto | Tread Plate",
            icon: "CZ75AutoTreadPlate",
            canbestattrak: true
          },
          {
            name: "Desert Eagle | Heirloom",
            icon: "DesertEagleHeirloom",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "CZ75-Auto | The Fuschia Is Now",
            icon: "CZ75AutoTheFuschiaIsNow",
            canbestattrak: true
          },
          {
            name: "P250 | Undertow",
            icon: "P250Undertow",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "CZ75-Auto | Victoria",
            icon: "CZ75AutoVictoria",
            canbestattrak: true
          }
        ],
        gold: {
          knives: ["Bayonet", "Flip Knife", "Gut Knife", "Karambit", "M9 Bayonet"],
          patterns: ["Fade","Vanilla","Slaughter","Crimson Web","Case Hardened","Blue Steel","Stained","Night","Safari Mesh","Boreal Forest","Scorched","Forest DDPAT","Urban Masked"]
        }
      },
      {
        name: "Operation Bravo Case",
        type: "knife",
        icon: "weaponcase1.png",
        desc: "CS:GO's first operation case, the Operation Bravo Case is home to one of the most infamous guns in CSGOClicker. This case was released on 19th of September, 2013.",
        milspec: [
          {
            name: "G3SG1 | Demeter",
            icon: "G3SG1Demeter",
            canbestattrak: true
          },
          {
            name: "Dual Berettas | Black Limba",
            icon: "DualBerettasBlackLimba",
            canbestattrak: true
          },
          {
            name: "UMP-45 | Bone Pile",
            icon: "UMP45BonePile",
            canbestattrak: true
          },
          {
            name: "Nova | Tempest",
            icon: "NovaTempest",
            canbestattrak: true
          },
          {
            name: "SG 553 | Wave Spray",
            icon: "SG553WaveSpray",
            canbestattrak: true
          },
          {
            name: "Galil AR | Shattered",
            icon: "GalilARShattered",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "M4A1-S | Bright Water",
            icon: "M4A1SBrightWater",
            canbestattrak: true
          },
          {
            name: "MAC-10 | Graven",
            icon: "MAC10Graven",
            canbestattrak: true
          },
          {
            name: "M4A4 | Zirka",
            icon: "M4A4Zirka",
            canbestattrak: true
          },
          {
            name: "USP-S | Overgrowth",
            icon: "USPSOvergrowth",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "AWP | Graphite",
            icon: "AWPGraphite",
            canbestattrak: true
          },
          {
            name: "P90 | Emerald Dragon",
            icon: "P90EmeraldDragon",
            canbestattrak: true
          },
          {
            name: "P2000 | Ocean Foam",
            icon: "P2000OceanFoam",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "Desert Eagle | Golden Koi",
            icon: "DesertEagleGoldenKoi",
            canbestattrak: true
          },
          {
            name: "AK-47 | Fire Serpent",
            icon: "AK47FireSerpent",
            canbestattrak: true
          }
        ],
        gold: {
          knives: ["Bayonet", "Flip Knife", "Gut Knife", "Karambit", "M9 Bayonet"],
          patterns: ["Fade","Vanilla","Slaughter","Crimson Web","Case Hardened","Blue Steel","Stained","Night","Safari Mesh","Boreal Forest","Scorched","Forest DDPAT","Urban Masked"]
        }
      },
      {
        name: "Esports 2013 Case",
        type: "knife",
        icon: "weaponcase1.png",
        desc: "One of the 3 eSports cases to ever exist, the eSports 2013 case was released on the 14th of August, 2013",
        milspec: [
          {
            name: "FAMAS | Doomkitty",
            icon: "FAMASDoomkitty",
            canbestattrak: true
          },
          {
            name: "MAG-7 | Memento",
            icon: "MAG7Memento",
            canbestattrak: true
          },
          {
            name: "M4A4 | Faded Zebra",
            icon: "M4A4FadedZebra",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "Sawed-Off | Orange DDPAT",
            icon: "SawedOffOrangeDDPAT",
            canbestattrak: true
          },
          {
            name: "P250 | Splash",
            icon: "P250Splash",
            canbestattrak: true
          },
          {
            name: "Galil AR | Orange DDPAT",
            icon: "GalilAROrangeDDPAT",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "AWP | BOOM",
            icon: "AWPBOOM",
            canbestattrak: true
          },
          {
            name: "AK-47 | Red Laminate",
            icon: "AK47RedLaminate",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "P90 | Death by Kitty",
            icon: "P90DeathbyKitty",
            canbestattrak: true
          }
        ],
        gold: {
          knives: ["Bayonet", "Flip Knife", "Gut Knife", "Karambit", "M9 Bayonet"],
          patterns: ["Fade","Vanilla","Slaughter","Crimson Web","Case Hardened","Blue Steel","Stained","Night","Safari Mesh","Boreal Forest","Scorched","Forest DDPAT","Urban Masked"]
        }
      },
      {
        name: "Esports 2013 Winter Case",
        type: "knife",
        icon: "weaponcase1.png",
        desc: "One of the 3 eSports cases to ever exist, the eSports 2013 winter case was released on the 14th of August, 2013",
        milspec: [
          {
            name: "PP-Bizon | Water Sigil",
            icon: "PPBizonWaterSigil",
            canbestattrak: true
          },
          {
            name: "G3SG1 | Azure Zebra",
            icon: "G3SG1AzureZebra",
            canbestattrak: true
          },
          {
            name: "Five-SeveN | Nightshade",
            icon: "FiveSeveNNightshade",
            canbestattrak: true
          },
          {
            name: "Nova | Ghost Camo",
            icon: "NovaGhostCamo",
            canbestattrak: true
          },
          {
            name: "P250 | Steel Disruption",
            icon: "P250SteelDisruption",
            canbestattrak: true
          },
          {
            name: "Galil AR | Blue Titanium",
            icon: "GalilARBlueTitanium",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "P90 | Blind Spot",
            icon: "P90BlindSpot",
            canbestattrak: true
          },
          {
            name: "AK-47 | Blue Laminate",
            icon: "AK47BlueLaminate",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "FAMAS | Afterimage",
            icon: "FAMASAfterimage",
            canbestattrak: true
          },
          {
            name: "AWP | Electric Hive",
            icon: "AWPElectricHive",
            canbestattrak: true
          },
          {
            name: "Desert Eagle | Cobalt Disruption",
            icon: "DesertEagleCobaltDisruption",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "M4A4 | X-Ray",
            icon: "M4A4XRay",
            canbestattrak: true
          }
        ],
        gold: {
          knives: ["Bayonet", "Flip Knife", "Gut Knife", "Karambit", "M9 Bayonet"],
          patterns: ["Fade","Vanilla","Slaughter","Crimson Web","Case Hardened","Blue Steel","Stained","Night","Safari Mesh","Boreal Forest","Scorched","Forest DDPAT","Urban Masked"]
        }
      },
      {
        name: "Esports 2014 Summer Case",
        type: "knife",
        icon: "weaponcase1.png",
        desc: "One of the 3 eSports cases to ever exist, the eSports 2014 summer case was released on the 10th of July, 2014",
        milspec: [
          {
            name: "XM1014 | Red Python",
            icon: "XM1014RedPython",
            canbestattrak: true
          },
          {
            name: "SSG 08 | Dark Water",
            icon: "SSG08DarkWater",
            canbestattrak: true
          },
          {
            name: "CZ75-Auto | Hexane",
            icon: "CZ75AutoHexane",
            canbestattrak: true
          },
          {
            name: "USP-S | Blood Tiger",
            icon: "USPSBloodTiger",
            canbestattrak: true
          },
          {
            name: "Negev | Bratatat",
            icon: "NegevBratatat",
            canbestattrak: true
          },
          {
            name: "MAC-10 | Ultraviolet",
            icon: "MAC10Ultraviolet",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "P90 | Virus",
            icon: "P90Virus",
            canbestattrak: true
          },
          {
            name: "Glock-18 | Steel Disruption",
            icon: "Glock18SteelDisruption",
            canbestattrak: true
          },
          {
            name: "MP7 | Ocean Foam",
            icon: "MP7OceanFoam",
            canbestattrak: true
          },
          {
            name: "PP-Bizon | Blue Streak",
            icon: "PPBizonBlueStreak",
            canbestattrak: true
          },
          {
            name: "Desert Eagle | Crimson Web",
            icon: "DesertEagleCrimsonWeb",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "P2000 | Corticera",
            icon: "P2000Corticera",
            canbestattrak: true
          },
          {
            name: "AUG | Bengal Tiger",
            icon: "AUGBengalTiger",
            canbestattrak: true
          },
          {
            name: "AWP | Corticera",
            icon: "AWPCorticera",
            canbestattrak: true
          },
          {
            name: "Nova | Bloomstick",
            icon: "NovaBloomstick",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "M4A4 | Bullet Rain",
            icon: "M4A4BulletRain",
            canbestattrak: true
          },
          {
            name: "AK-47 | Jaguar",
            icon: "AK47Jaguar",
            canbestattrak: true
          }
        ],
        gold: {
          knives: ["Bayonet", "Flip Knife", "Gut Knife", "Karambit", "M9 Bayonet"],
          patterns: ["Fade","Vanilla","Slaughter","Crimson Web","Case Hardened","Blue Steel","Stained","Night","Safari Mesh","Boreal Forest","Scorched","Forest DDPAT","Urban Masked"]
        }
      },
      {
        name: "Winter Offensive Weapon Case",
        type: "knife",
        icon: "weaponcase1.png",
        desc: "The Winter Offensive Weapon Case was released on the 18th of December, 2013. It was the first case to include the ever-popular Asiimov pattern.",
        milspec: [
          {
            name: "M249 | Magma",
            icon: "M249Magma",
            canbestattrak: true
          },
          {
            name: "PP-Bizon | Cobalt Halftone",
            icon: "PPBizonCobaltHalftone",
            canbestattrak: true
          },
          {
            name: "Five-SeveN | Kami",
            icon: "FiveSeveNKami",
            canbestattrak: true
          },
          {
            name: "Galil AR | Sandstorm",
            icon: "GalilARSandstorm",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "Nova | Rising Skull",
            icon: "NovaRisingSkull",
            canbestattrak: true
          },
          {
            name: "FAMAS | Pulse",
            icon: "FAMASPulse",
            canbestattrak: true
          },
          {
            name: "Dual Berettas | Marina",
            icon: "DualBerettasMarina",
            canbestattrak: true
          },
          {
            name: "MP9 | Rose Iron",
            icon: "MP9RoseIron",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "M4A1-S | Guardian",
            icon: "M4A1SGuardian",
            canbestattrak: true
          },
          {
            name: "P250 | Mehndi",
            icon: "P250Mehndi",
            canbestattrak: true
          },
          {
            name: "AWP | Redline",
            icon: "AWPRedline",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "Sawed-Off | The Kraken",
            icon: "SawedOffTheKraken",
            canbestattrak: true
          },
          {
            name: "M4A4 | Asiimov",
            icon: "M4A4Asiimov",
            canbestattrak: true
          }
        ],
        gold: {
          knives: ["Bayonet", "Flip Knife", "Gut Knife", "Karambit", "M9 Bayonet"],
          patterns: ["Fade","Vanilla","Slaughter","Crimson Web","Case Hardened","Blue Steel","Stained","Night","Safari Mesh","Boreal Forest","Scorched","Forest DDPAT","Urban Masked"]
        }
      },
      {
        name: "Operation Phoenix Weapon Case",
        type: "knife",
        icon: "weaponcase1.png",
        desc: "This case was released on the 20th of February, 2014.",
        milspec: [
          {
            name: "UMP-45 | Corporal",
            icon: "UMP45Corporal",
            canbestattrak: true
          },
          {
            name: "MAG-7 | Heaven Guard",
            icon: "MAG7HeavenGuard",
            canbestattrak: true
          },
          {
            name: "Negev | Terrain",
            icon: "NegevTerrain",
            canbestattrak: true
          },
          {
            name: "Tec-9 | Sandstorm",
            icon: "Tec9Sandstorm",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "FAMAS | Sergeant",
            icon: "FAMASSergeant",
            canbestattrak: true
          },
          {
            name: "SG 553 | Pulse",
            icon: "SG553Pulse",
            canbestattrak: true
          },
          {
            name: "MAC-10 | Heat",
            icon: "MAC10Heat",
            canbestattrak: true
          },
          {
            name: "USP-S | Guardian",
            icon: "USPSGuardian",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "P90 | Trigon",
            icon: "P90Trigon",
            canbestattrak: true
          },
          {
            name: "Nova | Antique",
            icon: "NovaAntique",
            canbestattrak: true
          },
          {
            name: "AK-47 | Redline",
            icon: "AK47Redline",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "AUG | Chameleon",
            icon: "AUGChameleon",
            canbestattrak: true
          },
          {
            name: "AWP | Asiimov",
            icon: "AWPAsiimov",
            canbestattrak: true
          }
        ],
        gold: {
          knives: ["Bayonet", "Flip Knife", "Gut Knife", "Karambit", "M9 Bayonet"],
          patterns: ["Fade","Vanilla","Slaughter","Crimson Web","Case Hardened","Blue Steel","Stained","Night","Safari Mesh","Boreal Forest","Scorched","Forest DDPAT","Urban Masked"]
        }
      },
      {
        name: "Huntsman Weapon Case",
        type: "knife",
        icon: "weaponcase1.png",
        desc: "This case was released on the 20th of February, 2014.",
        milspec: [
          {
            name: "SSG 08 | Slashed",
            icon: "SSG08Slashed",
            canbestattrak: true
          },
          {
            name: "Galil AR | Kami",
            icon: "GalilARKami",
            canbestattrak: true
          },
          {
            name: "Tec-9 | Isaac",
            icon: "Tec9Isaac",
            canbestattrak: true
          },
          {
            name: "P2000 | Pulse",
            icon: "P2000Pulse",
            canbestattrak: true
          },
          {
            name: "CZ75-Auto | Twist",
            icon: "CZ75AutoTwist",
            canbestattrak: true
          },
          {
            name: "P90 | Module",
            icon: "P90Module",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "PP-Bizon | Antique",
            icon: "PPBizonAntique",
            canbestattrak: true
          },
          {
            name: "AUG | Torque",
            icon: "AUGTorque",
            canbestattrak: true
          },
          {
            name: "XM1014 | Heaven Guard",
            icon: "XM1014HeavenGuard",
            canbestattrak: true
          },
          {
            name: "MAC-10 | Tatter",
            icon: "MAC10Tatter",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "M4A1-S | Atomic Alloy",
            icon: "M4A1SAtomicAlloy",
            canbestattrak: true
          },
          {
            name: "SCAR-20 | Cyrex",
            icon: "SCAR20Cyrex",
            canbestattrak: true
          },
          {
            name: "USP-S | Caiman",
            icon: "USPSCaiman",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "AK-47 | Vulcan",
            icon: "AK47Vulcan",
            canbestattrak: true
          },
          {
            name: "M4A4 | Desert-Strike",
            icon: "M4A4DesertStrike",
            canbestattrak: true
          }
        ],
        gold: {
          knives: ["Huntsman Knife"],
          patterns: ["Fade","Vanilla","Slaughter","Crimson Web","Case Hardened","Blue Steel","Stained","Night","Safari Mesh","Boreal Forest","Scorched","Forest DDPAT","Urban Masked"]
        }
      }
    ]
    function loadacase(){
      document.getElementById("casecontent").innerHTML = ''
      var header = document.createElement("h1")
      header.append(cases[currentcase].name)
      var desc = document.createElement("p")
      desc.appendChild(document.createTextNode(cases[currentcase].desc))
      document.getElementById("casecontent").append(header)
      document.getElementById("casecontent").append(desc)
      for (var i = 0; i < Object.keys(cases[currentcase]).length; i++) {
        Object.keys(cases[currentcase])[i]
        if (Object.keys(cases[currentcase])[i] == "milspec" || Object.keys(cases[currentcase])[i] == "restricted" || Object.keys(cases[currentcase])[i] == "classified" || Object.keys(cases[currentcase])[i] == "covert") {
          for (var d = 0; d < cases[currentcase][Object.keys(cases[currentcase])[i]].length; d++) {
            cases[currentcase][Object.keys(cases[currentcase])[i]][d]

            var itemicon = document.createElement("img")
            itemicon.src = "weaponicons/"+cases[currentcase][Object.keys(cases[currentcase])[i]][d].icon+".png"
            itemicon.className = "weaponicon "+Object.keys(cases[currentcase])[i]

            var itemtooltip = document.createElement("span")
            var itemst = document.createElement("span")
            if (cases[currentcase][Object.keys(cases[currentcase])[i]][d].canbestattrak) {
              itemst.className = 'stattrak'
            }
            itemst.appendChild(document.createTextNode(((cases[currentcase][Object.keys(cases[currentcase])[i]][d].canbestattrak) ? `Can Be StatTrak™` : `Cannot Be StatTrak™`)))
            itemtooltip.className = 'ict'
            itemtooltip.appendChild(itemst)
            if (window.pricelist[cases[currentcase][Object.keys(cases[currentcase])[i]][d].name + " (Factory New)"]) {
              itemtooltip.appendChild(document.createElement("br"))
              itemtooltip.appendChild(document.createTextNode("FN: $"+window.pricelist[cases[currentcase][Object.keys(cases[currentcase])[i]][d].name + " (Factory New)"]))
              if (window.pricelist["StatTrak™ "+cases[currentcase][Object.keys(cases[currentcase])[i]][d].name + " (Factory New)"]) {
                var itemst = document.createElement("span")
                itemst.appendChild(document.createTextNode(" $"+window.pricelist["StatTrak™ "+cases[currentcase][Object.keys(cases[currentcase])[i]][d].name + " (Factory New)"]))
                itemst.className = 'stattrak'
                itemtooltip.appendChild(itemst)
              }
            }
            if (window.pricelist[cases[currentcase][Object.keys(cases[currentcase])[i]][d].name + " (Minimal Wear)"]) {
              itemtooltip.appendChild(document.createElement("br"))
              itemtooltip.appendChild(document.createTextNode("MW: $"+window.pricelist[cases[currentcase][Object.keys(cases[currentcase])[i]][d].name + " (Minimal Wear)"]))
              if (window.pricelist["StatTrak™ "+cases[currentcase][Object.keys(cases[currentcase])[i]][d].name + " (Minimal Wear)"]) {
                var itemst = document.createElement("span")
                itemst.appendChild(document.createTextNode(" $"+window.pricelist["StatTrak™ "+cases[currentcase][Object.keys(cases[currentcase])[i]][d].name + " (Minimal Wear)"]))
                itemst.className = 'stattrak'
                itemtooltip.appendChild(itemst)
              }
            }
            if (window.pricelist[cases[currentcase][Object.keys(cases[currentcase])[i]][d].name + " (Field-Tested)"]) {
              itemtooltip.appendChild(document.createElement("br"))
              itemtooltip.appendChild(document.createTextNode("FT: $"+window.pricelist[cases[currentcase][Object.keys(cases[currentcase])[i]][d].name + " (Field-Tested)"]))
              if (window.pricelist["StatTrak™ "+cases[currentcase][Object.keys(cases[currentcase])[i]][d].name + " (Field-Tested)"]) {
                var itemst = document.createElement("span")
                itemst.appendChild(document.createTextNode(" $"+window.pricelist["StatTrak™ "+cases[currentcase][Object.keys(cases[currentcase])[i]][d].name + " (Field-Tested)"]))
                itemst.className = 'stattrak'
                itemtooltip.appendChild(itemst)
              }
            }
            if (window.pricelist[cases[currentcase][Object.keys(cases[currentcase])[i]][d].name + " (Well-Worn)"]) {
              itemtooltip.appendChild(document.createElement("br"))
              itemtooltip.appendChild(document.createTextNode("WW: $"+window.pricelist[cases[currentcase][Object.keys(cases[currentcase])[i]][d].name + " (Well-Worn)"]))
              if (window.pricelist["StatTrak™ "+cases[currentcase][Object.keys(cases[currentcase])[i]][d].name + " (Well-Worn)"]) {
                var itemst = document.createElement("span")
                itemst.appendChild(document.createTextNode(" $"+window.pricelist["StatTrak™ "+cases[currentcase][Object.keys(cases[currentcase])[i]][d].name + " (Well-Worn)"]))
                itemst.className = 'stattrak'
                itemtooltip.appendChild(itemst)
              }
            }
            if (window.pricelist[cases[currentcase][Object.keys(cases[currentcase])[i]][d].name + " (Battle-Scarred)"]) {
              itemtooltip.appendChild(document.createElement("br"))
              itemtooltip.appendChild(document.createTextNode("BS: $"+window.pricelist[cases[currentcase][Object.keys(cases[currentcase])[i]][d].name + " (Battle-Scarred)"]))
              if (window.pricelist["StatTrak™ "+cases[currentcase][Object.keys(cases[currentcase])[i]][d].name + " (Battle-Scarred)"]) {
                var itemst = document.createElement("span")
                itemst.appendChild(document.createTextNode(" $"+window.pricelist["StatTrak™ "+cases[currentcase][Object.keys(cases[currentcase])[i]][d].name + " (Battle-Scarred)"]))
                itemst.className = 'stattrak'
                itemtooltip.appendChild(itemst)
              }
            }
            //itemtooltip.appendChild(document.createElement("br"))
            //itemtooltip.appendChild(document.createTextNode("Float: "+cases[currentcase][Object.keys(cases[currentcase])[i]][d].minfloat+" - "+cases[currentcase][Object.keys(cases[currentcase])[i]][d].maxfloat))

            var itemname = document.createElement("div")
            itemname.appendChild(document.createTextNode(cases[currentcase][Object.keys(cases[currentcase])[i]][d].name))

            var itemcontainer = document.createElement("div")
            itemcontainer.className = "ic"
            itemcontainer.appendChild(itemicon)
            itemcontainer.appendChild(itemname)
            itemcontainer.appendChild(itemtooltip)

            document.getElementById("casecontent").append(itemcontainer)
          }
        }
      }
      for (var i = 0; i < cases[currentcase].gold.knives.length; i++) {
        for (var x = 0; x < cases[currentcase].gold.patterns.length; x++) {
          cases[currentcase].gold.knives[i]
          cases[currentcase].gold.patterns[x]
          var knifeicon = getknifeicon(cases[currentcase].gold.knives[i], cases[currentcase].gold.patterns[x])
          var knifename = getknifename(cases[currentcase].gold.knives[i], cases[currentcase].gold.patterns[x])
          var knifefloats = getpatternfloats(cases[currentcase].gold.patterns[x])
          var itemicon = document.createElement("img")
          itemicon.src = "weaponicons/knives/"+knifeicon
          itemicon.className = "weaponicon gold"

          var itemtooltip = document.createElement("span")
          var itemst = document.createElement("span")
          itemst.className = 'stattrak'
          itemst.appendChild(document.createTextNode(`Can Be StatTrak™`))
          itemtooltip.className = 'ict'
          itemtooltip.appendChild(itemst)
          if (window.pricelist["★ "+knifename + " (Factory New)"]) {
            itemtooltip.appendChild(document.createElement("br"))
            itemtooltip.appendChild(document.createTextNode("FN: $"+window.pricelist["★ "+knifename + " (Factory New)"]))
            if (window.pricelist["★ "+"StatTrak™ " + knifename + " (Factory New)"]) {
              var itemst = document.createElement("span")
              itemst.appendChild(document.createTextNode(" $"+window.pricelist["★ "+"StatTrak™ " + knifename + " (Factory New)"]))
              itemst.className = 'stattrak'
              itemtooltip.appendChild(itemst)
            }
          }
          if (window.pricelist["★ "+knifename + " (Minimal Wear)"]) {
            itemtooltip.appendChild(document.createElement("br"))
            itemtooltip.appendChild(document.createTextNode("MW: $"+window.pricelist["★ "+knifename + " (Minimal Wear)"]))
            if (window.pricelist["★ "+"StatTrak™ " + knifename + " (Minimal Wear)"]) {
              var itemst = document.createElement("span")
              itemst.appendChild(document.createTextNode(" $"+window.pricelist["★ "+"StatTrak™ " + knifename + " (Minimal Wear)"]))
              itemst.className = 'stattrak'
              itemtooltip.appendChild(itemst)
            }
          }
          if (window.pricelist["★ "+knifename + " (Field-Tested)"]) {
            itemtooltip.appendChild(document.createElement("br"))
            itemtooltip.appendChild(document.createTextNode("FT: $"+window.pricelist["★ "+knifename + " (Field-Tested)"]))
            if (window.pricelist["★ "+"StatTrak™ " + knifename + " (Field-Tested)"]) {
              var itemst = document.createElement("span")
              itemst.appendChild(document.createTextNode(" $"+window.pricelist["★ "+"StatTrak™ " + knifename + " (Field-Tested)"]))
              itemst.className = 'stattrak'
              itemtooltip.appendChild(itemst)
            }
          }
          if (window.pricelist["★ "+knifename + " (Well-Worn)"]) {
            itemtooltip.appendChild(document.createElement("br"))
            itemtooltip.appendChild(document.createTextNode("WW: $"+window.pricelist["★ "+knifename + " (Well-Worn)"]))
            if (window.pricelist["★ "+"StatTrak™ " + knifename + " (Well-Worn)"]) {
              var itemst = document.createElement("span")
              itemst.appendChild(document.createTextNode(" $"+window.pricelist["★ "+"StatTrak™ " + knifename + " (Well-Worn)"]))
              itemst.className = 'stattrak'
              itemtooltip.appendChild(itemst)
            }
          }
          if (window.pricelist["★ "+knifename + " (Battle-Scarred)"]) {
            itemtooltip.appendChild(document.createElement("br"))
            itemtooltip.appendChild(document.createTextNode("BS: $"+window.pricelist["★ "+knifename + " (Battle-Scarred)"]))
            if (window.pricelist["★ "+"StatTrak™ " + knifename + " (Battle-Scarred)"]) {
              var itemst = document.createElement("span")
              itemst.appendChild(document.createTextNode(" $"+window.pricelist["★ "+"StatTrak™ " + knifename + " (Battle-Scarred)"]))
              itemst.className = 'stattrak'
              itemtooltip.appendChild(itemst)
            }
          }
          if (knifename.includes("Vanilla")) {
            itemtooltip.appendChild(document.createElement("br"))
            itemtooltip.appendChild(document.createTextNode("$"+window.pricelist["★ "+cases[currentcase].gold.knives[i]]))
            var itemst = document.createElement("span")
            itemst.appendChild(document.createTextNode(" $"+window.pricelist["★ StatTrak™ " +cases[currentcase].gold.knives[i]]))
            itemst.className = 'stattrak'
            itemtooltip.appendChild(itemst)
          }
          //itemtooltip.appendChild(document.createElement("br"))
          //itemtooltip.appendChild(document.createTextNode("Float: "+knifefloats[0]+" - "+knifefloats[1]))

          var itemname = document.createElement("div")
          itemname.appendChild(document.createTextNode("★ "+knifename))

          var itemcontainer = document.createElement("div")
          itemcontainer.className = "ic"
          itemcontainer.appendChild(itemicon)
          itemcontainer.appendChild(itemname)
          itemcontainer.appendChild(itemtooltip)

          document.getElementById("casecontent").append(itemcontainer)
        }
      }
    }
    loadacase()
    document.getElementById('loadcase1').addEventListener('click', function(){currentcase = 0; loadacase()})
    document.getElementById('loadcase2').addEventListener('click', function(){currentcase = 1; loadacase()})
    document.getElementById('loadcase3').addEventListener('click', function(){currentcase = 2; loadacase()})
    document.getElementById('loadcase4').addEventListener('click', function(){currentcase = 3; loadacase()})
    document.getElementById('loadcase5').addEventListener('click', function(){currentcase = 4; loadacase()})
    document.getElementById('loadcase6').addEventListener('click', function(){currentcase = 5; loadacase()})
    document.getElementById('loadcase7').addEventListener('click', function(){currentcase = 6; loadacase()})
    document.getElementById('loadcase8').addEventListener('click', function(){currentcase = 7; loadacase()})
    document.getElementById('loadcase9').addEventListener('click', function(){currentcase = 8; loadacase()})
    document.getElementById('loadcase10').addEventListener('click', function(){currentcase = 9; loadacase()})
  }
});
