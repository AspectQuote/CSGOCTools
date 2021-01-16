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
        case "-":
          strret += '-/'
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
      return `★ ${knife} | ${pattern}`
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
        icon: "weaponcase1.png",
        desc: "CS:GO's first case, this case was added in The Arms Deal update way back on the 14th of August, 2013.",
        milspec: [
          {
            name: "AUG Wings",
            icon: "AUGWings",
            minfloat: "0.00",
            maxfloat: "0.14",
            canbestattrak: true
          },
          {
            name: "SG 553 Ultraviolet",
            icon: "SG553Ultraviolet",
            minfloat: "0.06",
            maxfloat: "0.80",
            canbestattrak: true
          },
          {
            name: "MP7 Skulls",
            icon: "MP7Skulls",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "Glock-18 Dragon Tattoo",
            icon: "Glock18DragonTattoo",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "USP-S Dark Water",
            icon: "USPSDarkWater",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          },
          {
            name: "M4A1-S Dark Water",
            icon: "M4A1SDarkWater",
            minfloat: "0.10",
            maxfloat: "0.26",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "AK-47 Case Hardened",
            icon: "AK47CaseHardened",
            minfloat: "0.00",
            maxfloat: "1.00",
            canbestattrak: true
          },
          {
            name: "Desert Eagle Hypnotic",
            icon: "DesertEagleHypnotic",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "AWP Lightning Strike",
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
        icon: "weaponcase1.png",
        desc: "The second in a series of 3 Weapon Cases, Weapon Case 2 was added on the 8th of November, 2013",
        milspec: [
          {
            name: "P250 Hive",
            icon: "P250Hive",
            minfloat: "0.00",
            maxfloat: "0.30",
            canbestattrak: true
          },
          {
            name: "FAMAS Hexane",
            icon: "FAMASHexane",
            minfloat: "0.00",
            maxfloat: "0.40",
            canbestattrak: true
          },
          {
            name: "Tec-9 Blue Titanium",
            icon: "Tec9BlueTitanium",
            minfloat: "0.00",
            maxfloat: "0.04",
            canbestattrak: true
          },
          {
            name: "M4A1-S Blood Tiger",
            icon: "M4A1SBloodTiger",
            minfloat: "0.00",
            maxfloat: "0.30",
            canbestattrak: true
          },
          {
            name: "SCAR-20 Crimson Web",
            icon: "SCAR20CrimsonWeb",
            minfloat: "0.06",
            maxfloat: "0.80",
            canbestattrak: true
          }
        ],
        restricted: [
          {
            name: "Nova Graphite",
            icon: "NovaGraphite",
            minfloat: "0.00",
            maxfloat: "0.12",
            canbestattrak: true
          },
          {
            name: "Dual Berettas Hemoglobin",
            icon: "DualBerettasHemoglobin",
            minfloat: "0.00",
            maxfloat: "0.20",
            canbestattrak: true
          },
          {
            name: "MP9 Hypnotic",
            icon: "MP9Hypnotic",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          },
          {
            name: "Five-SeveN Case Hardened",
            icon: "FiveSeveNCaseHardened",
            minfloat: "0.00",
            maxfloat: "1.00",
            canbestattrak: true
          }
        ],
        classified: [
          {
            name: "USP-S Serum",
            icon: "USPSSerum",
            minfloat: "0.00",
            maxfloat: "0.25",
            canbestattrak: true
          },
          {
            name: "P90 Cold Blooded",
            icon: "P90ColdBlooded",
            minfloat: "0.00",
            maxfloat: "0.08",
            canbestattrak: true
          }
        ],
        covert: [
          {
            name: "SSG 08 Blood in the Water",
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
            itemtooltip.appendChild(document.createElement("br"))
            itemtooltip.appendChild(document.createTextNode("Float: "+cases[currentcase][Object.keys(cases[currentcase])[i]][d].minfloat+" - "+cases[currentcase][Object.keys(cases[currentcase])[i]][d].maxfloat))

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
          itemtooltip.appendChild(document.createElement("br"))
          itemtooltip.appendChild(document.createTextNode("Float: "+knifefloats[0]+" - "+knifefloats[1]))

          var itemname = document.createElement("div")
          itemname.appendChild(document.createTextNode(knifename))

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
  }
});
