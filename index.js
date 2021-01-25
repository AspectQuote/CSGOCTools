casespage = false
document.addEventListener("DOMContentLoaded", function(){
  var dayssincecf = Math.floor(Math.abs((1582959600000-Date.now())/(24 * 60 * 60 * 1000)))
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
        case "Butterfly Knife":
          strret += 'ButterflyKnife/'
          break;
        case "-":
          strret += '-/'
          break;
        case "Bowie Knife":
          strret += 'BowieKnife/'
          break;
        case "Falchion Knife":
          strret += 'FalchionKnife/'
          break;
        case "Shadow Daggers":
          strret += 'ShadowDaggers/'
          break;

        default:
          strret += `Bayonet/`
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
        case "Ultraviolet":
          strret += "Ultraviolet.png"
          break;
        case "Rust Coat":
          strret += "RustCoat.png"
          break;
        case "Damascus Steel":
          strret += "DamascusSteel.png"
          break;
        case "Tiger Tooth":
          strret += "TigerTooth.png"
          break;
        case "Doppler":
          strret += "Doppler.png"
          break;
        case "Marble Fade":
          strret += "MarbleFade.png"
          break;
        case "Lore":
          strret += "Lore.png"
          break;
        case "Gamma Doppler":
          strret += "GammaDoppler.png"
          break;
        case "Autotronic":
          strret += "Autotronic.png"
          break;
        case "Black Laminate":
          strret += "BlackLaminate.png"
          break;
        case "Bright Water":
          strret += "BrightWater.png"
          break;
        case "Freehand":
          strret += "Freehand.png"
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
    var currentcase = 0
    var cases = [
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
      },
      {
        name: "Operation Breakout Weapon Case",
        type: "knife",
        icon: "weaponcase1.png",
        desc: "This case was released on the 1st of July, 2014.",
        milspec: [
          {
            name: "Negev | Desert-Strike",
            icon: "NegevDesertStrike",
            canbestattrak: true
          },
          {
            name: "UMP-45 | Labyrinth",
            icon: "UMP45Labyrinth",
            canbestattrak: true
          },
          {
            name: "MP7 | Urban Hazard",
            icon: "MP7UrbanHazard",
            canbestattrak: true
          },
          {
            name: "P2000 | Ivory",
            icon: "P2000Ivory",
            canbestattrak: true
          },
          {
            name: "SSG 08 | Abyss",
            icon: "SSG08Abyss",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "PP-Bizon | Osiris",
            icon: "PPBizonOsiris",
            canbestattrak: true
          },
          {
            name: "CZ75-Auto | Tigris",
            icon: "CZ75AutoTigris",
            canbestattrak: true
          },
          {
            name: "Nova | Koi",
            icon: "NovaKoi",
            canbestattrak: true
          },
          {
            name: "P250 | Supernova",
            icon: "P250Supernova",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "Five-SeveN | Fowl Play",
            icon: "FiveSeveNFowlPlay",
            canbestattrak: true
          },
          {
            name: "Desert Eagle | Conspiracy",
            icon: "DesertEagleConspiracy",
            canbestattrak: true
          },
          {
            name: "Glock-18 | Water Elemental",
            icon: "Glock18WaterElemental",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "M4A1-S | Cyrex",
            icon: "M4A1SCyrex",
            canbestattrak: true
          },
          {
            name: "P90 | Asiimov",
            icon: "P90Asiimov",
            canbestattrak: true
          }
        ],
        gold: {
          knives: ["Butterfly Knife"],
          patterns: ["Fade","Vanilla","Slaughter","Crimson Web","Case Hardened","Blue Steel","Stained","Night","Safari Mesh","Boreal Forest","Scorched","Forest DDPAT","Urban Masked"]
        }
      },
      {
        name: "Operation Vanguard Weapon Case",
        type: "knife",
        icon: "weaponcase1.png",
        desc: "This case was released on the 11th of November, 2014.",
        milspec: [
          {
            name: "G3SG1 | Murky",
            icon: "G3SG1Murky",
            canbestattrak: true
          },
          {
            name: "UMP-45 | Delusion",
            icon: "UMP45Delusion",
            canbestattrak: true
          },
          {
            name: "MP9 | Dart",
            icon: "MP9Dart",
            canbestattrak: true
          },
          {
            name: "Five-SeveN | Urban Hazard",
            icon: "FiveSeveNUrbanHazard",
            canbestattrak: true
          },
          {
            name: "MAG-7 | Firestarter",
            icon: "MAG7Firestarter",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "Sawed-Off | Highwayman",
            icon: "SawedOffHighwayman",
            canbestattrak: true
          },
          {
            name: "Glock-18 | Grinder",
            icon: "Glock18Grinder",
            canbestattrak: true
          },
          {
            name: "M4A1-S | Basilisk",
            icon: "M4A1SBasilisk",
            canbestattrak: true
          },
          {
            name: "M4A4 | Griffin",
            icon: "M4A4Griffin",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "P250 | Cartel",
            icon: "P250Cartel",
            canbestattrak: true
          },
          {
            name: "SCAR-20 | Cardiac",
            icon: "SCAR20Cardiac",
            canbestattrak: true
          },
          {
            name: "XM1014 | Tranquility",
            icon: "XM1014Tranquility",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "P2000 | Fire Elemental",
            icon: "P2000FireElemental",
            canbestattrak: true
          },
          {
            name: "AK-47 | Wasteland Rebel",
            icon: "AK47WastelandRebel",
            canbestattrak: true
          }
        ],
        gold: {
          knives: ["Bayonet", "Flip Knife", "Gut Knife", "Karambit", "M9 Bayonet"],
          patterns: ["Fade","Vanilla","Slaughter","Crimson Web","Case Hardened","Blue Steel","Stained","Night","Safari Mesh","Boreal Forest","Scorched","Forest DDPAT","Urban Masked"]
        }
      },
      {
        name: "Spectrum Case",
        type: "knife",
        icon: "weaponcase1.png",
        desc: "This case was released on the 16th of March, 2017.",
        milspec: [
          {
            name: "PP-Bizon | Jungle Slipstream",
            icon: "PPBizonJungleSlipstream",
            canbestattrak: true
          },
          {
            name: "MP7 | Akoben",
            icon: "MP7Akoben",
            canbestattrak: true
          },
          {
            name: "Sawed-Off | Zander",
            icon: "SawedOffZander",
            canbestattrak: true
          },
          {
            name: "SCAR-20 | Blueprint",
            icon: "SCAR20Blueprint",
            canbestattrak: true
          },
          {
            name: "P250 | Ripple",
            icon: "P250Ripple",
            canbestattrak: true
          },
          {
            name: "Five-SeveN | Capillary",
            icon: "FiveSeveNCapillary",
            canbestattrak: true
          },
          {
            name: "Desert Eagle | Oxide Blaze",
            icon: "DesertEagleOxideBlaze",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "MAC-10 | Last Dive",
            icon: "MAC10LastDive",
            canbestattrak: true
          },
          {
            name: "Galil AR | Crimson Tsunami",
            icon: "GalilARCrimsonTsunami",
            canbestattrak: true
          },
          {
            name: "M249 | Emerald Poison Dart",
            icon: "M249EmeraldPoisonDart",
            canbestattrak: true
          },
          {
            name: "UMP-45 | Scaffold",
            icon: "UMP45Scaffold",
            canbestattrak: true
          },
          {
            name: "XM1014 | Seasons",
            icon: "XM1014Seasons",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "CZ75-Auto | Xiangliu",
            icon: "CZ75AutoXiangliu",
            canbestattrak: true
          },
          {
            name: "AWP | Fever Dream",
            icon: "AWPFeverDream",
            canbestattrak: true
          },
          {
            name: "M4A1-S | Decimator",
            icon: "M4A1SDecimator",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "USP-S | Neo-Noir",
            icon: "USPSNeoNoir",
            canbestattrak: true
          },
          {
            name: "AK-47 | Bloodsport",
            icon: "AK47Bloodsport",
            canbestattrak: true
          }
        ],
        gold: {
          knives: ["Bowie Knife", "Falchion Knife", "Butterfly Knife", "Huntsman Knife", "Shadow Daggers"],
          patterns: ["Ultraviolet","Rust Coat","Damascus Steel","Tiger Tooth","Doppler","Marble Fade"]
        }
      },
      {
        name: "Spectrum 2 Case",
        type: "knife",
        icon: "weaponcase1.png",
        desc: "This case was released on the 14th of September, 2017.",
        milspec: [
          {
            name: "SCAR-20 | Jungle Slipstream",
            icon: "SCAR20JungleSlipstream",
            canbestattrak: true
          },
          {
            name: "G3SG1 | Hunter",
            icon: "G3SG1Hunter",
            canbestattrak: true
          },
          {
            name: "Sawed-Off | Morris",
            icon: "SawedOffMorris",
            canbestattrak: true
          },
          {
            name: "MAC-10 | Oceanic",
            icon: "MAC10Oceanic",
            canbestattrak: true
          },
          {
            name: "Tec-9 | Cracked Opal",
            icon: "Tec9CrackedOpal",
            canbestattrak: true
          },
          {
            name: "AUG | Triqua",
            icon: "AUGTriqua",
            canbestattrak: true
          },
          {
            name: "Glock-18 | Off World",
            icon: "Glock18OffWorld",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "XM1014 | Ziggy",
            icon: "XM1014Ziggy",
            canbestattrak: true
          },
          {
            name: "UMP-45 | Exposure",
            icon: "UMP45Exposure",
            canbestattrak: true
          },
          {
            name: "SG 553 | Phantom",
            icon: "SG553Phantom",
            canbestattrak: true
          },
          {
            name: "CZ75-Auto | Tacticat",
            icon: "CZ75AutoTacticat",
            canbestattrak: true
          },
          {
            name: "MP9 | Goo",
            icon: "MP9Goo",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "R8 Revolver | Llama Cannon",
            icon: "R8RevolverLlamaCannon",
            canbestattrak: true
          },
          {
            name: "PP-Bizon | High Roller",
            icon: "PPBizonHighRoller",
            canbestattrak: true
          },
          {
            name: "M4A1-S | Leaded Glass",
            icon: "M4A1SLeadedGlass",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "P250 | See Ya Later",
            icon: "P250SeeYaLater",
            canbestattrak: true
          },
          {
            name: "AK-47 | The Empress",
            icon: "AK47TheEmpress",
            canbestattrak: true
          }
        ],
        gold: {
          knives: ["Bowie Knife", "Falchion Knife", "Butterfly Knife", "Huntsman Knife", "Shadow Daggers"],
          patterns: ["Ultraviolet","Rust Coat","Damascus Steel","Tiger Tooth","Doppler","Marble Fade"]
        }
      },
      {
        name: "Falchion Case",
        type: "knife",
        icon: "weaponcase1.png",
        desc: "This case was released on the 26th of May, 2015.",
        milspec: [
          {
            name: "UMP-45 | Riot",
            icon: "UMP45Riot",
            canbestattrak: true
          },
          {
            name: "Nova | Ranger",
            icon: "NovaRanger",
            canbestattrak: true
          },
          {
            name: "Glock-18 | Bunsen Burner",
            icon: "Glock18BunsenBurner",
            canbestattrak: true
          },
          {
            name: "P90 | Elite Build",
            icon: "P90EliteBuild",
            canbestattrak: true
          },
          {
            name: "USP-S | Torque",
            icon: "USPSTorque",
            canbestattrak: true
          },
          {
            name: "Galil AR | Rocket Pop",
            icon: "GalilARRocketPop",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "FAMAS | Neural Net",
            icon: "FAMASNeuralNet",
            canbestattrak: true
          },
          {
            name: "P2000 | Handgun",
            icon: "P2000Handgun",
            canbestattrak: true
          },
          {
            name: "MP9 | Ruby Poison Dart",
            icon: "MP9RubyPoisonDart",
            canbestattrak: true
          },
          {
            name: "Negev | Loudmouth",
            icon: "NegevLoudMouth",
            canbestattrak: true
          },
          {
            name: "M4A4 | Evil Daimyo",
            icon: "M4A4EvilDaimyo",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "CZ75-Auto | Yellow Jacket",
            icon: "CZ75AutoYellowJacket",
            canbestattrak: true
          },
          {
            name: "MP7 | Nemesis",
            icon: "MP7Nemesis",
            canbestattrak: true
          },
          {
            name: "SG 553 | Cyrex",
            icon: "SG553Cyrex",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "AK-47 | Aquamarine Revenge",
            icon: "AK47AquamarineRevenge",
            canbestattrak: true
          },
          {
            name: "AWP | Hyper Beast",
            icon: "AWPHyperBeast",
            canbestattrak: true
          }
        ],
        gold: {
          knives: ["Falchion Knife"],
          patterns: ["Fade","Vanilla","Slaughter","Crimson Web","Case Hardened","Blue Steel","Stained","Night","Safari Mesh","Boreal Forest","Scorched","Forest DDPAT","Urban Masked"]
        }
      },
      {
        name: "Shadow Case",
        type: "knife",
        icon: "weaponcase1.png",
        desc: "This case was released on the 17th of September, 2015.",
        milspec: [
          {
            name: "XM1014 | Scumbria",
            icon: "XM1014Scumbria",
            canbestattrak: true
          },
          {
            name: "MAG-7 | Cobalt Core",
            icon: "MAG7CobaltCore",
            canbestattrak: true
          },
          {
            name: "MAC-10 | Rangeen",
            icon: "MAC10Rangeen",
            canbestattrak: true
          },
          {
            name: "SCAR-20 | Green Marine",
            icon: "SCAR20GreenMarine",
            canbestattrak: true
          },
          {
            name: "FAMAS | Survivor Z",
            icon: "FAMASSurvivorZ",
            canbestattrak: true
          },
          {
            name: "Glock-18 | Wraiths",
            icon: "Glock18Wraiths",
            canbestattrak: true
          },
          {
            name: "Dual Berettas | Dualing Dragons",
            icon: "DualBerettasDualingDragons",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "MP7 | Special Delivery",
            icon: "MP7SpecialDelivery",
            canbestattrak: true
          },
          {
            name: "M249 | Nebula Crusader",
            icon: "M249NebulaCrusader",
            canbestattrak: true
          },
          {
            name: "P250 | Wingshot",
            icon: "P250Wingshot",
            canbestattrak: true
          },
          {
            name: "Galil AR | Stone Cold",
            icon: "GalilARStoneCold",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "G3SG1 | Flux",
            icon: "G3SG1Flux",
            canbestattrak: true
          },
          {
            name: "SSG 08 | Big Iron",
            icon: "SSG08BigIron",
            canbestattrak: true
          },
          {
            name: "AK-47 | Frontside Misty",
            icon: "AK47FrontsideMisty",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "M4A1-S | Golden Coil",
            icon: "M4A1SGoldenCoil",
            canbestattrak: true
          },
          {
            name: "USP-S | Kill Confirmed",
            icon: "USPSKillConfirmed",
            canbestattrak: true
          }
        ],
        gold: {
          knives: ["Shadow Daggers"],
          patterns: ["Fade","Vanilla","Slaughter","Crimson Web","Case Hardened","Blue Steel","Stained","Night","Safari Mesh","Boreal Forest","Scorched","Forest DDPAT","Urban Masked"]
        }
      },
      {
        name: "Revolver Case",
        type: "knife",
        icon: "weaponcase1.png",
        desc: "This case was added on the 8th of December, 2015.",
        milspec: [
          {
            name: "SCAR-20 | Outbreak",
            icon: "SCAR20Outbreak",
            minfloat: "0.00",
            maxfloat: "0.14",
            canbestattrak: true
          },
          {
            name: "Sawed-Off | Yorick",
            icon: "SawedOffYorick",
            minfloat: "0.06",
            maxfloat: "0.80",
            canbestattrak: true
          },
          {
            name: "P2000 | Imperial",
            icon: "P2000Imperial",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "Desert Eagle | Corinthian",
            icon: "DesertEagleCorinthian",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "R8 Revolver | Crimson Web",
            icon: "R8RevolverCrimsonWeb",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "AUG | Ricochet",
            icon: "AUGRicochet",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "XM1014 | Teclu Burner",
            icon: "XM1014TecluBurner",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "PP-Bizon | Fuel Rod",
            icon: "PPBizonFuelRod",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "Five-SeveN | Retrobution",
            icon: "FiveSeveNRetrobution",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "Tec-9 | Avalanche",
            icon: "Tec9Avalanche",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "SG 553 | Tiger Moth",
            icon: "SG553TigerMoth",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "Negev | Power Loader",
            icon: "NegevPowerLoader",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "P90 | Shapewood",
            icon: "P90Shapewood",
            minfloat: "0.00",
            maxfloat: "1.00",
            canbestattrak: true
          },
          {
            name: "G3SG1 | The Executioner",
            icon: "G3SG1TheExecutioner",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "AK-47 | Point Disarray",
            icon: "AK47PointDisarray",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "R8 Revolver | Fade",
            icon: "R8RevolverFade",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "M4A4 | Royal Paladin",
            icon: "M4A4RoyalPaladin",
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
        name: "Operation Wildfire Case",
        type: "knife",
        icon: "weaponcase1.png",
        desc: "This case was added on the 8th of December, 2015.",
        milspec: [
          {
            name: "Tec-9 | Jambiya",
            icon: "Tec9Jambiya",
            minfloat: "0.00",
            maxfloat: "0.14",
            canbestattrak: true
          },
          {
            name: "MAC-10 | Lapis Gator",
            icon: "MAC10LapisGator",
            minfloat: "0.06",
            maxfloat: "0.80",
            canbestattrak: true
          },
          {
            name: "Dual Berettas | Cartel",
            icon: "DualBerettasCartel",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "PP-Bizon | Photic Zone",
            icon: "PPBizonPhoticZone",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "SSG 08 | Necropos",
            icon: "SSG08Necropos",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "USP-S | Lead Conduit",
            icon: "USPSLeadConduit",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "Five-SeveN | Triumvirate",
            icon: "FiveSeveNTriumvirate",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "MP7 | Impire",
            icon: "MP7Impire",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "MAG-7 | Praetorian",
            icon: "MAG7Praetorian",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "FAMAS | Valence",
            icon: "FAMASValence",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "Glock-18 | Royal Legion",
            icon: "Glock18RoyalLegion",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "Nova | Hyper Beast",
            icon: "NovaHyperBeast",
            minfloat: "0.00",
            maxfloat: "1.00",
            canbestattrak: true
          },
          {
            name: "AWP | Elite Build",
            icon: "AWPEliteBuild",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "Desert Eagle | Kumicho Dragon",
            icon: "DesertEagleKumichoDragon",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "M4A4 | The Battlestar",
            icon: "M4A4TheBattlestar",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "AK-47 | Fuel Injector",
            icon: "AK47FuelInjector",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          }
        ],
        gold: {
          knives: ["Bowie Knife"],
          patterns: ["Fade","Vanilla","Slaughter","Crimson Web","Case Hardened","Blue Steel","Stained","Night","Safari Mesh","Boreal Forest","Scorched","Forest DDPAT","Urban Masked"]
        }
      },
      {
        name: "Chroma Case",
        type: "knife",
        icon: "weaponcase1.png",
        desc: "This case was added on the 8th of January, 2015.",
        milspec: [
          {
            name: "XM1014 | Quicksilver",
            icon: "XM1014Quicksilver",
            minfloat: "0.00",
            maxfloat: "0.14",
            canbestattrak: true
          },
          {
            name: "SCAR-20 | Grotto",
            icon: "SCAR20Grotto",
            minfloat: "0.06",
            maxfloat: "0.80",
            canbestattrak: true
          },
          {
            name: "M249 | System Lock",
            icon: "M249SystemLock",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "Glock-18 | Catacombs",
            icon: "Glock18Catacombs",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "MP9 | Deadly Poison",
            icon: "MP9DeadlyPoison",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "Sawed-Off | Serenity",
            icon: "SawedOffSerenity",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "Dual Berettas | Urban Shock",
            icon: "DualBerettasUrbanShock",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "MAC-10 | Malachite",
            icon: "MAC10Malachite",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "Desert Eagle | Naga",
            icon: "DesertEagleNaga",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "P250 | Muertos",
            icon: "P250Muertos",
            minfloat: "0.00",
            maxfloat: "1.00",
            canbestattrak: true
          },
          {
            name: "AK-47 | Cartel",
            icon: "AK47Cartel",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "M4A4 | 龍王 (Dragon King)",
            icon: "M4A4DragonKing",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "AWP | Man-o'-war",
            icon: "AWPManoWar",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "Galil AR | Chatterbox",
            icon: "GalilARChatterbox",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          }
        ],
        gold: {
          knives: ["Bayonet","Flip Knife","Gut Knife","Karambit","M9 Bayonet"],
          patterns: ["Marble Fade", "Tiger Tooth", "Doppler", "Damascus Steel", "Rust Coat", "Ultraviolet"]
        }
      },
      {
        name: "Chroma 2 Case",
        type: "knife",
        icon: "weaponcase1.png",
        desc: "This case was added on the 15th of April, 2015.",
        milspec: [
          {
            name: "MP7 | Armor Core",
            icon: "MP7ArmorCore",
            minfloat: "0.00",
            maxfloat: "0.14",
            canbestattrak: true
          },
          {
            name: "Negev | Man-o'-war",
            icon: "NegevManowar",
            minfloat: "0.06",
            maxfloat: "0.80",
            canbestattrak: true
          },
          {
            name: "Sawed-Off | Origami",
            icon: "SawedOffOrigami",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "P250 | Valence",
            icon: "P250Valence",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "Desert Eagle | Bronze Deco",
            icon: "DesertEagleBronzeDeco",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "AK-47 | Elite Build",
            icon: "AK47EliteBuild",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "UMP-45 | Grand Prix",
            icon: "UMP45GrandPrix",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "CZ75-Auto | Pole Position",
            icon: "CZ75AutoPolePosition",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "MAG-7 | Heat",
            icon: "MAG7Heat",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "AWP | Worm God",
            icon: "AWPWormGod",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "FAMAS | Djinn",
            icon: "FAMASDjinn",
            minfloat: "0.00",
            maxfloat: "1.00",
            canbestattrak: true
          },
          {
            name: "Five-SeveN | Monkey Business",
            icon: "FiveSeveNMonkeyBusiness",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "Galil AR | Eco",
            icon: "GalilAREco",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "MAC-10 | Neon Rider",
            icon: "MAC10NeonRider",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "M4A1-S | Hyper Beast",
            icon: "M4A1SHyperBeast",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          }
        ],
        gold: {
          knives: ["Bayonet","Flip Knife","Gut Knife","Karambit","M9 Bayonet"],
          patterns: ["Marble Fade", "Tiger Tooth", "Doppler", "Damascus Steel", "Rust Coat", "Ultraviolet"]
        }
      },
      {
        name: "Chroma 3 Case",
        type: "knife",
        icon: "weaponcase1.png",
        desc: "This case was added on the 28th of April, 2016.",
        milspec: [
          {
            name: "Sawed-Off | Fubar",
            icon: "SawedOffFubar",
            minfloat: "0.00",
            maxfloat: "0.14",
            canbestattrak: true
          },
          {
            name: "G3SG1 | Orange Crash",
            icon: "G3SG1OrangeCrash",
            minfloat: "0.06",
            maxfloat: "0.80",
            canbestattrak: true
          },
          {
            name: "P2000 | Oceanic",
            icon: "P2000Oceanic",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "M249 | Spectre",
            icon: "M249Spectre",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "Dual Berettas | Ventilators",
            icon: "DualBerettasVentilators",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "SG 553 | Atlas",
            icon: "SG553Atlas",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "MP9 | Bioleak",
            icon: "MP9Bioleak",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "CZ75-Auto | Red Astor",
            icon: "CZ75AutoRedAstor",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "Tec-9 | Re-Entry",
            icon: "Tec9ReEntry",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "Galil AR | Firefight",
            icon: "GalilARFirefight",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "XM1014 | Black Tie",
            icon: "XM1014BlackTie",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "SSG 08 | Ghost Crusader",
            icon: "SSG08GhostCrusader",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "UMP-45 | Primal Saber",
            icon: "UMP45PrimalSaber",
            minfloat: "0.00",
            maxfloat: "1.00",
            canbestattrak: true
          },
          {
            name: "AUG | Fleet Flock",
            icon: "AUGFleetFlock",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "P250 | Asiimov",
            icon: "P250Asiimov",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "PP-Bizon | Judgement of Anubis",
            icon: "PPBizonJudgementofAnubis",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "M4A1-S | Chantico's Fire",
            icon: "M4A1SChanticosFire",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          }
        ],
        gold: {
          knives: ["Bayonet","Flip Knife","Gut Knife","Karambit","M9 Bayonet"],
          patterns: ["Marble Fade", "Tiger Tooth", "Doppler", "Damascus Steel", "Rust Coat", "Ultraviolet"]
        }
      },
      {
        name: "Glove Case",
        type: "glove",
        icon: "weaponcase1.png",
        desc: "This case was added on the 29th of November, 2016; it was the first case to feature Gloves as it's Exceedingly Rare item!",
        milspec: [
          {
            name: "CZ75-Auto | Polymer",
            icon: "CZ75AutoPolymer",
            minfloat: "0.00",
            maxfloat: "0.14",
            canbestattrak: true
          },
          {
            name: "MAG-7 | Sonar",
            icon: "MAG7Sonar",
            minfloat: "0.06",
            maxfloat: "0.80",
            canbestattrak: true
          },
          {
            name: "MP9 | Sand Scale",
            icon: "MP9SandScale",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "P2000 | Turf",
            icon: "P2000Turf",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "Galil AR | Black Sand",
            icon: "GalilARBlackSand",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "MP7 | Cirrus",
            icon: "MP7Cirrus",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "Glock-18 | Ironwork",
            icon: "Glock18Ironwork",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "G3SG1 | Stinger",
            icon: "G3SG1Stinger",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "Nova | Gila",
            icon: "NovaGila",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "Dual Berettas | Royal Consorts",
            icon: "DualBerettasRoyalConsorts",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "M4A1-S | Flashback",
            icon: "M4A1SFlashback",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "USP-S | Cyrex",
            icon: "USPSCyrex",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "Sawed-Off | Wasteland Princess",
            icon: "SawedOffWastelandPrincess",
            minfloat: "0.00",
            maxfloat: "1.00",
            canbestattrak: true
          },
          {
            name: "P90 | Shallow Grave",
            icon: "P90ShallowGrave",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "FAMAS | Mecha Industries",
            icon: "FAMASMechaIndustries",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "SSG 08 | Dragonfire",
            icon: "SSG08Dragonfire",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "M4A4 | Buzz Kill",
            icon: "M4A4Buzzkill",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          }
        ],
        gold: {
          gloves: ["Bloodhound Gloves | Guerrilla","Bloodhound Gloves | Charred","Bloodhound Gloves | Snakebite","Bloodhound Gloves | Bronzed","Driver Gloves | Crimson Weave","Driver Gloves | Diamondback","Driver Gloves | Lunar Weave","Driver Gloves | Convoy","Hand Wraps | Slaughter","Hand Wraps | Leather","Hand Wraps | Spruce DDPAT","Hand Wraps | Badlands","Moto Gloves | Spearmint","Moto Gloves | Cool Mint","Moto Gloves | Boom!","Moto Gloves | Eclipse","Specialist Gloves | Crimson Kimono","Specialist Gloves | Emerald Web","Specialist Gloves | Foundation","Specialist Gloves | Forest DDPAT","Sport Gloves | Superconductor","Sport Gloves | Pandora's Box","Sport Gloves | Hedge Maze","Sport Gloves | Arid"],
          icons:  ["BloodhoundGlovesGuerrilla",    "BloodhoundGlovesCharred",    "BloodhoundGlovesSnakebite",    "BloodhoundGlovesBronzed",    "DriverGlovesCrimsonWeave",     "DriverGlovesDiamondback",    "DriverGlovesLunarWeave",     "DriverGlovesConvoy",    "HandWrapsSlaughter",    "HandWrapsLeather",    "HandWrapsSpruceDDPAT",     "HandWrapsBadlands",    "MotoGlovesSpearmint"    ,"MotoGlovesCoolMint",     "MotoGlovesBoom",     "MotoGlovesEclipse",    "SpecialistGlovesCrimsonKimono",
                  "SpecialistGlovesEmeraldWeb",     "SpecialistGlovesFoundation",    "SpecialistGlovesForestDDPAT",     "SportGlovesSuperconductor",    "SportGlovesPandorasBox",      "SportGlovesHedgeMaze",     "SportGlovesArid"]
        }
      },
      {
        name: "Clutch Case",
        type: "glove",
        icon: "weaponcase1.png",
        desc: "This case was added on the 16th of February, 2018.",
        milspec: [
          {
            name: "PP-Bizon | Night Riot",
            icon: "PPBizonNightRiot",
            minfloat: "0.00",
            maxfloat: "0.14",
            canbestattrak: true
          },
          {
            name: "XM1014 | Oxide Blaze",
            icon: "XM1014OxideBlaze",
            minfloat: "0.06",
            maxfloat: "0.80",
            canbestattrak: true
          },
          {
            name: "P2000 | Urban Hazard",
            icon: "P2000UrbanHazard",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "Five-SeveN | Flame Test",
            icon: "FiveSeveNFlameTest",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "SG 553 | Aloha",
            icon: "SG553Aloha",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "R8 Revolver | Grip",
            icon: "R8RevolverGrip",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "MP9 | Black Sand",
            icon: "MP9BlackSand",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "Negev | Lionfish",
            icon: "NegevLionfish",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "Nova | Wild Six",
            icon: "NovaWildSix",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "UMP-45 | Arctic Wolf",
            icon: "UMP45ArcticWolf",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "MAG-7 | SWAG-7",
            icon: "MAG7SWAG7",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "Glock-18 | Moonrise",
            icon: "Glock18Moonrise",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "AUG | Stymphalian",
            icon: "AUGStymphalian",
            minfloat: "0.00",
            maxfloat: "1.00",
            canbestattrak: true
          },
          {
            name: "AWP | Mortis",
            icon: "AWPMortis",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "USP-S | Cortex",
            icon: "USPSCortex",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "MP7 | Bloodsport",
            icon: "MP7Bloodsport",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "M4A4 | Neo-Noir",
            icon: "M4A4NeoNoir",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          }
        ],
        gold: {
          gloves: ["Driver Gloves | Imperial Plaid","Driver Gloves | King Snake","Driver Gloves | Overtake","Driver Gloves | Racing Green","Hand Wraps | Cobalt Skulls","Hand Wraps | Overprint","Hand Wraps | Duct Tape","Hand Wraps | Arboreal","Hydra Gloves | Emerald","Hydra Gloves | Mangrove","Hydra Gloves | Case Hardened","Hydra Gloves | Rattler","Moto Gloves | POW!","Moto Gloves | Polygon",
          "Moto Gloves | Turtle","Moto Gloves | Transport","Specialist Gloves | Fade","Specialist Gloves | Crimson Web","Specialist Gloves | Mogul","Specialist Gloves | Buckshot","Sport Gloves | Vice","Sport Gloves | Omega","Sport Gloves | Amphibious","Sport Gloves | Bronze Morph"],
          icons:  ["DriverGlovesImperialPlaid",     "DriverGlovesKingSnake",     "DriverGlovesOvertake",    "DriverGlovesRacingGreen",     "HandWrapsCobaltSkulls",     "HandWrapsOverprint",    "HandWrapsDuctTape",     "HandWrapsArboreal",    "HydraGlovesEmerald",    "HydraGlovesMangrove",    "HydraGlovesCaseHardened",     "HydraGlovesRattler",    "MotoGlovesPOW",     "MotoGlovesPolygon" ,
          "MotoGlovesTurtle",    "MotoGlovesTransport",    "SpecialistGlovesFade",    "SpecialistGlovesCrimsonWeb",     "SpecialistGlovesMogul",    "SpecialistGlovesBuckshot",    "SportGlovesVice",    "SportGlovesOmega",    "SportGlovesAmphibious",    "SportGlovesBronzeMorph"]
        }
      },
      {
        name: "Operation Hydra Case",
        type: "glove",
        icon: "weaponcase1.png",
        desc: "This case was added on the 24th of May, 2017; it features the same special items as the glove case, but costs 7.50 a pop. Don't open it unless you want that AWP.",
        milspec: [
          {
            name: "FAMAS | Macabre",
            icon: "FAMASMacabre",
            minfloat: "0.00",
            maxfloat: "0.14",
            canbestattrak: true
          },
          {
            name: "UMP-45 | Metal Flowers",
            icon: "UMP45MetalFlowers",
            minfloat: "0.06",
            maxfloat: "0.80",
            canbestattrak: true
          },
          {
            name: "Tec-9 | Cut Out",
            icon: "Tec9CutOut",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "MAG-7 | Hard Water",
            icon: "MAG7HardWater",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "MAC-10 | Aloha",
            icon: "MAC10Aloha",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "M4A1-S | Briefing",
            icon: "M4A1SBriefing",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "USP-S | Blueprint",
            icon: "USPSBlueprint",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "P250 | Red Rock",
            icon: "P250RedRock",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "P2000 | Woodsman",
            icon: "P2000Woodsman",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "SSG 08 | Death's Head",
            icon: "SSG08DeathsHead",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "P90 | Death Grip",
            icon: "P90DeathGrip",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "AK-47 | Orbit Mk01",
            icon: "AK47OrbitMk01",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "Galil AR | Sugar Rush",
            icon: "GalilARSugarRush",
            minfloat: "0.00",
            maxfloat: "1.00",
            canbestattrak: true
          },
          {
            name: "Dual Berettas | Cobra Strike",
            icon: "DualBerettasCobraStrike",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "M4A4 | Hellfire",
            icon: "M4A4Hellfire",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "Five-SeveN | Hyper Beast",
            icon: "FiveSeveNHyperBeast",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "AWP | Oni Taiji",
            icon: "AWPOniTaiji",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          }
        ],
        gold: {
          gloves: ["Bloodhound Gloves | Guerrilla","Bloodhound Gloves | Charred","Bloodhound Gloves | Snakebite","Bloodhound Gloves | Bronzed","Driver Gloves | Crimson Weave","Driver Gloves | Diamondback","Driver Gloves | Lunar Weave","Driver Gloves | Convoy","Hand Wraps | Slaughter","Hand Wraps | Leather","Hand Wraps | Spruce DDPAT","Hand Wraps | Badlands","Moto Gloves | Spearmint","Moto Gloves | Cool Mint","Moto Gloves | Boom!","Moto Gloves | Eclipse","Specialist Gloves | Crimson Kimono","Specialist Gloves | Emerald Web","Specialist Gloves | Foundation","Specialist Gloves | Forest DDPAT","Sport Gloves | Superconductor","Sport Gloves | Pandora's Box","Sport Gloves | Hedge Maze","Sport Gloves | Arid"],
          icons:  ["BloodhoundGlovesGuerrilla",    "BloodhoundGlovesCharred",    "BloodhoundGlovesSnakebite",    "BloodhoundGlovesBronzed",    "DriverGlovesCrimsonWeave",     "DriverGlovesDiamondback",    "DriverGlovesLunarWeave",     "DriverGlovesConvoy",    "HandWrapsSlaughter",    "HandWrapsLeather",    "HandWrapsSpruceDDPAT",     "HandWrapsBadlands",    "MotoGlovesSpearmint"    ,"MotoGlovesCoolMint",     "MotoGlovesBoom",     "MotoGlovesEclipse",    "SpecialistGlovesCrimsonKimono",
                  "SpecialistGlovesEmeraldWeb",     "SpecialistGlovesFoundation",    "SpecialistGlovesForestDDPAT",     "SportGlovesSuperconductor",    "SportGlovesPandorasBox",      "SportGlovesHedgeMaze",     "SportGlovesArid"]
        }
      },
      {
        name: "Gamma Case",
        type: "knife",
        icon: "weaponcase1.png",
        desc: "This case was released on the 16th of June, 2016.",
        milspec: [
          {
            name: "PP-Bizon | Harvester",
            icon: "PPBizonHarvester",
            canbestattrak: true
          },
          {
            name: "Nova | Exo",
            icon: "NovaExo",
            canbestattrak: true
          },
          {
            name: "P250 | Iron Clad",
            icon: "P250IronClad",
            canbestattrak: true
          },
          {
            name: "MAC-10 | Carnivore",
            icon: "MAC10Carnivore",
            canbestattrak: true
          },
          {
            name: "Tec-9 | Ice Cap",
            icon: "Tec9IceCap",
            canbestattrak: true
          },
          {
            name: "SG 553 | Aerial",
            icon: "SG553Aerial",
            canbestattrak: true
          },
          {
            name: "Five-SeveN | Violent Daimyo",
            icon: "FiveSeveNViolentDaimyo",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "Sawed-Off | Limelight",
            icon: "SawedOffLimelight",
            canbestattrak: true
          },
          {
            name: "P90 | Chopper",
            icon: "P90Chopper",
            canbestattrak: true
          },
          {
            name: "AUG | Aristocrat",
            icon: "AUGAristocrat",
            canbestattrak: true
          },
          {
            name: "R8 Revolver | Reboot",
            icon: "R8RevolverReboot",
            canbestattrak: true
          },
          {
            name: "AWP | Phobos",
            icon: "AWPPhobos",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "SCAR-20 | Bloodsport",
            icon: "SCAR20Bloodsport",
            canbestattrak: true
          },
          {
            name: "P2000 | Imperial Dragon",
            icon: "P2000ImperialDragon",
            canbestattrak: true
          },
          {
            name: "M4A4 | Desolate Space",
            icon: "M4A4DesolateSpace",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "Glock-18 | Wasteland Rebel",
            icon: "Glock18WastelandRebel",
            canbestattrak: true
          },
          {
            name: "M4A1-S | Mecha Industries",
            icon: "M4A1SMechaIndustries",
            canbestattrak: true
          }
        ],
        gold: {
          knives: ["Bayonet", "Flip Knife", "Gut Knife", "Karambit", "M9 Bayonet"],
          patterns: ["Lore", "Gamma Doppler", "Autotronic", "Black Laminate", "Bright Water", "Freehand"]
        }
      },
      {
        name: "Gamma 2 Case",
        type: "knife",
        icon: "weaponcase1.png",
        desc: "This case was released on the 19th of August, 2016.",
        milspec: [
          {
            name: "G3SG1 | Ventilator",
            icon: "G3SG1Ventilator",
            canbestattrak: true
          },
          {
            name: "Five-SeveN | Scumbria",
            icon: "FiveSeveNScumbria",
            canbestattrak: true
          },
          {
            name: "XM1014 | Slipstream",
            icon: "XM1014Slipstream",
            canbestattrak: true
          },
          {
            name: "CZ75-Auto | Imprint",
            icon: "CZ75AutoImprint",
            canbestattrak: true
          },
          {
            name: "UMP-45 | Briefing",
            icon: "UMP45Briefing",
            canbestattrak: true
          },
          {
            name: "Negev | Dazzle",
            icon: "NegevDazzle",
            canbestattrak: true
          },
          {
            name: "P90 | Grim",
            icon: "P90Grim",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "SCAR-20 | Powercore",
            icon: "SCAR20Powercore",
            canbestattrak: true
          },
          {
            name: "MAG-7 | Petroglyph",
            icon: "MAG7Petroglyph",
            canbestattrak: true
          },
          {
            name: "SG 553 | Triarch",
            icon: "SG553Triarch",
            canbestattrak: true
          },
          {
            name: "Glock-18 | Weasel",
            icon: "Glock18Weasel",
            canbestattrak: true
          },
          {
            name: "Desert Eagle | Directive",
            icon: "DesertEagleDirective",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "Tec-9 | Fuel Injector",
            icon: "Tec9FuelInjector",
            canbestattrak: true
          },
          {
            name: "AUG | Syd Mead",
            icon: "AUGSydMead",
            canbestattrak: true
          },
          {
            name: "MP9 | Airlock",
            icon: "MP9Airlock",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "FAMAS | Roll Cage",
            icon: "FAMASRollCage",
            canbestattrak: true
          },
          {
            name: "AK-47 | Neon Revolution",
            icon: "AK47NeonRevolution",
            canbestattrak: true
          }
        ],
        gold: {
          knives: ["Bayonet", "Flip Knife", "Gut Knife", "Karambit", "M9 Bayonet"],
          patterns: ["Lore", "Gamma Doppler", "Autotronic", "Black Laminate", "Bright Water", "Freehand"]
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
            itemicon.className = "weaponicon this"+Object.keys(cases[currentcase])[i]

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
      if (cases[currentcase].type == "glove") {
        for (var i = 0; i < cases[currentcase].gold.gloves.length; i++) {
          var knifeicon = cases[currentcase].gold.icons[i]+".png"
          var knifename = cases[currentcase].gold.gloves[i]
          var itemicon = document.createElement("img")
          itemicon.src = "weaponicons/gloves/"+knifeicon
          itemicon.className = "weaponicon thisgold"

          var itemtooltip = document.createElement("span")
          var itemst = document.createElement("span")
          itemst.appendChild(document.createTextNode(`Cannot Be StatTrak™`))
          itemtooltip.className = 'ict'
          itemtooltip.appendChild(itemst)

          if (window.pricelist["★ "+knifename + " (Factory New)"]) {
            itemtooltip.appendChild(document.createElement("br"))
            itemtooltip.appendChild(document.createTextNode("FN: $"+window.pricelist["★ "+knifename + " (Factory New)"]))
          } else {
            itemtooltip.appendChild(document.createElement("br"))
            itemtooltip.appendChild(document.createTextNode("FN: Unpriced"))
          }
          if (window.pricelist["★ "+knifename + " (Minimal Wear)"]) {
            itemtooltip.appendChild(document.createElement("br"))
            itemtooltip.appendChild(document.createTextNode("MW: $"+window.pricelist["★ "+knifename + " (Minimal Wear)"]))
          } else {
            itemtooltip.appendChild(document.createElement("br"))
            itemtooltip.appendChild(document.createTextNode("MW: Unpriced"))
          }
          if (window.pricelist["★ "+knifename + " (Field-Tested)"]) {
            itemtooltip.appendChild(document.createElement("br"))
            itemtooltip.appendChild(document.createTextNode("FT: $"+window.pricelist["★ "+knifename + " (Field-Tested)"]))
          } else {
            itemtooltip.appendChild(document.createElement("br"))
            itemtooltip.appendChild(document.createTextNode("FT: Unpriced"))
          }
          if (window.pricelist["★ "+knifename + " (Well-Worn)"]) {
            itemtooltip.appendChild(document.createElement("br"))
            itemtooltip.appendChild(document.createTextNode("WW: $"+window.pricelist["★ "+knifename + " (Well-Worn)"]))
          } else {
            itemtooltip.appendChild(document.createElement("br"))
            itemtooltip.appendChild(document.createTextNode("WW: Unpriced"))
          }
          if (window.pricelist["★ "+knifename + " (Battle-Scarred)"]) {
            itemtooltip.appendChild(document.createElement("br"))
            itemtooltip.appendChild(document.createTextNode("BS: $"+window.pricelist["★ "+knifename + " (Battle-Scarred)"]))
          } else {
            itemtooltip.appendChild(document.createElement("br"))
            itemtooltip.appendChild(document.createTextNode("BS: Unpriced"))
          }

          var itemname = document.createElement("div")
          itemname.appendChild(document.createTextNode("★ "+knifename))

          var itemcontainer = document.createElement("div")
          itemcontainer.className = "ic"
          itemcontainer.appendChild(itemicon)
          itemcontainer.appendChild(itemname)
          itemcontainer.appendChild(itemtooltip)

          document.getElementById("casecontent").append(itemcontainer)
        }
      } else {
        for (var i = 0; i < cases[currentcase].gold.knives.length; i++) {
          for (var x = 0; x < cases[currentcase].gold.patterns.length; x++) {
            cases[currentcase].gold.knives[i]
            cases[currentcase].gold.patterns[x]
            var knifeicon = getknifeicon(cases[currentcase].gold.knives[i], cases[currentcase].gold.patterns[x])
            var knifename = getknifename(cases[currentcase].gold.knives[i], cases[currentcase].gold.patterns[x])
            var knifefloats = getpatternfloats(cases[currentcase].gold.patterns[x])
            var itemicon = document.createElement("img")
            itemicon.src = "weaponicons/knives/"+knifeicon
            itemicon.className = "weaponicon thisgold"

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
              } else {
                var itemst = document.createElement("span")
                itemst.appendChild(document.createTextNode(" Unpriced"))
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
              } else {
                var itemst = document.createElement("span")
                itemst.appendChild(document.createTextNode(" Unpriced"))
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
              } else {
                var itemst = document.createElement("span")
                itemst.appendChild(document.createTextNode(" Unpriced"))
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
              } else {
                var itemst = document.createElement("span")
                itemst.appendChild(document.createTextNode(" Unpriced"))
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
              } else {
                var itemst = document.createElement("span")
                itemst.appendChild(document.createTextNode(" Unpriced"))
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
    document.getElementById('loadcase11').addEventListener('click', function(){currentcase = 10; loadacase()})
    document.getElementById('loadcase12').addEventListener('click', function(){currentcase = 11; loadacase()})
    document.getElementById('loadcase13').addEventListener('click', function(){currentcase = 12; loadacase()})
    document.getElementById('loadcase14').addEventListener('click', function(){currentcase = 13; loadacase()})
    document.getElementById('loadcase15').addEventListener('click', function(){currentcase = 14; loadacase()})
    document.getElementById('loadcase16').addEventListener('click', function(){currentcase = 15; loadacase()})
    document.getElementById('loadcase17').addEventListener('click', function(){currentcase = 16; loadacase()})
    document.getElementById('loadcase18').addEventListener('click', function(){currentcase = 17; loadacase()})
    document.getElementById('loadcase19').addEventListener('click', function(){currentcase = 18; loadacase()})
    document.getElementById('loadcase20').addEventListener('click', function(){currentcase = 19; loadacase()})
    document.getElementById('loadcase21').addEventListener('click', function(){currentcase = 20; loadacase()})
    document.getElementById('loadcase22').addEventListener('click', function(){currentcase = 21; loadacase()})
    document.getElementById('loadcase23').addEventListener('click', function(){currentcase = 22; loadacase()})
    document.getElementById('loadcase24').addEventListener('click', function(){currentcase = 23; loadacase()})
    document.getElementById('loadcase25').addEventListener('click', function(){currentcase = 24; loadacase()})
    document.getElementById('loadcase26').addEventListener('click', function(){currentcase = 25; loadacase()})
  }
  if (toppage) {
    var topitems = [
      {
        "name": "★ StatTrak™ M9 Bayonet | Crimson Web (Factory New)",
        "price": 6500,
        "notes": "It's the best item in CSGOClicker. It's super rare and hard to find even though it comes in a lot of cases. This is due to the fact that Factory New Crimson Web knives are a little less than 7x rarer than most other Knives' patterns",
        "origin": "Revolver Case, Operation Vanguard Case, Operation Phoenix Case, CS:GO Weapon Case 3, eSports 2014 Summer Case, eSports 2013 Winter Case, CS:GO Weapon Case 2, Winter Offensive Weapon Case, eSports 2013 Case, CS:GO Weapon Case, Operation Bravo Case",
        "icon": "weaponicons/knives/M9Bayonet/CrimsonWeb.png",
        "quality": "Exceedingly Rare Special Item",
        "rarityresult": "~0.00000519230769%"
      },
      {
        "name": "★ StatTrak™ Falchion Knife | Crimson Web (Factory New)",
        "price": 6500,
        "notes": "It's also a super rare knife, but it's way more common than it's M9 Bayonet counterpart. (Even though it has the same price for some reason...)",
        "icon": "weaponicons/knives/FalchionKnife/CrimsonWeb.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "Falchion Case",
        "rarityresult": "~0.0000259615385%"
      },
      {
        "name": "★ Sport Gloves | Amphibious (Factory New)",
        "price": 5770.38,
        "notes": "Ah yes, the quintessesntial 5K item. These bad boys are very rare, and mostly the reason that the clutch case is meta.",
        "icon": "weaponicons/gloves/SportGlovesAmphibious.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "Clutch Case",
        "rarityresult": "~0.0000140625%"
      },
      {
        "name": "★ Sport Gloves | Pandora's Box (Factory New)",
        "price": 5725.33,
        "notes": "The 5K of the glove and hydra case, these overpriced pieces of fabric are not as desirable as the Amphibs, but nearly as valuable.",
        "icon": "weaponicons/gloves/SportGlovesPandorasBox.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "Glove Case, Operation Hydra Case",
        "rarityresult": "~0.0000140625%"
      },
      {
        "name": "★ Driver Gloves | King Snake (Factory New)",
        "price": 5234.44,
        "notes": "Another 5K pair from the clutch case, the King Snakes are not seen as often as the Amphibs and Vices for some reason.",
        "icon": "weaponicons/gloves/DriverGlovesKingSnake.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "Clutch Case",
        "rarityresult": "~0.0000140625%"
      },
      {
        "name": "★ Sport Gloves | Vice (Factory New)",
        "price": 5049.5,
        "notes": "The last 5K pair in the clutch case, though these are the least valuable of the trio, they are super desirable and rare.",
        "icon": "weaponicons/gloves/SportGlovesVice.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "Clutch Case",
        "rarityresult": "~0.0000140625%"
      },
      {
        "name": "★ StatTrak™ Karambit | Night (Factory New)",
        "price": 3750,
        "notes": "You know, this is a super rare knife, on the same rarity level as the 6500 Crim Webs. Fun Fact: Banned used to have one IRL!",
        "icon": "weaponicons/knives/Karambit/Night.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "Revolver Case, Operation Vanguard Case, Operation Phoenix Case, CS:GO Weapon Case 3, eSports 2014 Summer Case, eSports 2013 Winter Case, CS:GO Weapon Case 2, Winter Offensive Weapon Case, eSports 2013 Case, CS:GO Weapon Case, Operation Bravo Case",
        "rarityresult": "~0.00000519230769%"
      },
      {
        "name": "★ Driver Gloves | Imperial Plaid (Factory New)",
        "price": 3725,
        "notes": "More OP gloves from the clutch case? You got it! But in all seriousness, why does clutch have so many top tier items?",
        "icon": "weaponicons/gloves/DriverGlovesImperialPlaid.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "Clutch Case",
        "rarityresult": "~0.0000140625%"
      },
      {
        "name": "★ StatTrak™ Gut Knife | Night (Factory New)",
        "price": 3669.87,
        "notes": "I don't think this price is accurate, but if it is, I will be dumbfounded. I would never pay this much for something that looks like a chode.",
        "icon": "weaponicons/knives/GutKnife/Night.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "Revolver Case, Operation Vanguard Case, Operation Phoenix Case, CS:GO Weapon Case 3, eSports 2014 Summer Case, eSports 2013 Winter Case, CS:GO Weapon Case 2, Winter Offensive Weapon Case, eSports 2013 Case, CS:GO Weapon Case, Operation Bravo Case",
        "rarityresult": "~0.00000519230769%"
      },
      {
        "name": "★ M9 Bayonet | Crimson Web (Factory New)",
        "price": 3600,
        "notes": "It's like it's 6500$ cousin, but it doesn't have StatTrak! (And it's 10x more common because of it.)",
        "icon": "weaponicons/knives/M9Bayonet/CrimsonWeb.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "Revolver Case, Operation Vanguard Case, Operation Phoenix Case, CS:GO Weapon Case 3, eSports 2014 Summer Case, eSports 2013 Winter Case, CS:GO Weapon Case 2, Winter Offensive Weapon Case, eSports 2013 Case, CS:GO Weapon Case, Operation Bravo Case",
        "rarityresult": "~0.0000519230769%"
      },
      // 10s
      {
        "name": "★ StatTrak™ Bayonet | Night (Factory New)",
        "price": 3500,
        "notes": "It's as rare as it's crimson web counterpart, but costs a little more than half as much.",
        "icon": "weaponicons/knives/Bayonet/Night.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "Revolver Case, Operation Vanguard Case, Operation Phoenix Case, CS:GO Weapon Case 3, eSports 2014 Summer Case, eSports 2013 Winter Case, CS:GO Weapon Case 2, Winter Offensive Weapon Case, eSports 2013 Case, CS:GO Weapon Case, Operation Bravo Case",
        "rarityresult": "~0.00000519230769%"
      },
      {
        "name": "★ Specialist Gloves | Crimson Kimono (Factory New)",
        "price": 3475.47,
        "notes": "These are my favorite gloves. If you get 'em, give 'em to me.",
        "icon": "weaponicons/gloves/SpecialistGlovesCrimsonKimono.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "Glove Case, Operation Hydra Case",
        "rarityresult": "~0.0000140625%"
      },
      {
        "name": "★ StatTrak™ M9 Bayonet | Night (Factory New)",
        "price": 2968.24,
        "notes": "It's as rare as it's crimson web counterpart, but costs a little less than half as much.",
        "icon": "weaponicons/knives/M9Bayonet/Night.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "Revolver Case, Operation Vanguard Case, Operation Phoenix Case, CS:GO Weapon Case 3, eSports 2014 Summer Case, eSports 2013 Winter Case, CS:GO Weapon Case 2, Winter Offensive Weapon Case, eSports 2013 Case, CS:GO Weapon Case, Operation Bravo Case",
        "rarityresult": "~0.00000519230769%"
      },
      {
        "name": "StatTrak™ AK-47 | Fire Serpent (Factory New)",
        "price": 2899.99,
        "notes": "I actually pulled the first copy in the game (Pre-Wipe 1, too!) within 500 cases. That being said, don't go for this gun, it's stupid rare and not worth it's price.",
        "icon": "weaponicons/AK47FireSerpent.png",
        "quality": "Covert",
        "origin": "Operation Bravo Case",
        "rarityresult": "0.050625%"
      },
      {
        "name": "★ Moto Gloves | POW! (Factory New)",
        "price": 2769,
        "notes": "POW! HAHA!",
        "icon": "weaponicons/gloves/MotoGlovesPOW.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "Clutch Case",
        "rarityresult": "~0.0000140625%"
      },
      {
        "name": "★ Sport Gloves | Superconductor (Factory New)",
        "price": 2700,
        "notes": "You notice how all the sport gloves (except hedge maze) are super expensive? I personally think the specialist gloves look better but whatever.",
        "icon": "weaponicons/gloves/SportGlovesSuperconductor.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "Glove Case, Operation Hydra Case",
        "rarityresult": "~0.0000140625%"
      },
      {
        "name": "★ Hand Wraps | Cobalt Skulls (Factory New)",
        "price": 2681.54,
        "notes": "Man. I wouldn't pay a single cent for hand wraps. I think they look worse than the stock gloves.",
        "icon": "weaponicons/gloves/HandWrapsCobaltSkulls.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "Clutch Case",
        "rarityresult": "~0.0000140625%"
      },
      {
        "name": "★ StatTrak™ Gut Knife | Crimson Web (Factory New)",
        "price": 2500,
        "notes": "Yeah, 2500$ gut knife. El problem?",
        "icon": "weaponicons/knives/GutKnife/CrimsonWeb.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "Revolver Case, Operation Vanguard Case, Operation Phoenix Case, CS:GO Weapon Case 3, eSports 2014 Summer Case, eSports 2013 Winter Case, CS:GO Weapon Case 2, Winter Offensive Weapon Case, eSports 2013 Case, CS:GO Weapon Case, Operation Bravo Case",
        "rarityresult": "~0.00000519230769%"
      },
      {
        "name": "★ StatTrak™ Huntsman Knife | Night (Factory New)",
        "price": 2350,
        "notes": "If the huntsman case had better knives, I'd open that instead of Clutch/Glove/Gamma. I really like the Vulcan AK tho.",
        "icon": "weaponicons/knives/Huntsman/Night.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "Huntsman Weapon Case",
        "rarityresult": "~0.0000259615385%"
      },
      {
        "name": "★ StatTrak™ Flip Knife | Night (Factory New)",
        "price": 2277.22,
        "notes": "As rare as the top item, not worth nearly as much. Truly a tragedy of humanity.",
        "icon": "weaponicons/knives/FlipKnife/Night.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "Revolver Case, Operation Vanguard Case, Operation Phoenix Case, CS:GO Weapon Case 3, eSports 2014 Summer Case, eSports 2013 Winter Case, CS:GO Weapon Case 2, Winter Offensive Weapon Case, eSports 2013 Case, CS:GO Weapon Case, Operation Bravo Case",
        "rarityresult": "~0.00000519230769%"
      },
      // 20s
      {
        "name": "★ Driver Gloves | Crimson Weave (Factory New)",
        "price": 2212,
        "notes": "",
        "icon": "weaponicons/gloves/DriverGlovesCrimsonWeave.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ Bloodhound Gloves | Snakebite (Factory New)",
        "price": 2064.99,
        "notes": "",
        "icon": "weaponicons/gloves/BloodhoundGlovesSnakebite.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ Specialist Gloves | Emerald Web (Factory New)",
        "price": 2049.25,
        "notes": "",
        "icon": "weaponicons/gloves/SpecialistGlovesEmeraldWeb.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ StatTrak™ Bowie Knife | Night (Factory New)",
        "price": 1980.29,
        "notes": "",
        "icon": "weaponicons/knives/BowieKnife/Night.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ Specialist Gloves | Crimson Web (Factory New)",
        "price": 1900.01,
        "notes": "",
        "icon": "weaponicons/gloves/SpecialistGlovesCrimsonWeb.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ Specialist Gloves | Fade (Factory New)",
        "price": 1896.09,
        "notes": "",
        "icon": "weaponicons/gloves/SpecialistGlovesFade.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ Karambit | Crimson Web (Factory New)",
        "price": 1862.5,
        "notes": "",
        "icon": "weaponicons/knives/Karambit/CrimsonWeb.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ Sport Gloves | Omega (Factory New)",
        "price": 1835.75,
        "notes": "",
        "icon": "weaponicons/gloves/SportGlovesOmega.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ Moto Gloves | Spearmint (Factory New)",
        "price": 1800,
        "notes": "",
        "icon": "weaponicons/gloves/MotoGlovesSpearmint.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ StatTrak™ Shadow Daggers | Scorched (Factory New)",
        "price": 1692.48,
        "notes": "",
        "icon": "weaponicons/knives/ShadowDaggers/Scorched.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      // 30s
      {
        "name": "★ Moto Gloves | Polygon (Factory New)",
        "price": 1621.22,
        "notes": "",
        "icon": "weaponicons/gloves/MotoGlovesPolygon.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ Sport Gloves | Hedge Maze (Factory New)",
        "price": 1617.5,
        "notes": "",
        "icon": "weaponicons/gloves/SportGlovesHedgeMaze.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ Bloodhound Gloves | Charred (Factory New)",
        "price": 1600,
        "notes": "",
        "icon": "weaponicons/gloves/BloodhoundGlovesCharred.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ Hand Wraps | Overprint (Factory New)",
        "price": 1503.66,
        "notes": "",
        "icon": "weaponicons/gloves/HandWrapsOverprint.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ Specialist Gloves | Mogul (Factory New)",
        "price": 1500,
        "notes": "",
        "icon": "weaponicons/gloves/SpecialistGlovesMogul.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ Specialist Gloves | Foundation (Factory New)",
        "price": 1499.99,
        "notes": "",
        "icon": "weaponicons/gloves/SpecialistGlovesFoundation.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ StatTrak™ Gut Knife | Stained (Factory New)",
        "price": 1478.92,
        "notes": "",
        "icon": "weaponicons/knives/GutKnife/Stained.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ StatTrak™ Karambit | Lore (Factory New)",
        "price": 1420,
        "notes": "",
        "icon": "weaponicons/knives/Karambit/Lore.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ Specialist Gloves | Crimson Kimono (Minimal Wear)",
        "price": 1396.65,
        "notes": "",
        "icon": "weaponicons/gloves/SpecialistGlovesCrimsonKimono.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ Driver Gloves | Overtake (Factory New)",
        "price": 1391.66,
        "notes": "",
        "icon": "weaponicons/gloves/DriverGlovesOvertake.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      // 40s
      {
        "name": "★ Karambit | Lore (Factory New)",
        "price": 1391.61,
        "notes": "",
        "icon": "weaponicons/knives/Karambit/Lore.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ Sport Gloves | Vice (Minimal Wear)",
        "price": 1387.61,
        "notes": "",
        "icon": "weaponicons/gloves/SportGlovesVice.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ StatTrak™ Huntsman Knife | Crimson Web (Factory New)",
        "price": 1375,
        "notes": "",
        "icon": "weaponicons/knives/Huntsman/CrimsonWeb.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ Sport Gloves | Pandora's Box (Field-Tested)",
        "price": 1352.3,
        "notes": "",
        "icon": "weaponicons/gloves/SportGlovesPandorasBox.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ Specialist Gloves | Fade (Minimal Wear)",
        "price": 1350.72,
        "notes": "",
        "icon": "weaponicons/gloves/SpecialistGlovesFade.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ StatTrak™ M9 Bayonet | Lore (Factory New)",
        "price": 1335.49,
        "notes": "",
        "icon": "weaponicons/knives/M9Bayonet/Lore.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ Sport Gloves | Superconductor (Minimal Wear)",
        "price": 1261.39,
        "notes": "",
        "icon": "weaponicons/gloves/SportGlovesSuperconductor.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ M9 Bayonet | Lore (Factory New)",
        "price": 1231.45,
        "notes": "",
        "icon": "weaponicons/knives/M9Bayonet/Lore.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ Moto Gloves | Turtle (Factory New)",
        "price": 1195.61,
        "notes": "",
        "icon": "weaponicons/gloves/MotoGlovesTurtle.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      },
      {
        "name": "★ Sport Gloves | Vice (Field-Tested)",
        "price": 1181.89,
        "notes": "",
        "icon": "weaponicons/gloves/SportGlovesViceFT.png",
        "quality": "Exceedingly Rare Special Item",
        "origin": "",
        "rarityresult": "0.00%"
      }
    ]
    function getraritycolor(rarity){
      switch (rarity) {
        case "Exceedingly Rare Special Item":
          return "222,173,0"
          break;
        case "Covert":
          return "235,75,75"
          break;
        default:
          return "222,173,0"
      }
    }

    for (var i = 0; i < topitems.length; i++) {
      var constructedtopitemdisplay = document.createElement('div')
      constructedtopitemdisplay.className = 'topitemcontainer'
      constructedtopitemdisplay.style.background = 'linear-gradient(90deg, rgba(29,29,29,0.4) 0%, rgba('+getraritycolor(topitems[i].quality)+', 0.3) 100%)'
      constructedtopitemdisplay.style.border = '1px solid rgb('+getraritycolor(topitems[i].quality)+')'

      var cin = document.createElement('div')
      cin.appendChild(document.createTextNode(topitems[i].name))
      cin.style.color = 'rgb('+getraritycolor(topitems[i].quality)+')'
      cin.className = 'topitemname'
      constructedtopitemdisplay.appendChild(cin)

      var cip = document.createElement('div')
      cip.appendChild(document.createTextNode('$'+topitems[i].price))
      cip.className = 'topitemprice'
      constructedtopitemdisplay.appendChild(cip)

      var cii = document.createElement('img')
      cii.className = 'topitemicon'
      cii.style.filter = 'drop-shadow(0px 0px 4px rgb('+getraritycolor(topitems[i].quality)+')) saturate(1.2)'
      cii.src = topitems[i].icon
      constructedtopitemdisplay.appendChild(cii)

      var cid = document.createElement('div')
      cid.className = 'cid'
      cid.style.color = 'rgb('+getraritycolor(topitems[i].quality)+')'
      cid.style["border-color"] = 'rgb('+getraritycolor(topitems[i].quality)+')'
      cid.appendChild(document.createTextNode(topitems[i].notes))
      constructedtopitemdisplay.appendChild(cid)

      var cio = document.createElement('div')
      cio.className = 'cio'
      cio.appendChild(document.createTextNode(topitems[i].origin))
      constructedtopitemdisplay.appendChild(cio)

      var cir = document.createElement('div')
      cir.className = 'cir'
      cir.style['border-color'] = 'rgb('+getraritycolor(topitems[i].quality)+')'
      cir.appendChild(document.createTextNode(topitems[i].rarityresult))
      constructedtopitemdisplay.appendChild(cir)

      var tintr = document.createElement('div')
      tintr.className = 'tintr'
      constructedtopitemdisplay.appendChild(tintr)

      var tin = document.createElement('div')
      tin.className = 'tin'
      tin.style.color = 'rgb('+getraritycolor(topitems[i].quality)+')'
      tin.appendChild(document.createTextNode("#"+(i+1)))
      constructedtopitemdisplay.appendChild(tin)

      document.getElementById('topitemcontent').appendChild(constructedtopitemdisplay)
    }
    console.log(topitems)
  }
});
