// ==UserScript==
// @name         Aspect's CSGOClicker Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Aspect's Script, helps make csgoclicker a little less grindy! (plus lots of QoL changes)
// @author       Aspect!
// @match        https://csgoclicker.net/*
// @grant        none
// ==/UserScript==

/* What this script does

Adds lots of Styles to CSGOClicker
Increases item display size
Adds odds to the 'possible items' menu
Adds a bunch of CSS Polish
Fixes gray buttons' :hover filter
Styles the scrollbars
*/

(function() {
    'use strict';
    try {
        var ss = document.createElement("link");
        var root = document.documentElement
        ss.type = "text/css";
        ss.rel = "stylesheet";
        ss.href = "https://aspectquote.github.io/CSGOCTools/styles.css";
        document.getElementsByTagName("head")[0].appendChild(ss);
        setTimeout(function(){
            if (document.getElementsByClassName("container")[0]) { // For some reason, the Case Opening UI has it's container's class set to a generic name, you'd think that'd get confusing but whatever
                console.log("%c Aspect's Script: Starting case open script, user is on the appropriate page.",'color: green; font-size: 12px; font-style: italic; text-shadow: 0px 2px 0px black, 0px -2px 0px black, 2px 0px 0px black, -2px 0px 0px black;');
                root.style.setProperty("--csw", "''")
                // Declare Base Content Items
                var contentdiv = document.createElement('div')
                var contentheader = document.createElement('h1')
                // Style Content Items
                contentheader.style.cssText = "width: 100%; text-align: center; font-size: 27px; border-bottom: 1px solid var(--tc); letter-spacing: 2px; padding-bottom: 10px;"
                contentheader.appendChild(document.createTextNode("Automation Options"))
                contentdiv.style.cssText = "color: var(--tc); text-align: center; background-image: none; background-color: rgba(0,0,0,0); padding-right: 20px; padding-top: 20px; height: 130px; overflow-y: auto;"
                contentdiv.id = 'content'
                contentdiv.appendChild(contentheader)
                // Add Base Content Items to the container
                document.getElementsByClassName("container")[0].appendChild(contentdiv)
                var content = document.getElementById("content")
                var optionsform = document.createElement("form")
                // Sell Below X
                var sellbelowxform = document.createElement('input')
                var sellbelowxname = document.createElement('label')
                sellbelowxname.appendChild(document.createTextNode('Sell All Skins Below $'))
                sellbelowxname.setAttribute("for", 'sellbelowxinput')
                sellbelowxform.type = 'text'
                sellbelowxform.id = 'sellbelowxinput'
                sellbelowxform.name = 'sellbelowxinput'
                sellbelowxform.value = 50
                sellbelowxform.placeholder = 'Any Number. Price of skins you want to autosell'
                optionsform.appendChild(sellbelowxname)
                optionsform.appendChild(sellbelowxform)
                // Linebreak!
                optionsform.appendChild(document.createElement('br'))
                optionsform.appendChild(document.createElement('br'))
                // Stop when you get to X wallet funds
                var stopwhenmoneyisatxform = document.createElement('input')
                var stopwhenmoneyisatxname = document.createElement('label')
                stopwhenmoneyisatxname.appendChild(document.createTextNode('Stop When Wallet Reaches $'))
                stopwhenmoneyisatxname.setAttribute("for", 'stopwhenmoneyisatxinput')
                stopwhenmoneyisatxform.type = 'text'
                stopwhenmoneyisatxform.id = 'stopwhenmoneyisatxinput'
                stopwhenmoneyisatxform.name = 'stopwhenmoneyisatxinput'
                stopwhenmoneyisatxform.value = 25
                stopwhenmoneyisatxform.placeholder = 'Any Number. When the script stops opening cases'
                optionsform.appendChild(stopwhenmoneyisatxname)
                optionsform.appendChild(stopwhenmoneyisatxform)
                // Add the form to the content div
                contentdiv.appendChild(optionsform)

                function sellinspectitem() {
                    document.querySelector('.inspectSellItem.btn').click();
                }
                function opencase() {
                    document.querySelector('.openCase.btn').click();
                }
                function closepopup() {
                    if (document.querySelector('.fas.fa-times')) {
                        document.querySelector('.fas.fa-times').click();
                    }
                }
                function buyacase(){
                    document.querySelector('.buyCase.btn.navy.center').click();
                }
                var sessionstats = {
                    itemssold: 0,
                    casesopened: 0,
                    totalvalueofallitemssold: 0
                }
                var caseopenloop = setInterval(function(){
                    if (document.getElementsByClassName('caseOpenerComponent').length !== 1) {
                        console.log("%c Aspect's Script: Stopped Script. Left case page.", "color: #ff0101; text-shadow: 0px 2px 0px black, 0px -2px 0px black, 2px 0px 0px black, -2px 0px 0px black;")
                        clearInterval(caseopenloop)
                        document.documentElement.style.setProperty("--csw", "'Stopped Automation. Left the case opening page. If this was a mistake, then refresh the page.'")
                        console.log("Session Stats: ",sessionstats)
                    } else {
                        var userwalletval = Number(document.querySelector(".wallet").innerText.replace(',','')); // get user wallet val so that we can check it
                        if (userwalletval <= document.getElementById('stopwhenmoneyisatxinput').value) {
                            console.log("%c Aspect's Script: Stopped Script. Wallet is smaller than given param.", "color: #ff0101; text-shadow: 0px 2px 0px black, 0px -2px 0px black, 2px 0px 0px black, -2px 0px 0px black;")
                            clearInterval(caseopenloop)
                            document.documentElement.style.setProperty("--csw", "'Stopped Automation. Wallet funds have run out.'")
                            console.log("Session Stats: ",sessionstats)
                        } else {
                            try { // Wrapped in a try block because while animation is playing, the buy case button is disabled.
                                var casesowned = Number(document.getElementsByClassName('casesOwned')[0].innerText.replace("Owned: ", ""))
                                if (casesowned <= 1) { // If the user has no cases, then buy one. Otherwise don't; it's annoying.
                                    buyacase()
                                }
                            } catch(e) {
                                console.log("Prevented Buy Case.")
                            }
                            opencase()
                            var itemunboxedprice = Number(document.getElementsByClassName("price")[0].innerText.replace("$","").replace(",",""))
                            // Get Unboxed item price
                            if(itemunboxedprice >= document.getElementById("sellbelowxinput").value){
                                closepopup()
                            } else {
                                sellinspectitem()
                                sessionstats.itemssold++
                                sessionstats.totalvalueofallitemssold += itemunboxedprice
                            }
                        }
                    }
                }, 7000)
                } else if (document.getElementsByClassName("missions")[0]) {
                    console.log("%c Aspect's Script: Starting mission script, user is on the appropriate page.",'color: green; font-size: 12px; font-style: italic; text-shadow: 0px 2px 0px black, 0px -2px 0px black, 2px 0px 0px black, -2px 0px 0px black;');
                    root.style.setProperty("--missionloading", "'LOADING...'")
                    var ma = { // Get the amount of each type of mission
                        r: document.getElementsByClassName("recruit").length,
                        re: document.getElementsByClassName("regular").length,
                        v: document.getElementsByClassName("veteran").length,
                        e: document.getElementsByClassName("expert").length,
                        s: document.getElementsByClassName("specialOps").length
                    }
                    function removemissions(re, v, e, s) {
                        for (var i=0; i<re; i++) {
                            document.querySelector(".regular").remove();
                        }
                        for (var g=0; g<v; g++) {
                            document.querySelector(".veteran").remove();
                        }
                        for (var z=0; z<e; z++) {
                            document.querySelector(".expert").remove();
                        }
                        for (var x=0; x<s; x++) {
                            document.querySelector(".specialOps").remove();
                        }
                    }
                    if (ma.r >= 3) { // If there are three or more recruit missions
                        // Each code block checks to see if it can fill the gap with a mission of the next tier. the only case scenario where it can't is if there is one of every mission, in which it throws an error.
                        console.log("%c Aspect's Script: Missions Case 1", "color: yellow; font-size: 12px; font-style: italic; text-shadow: 0px 2px 0px black, 0px -2px 0px black, 2px 0px 0px black, -2px 0px 0px black;")
                        root.style.setProperty("--missionloading", "'Using Missions: 3 Recruit Missions. Do not leave this page unless you are done automating your missions.'")
                        removemissions(ma.re, ma.v, ma.e, ma.s)
                    } else if ((ma.r+ma.re) >= 3) {
                        console.log("%c Aspect's Script: Missions Case 2", "color: yellow; font-size: 12px; font-style: italic; text-shadow: 0px 2px 0px black, 0px -2px 0px black, 2px 0px 0px black, -2px 0px 0px black;")
                        root.style.setProperty("--missionloading", "'Using Missions: "+ma.r+" Recruit Missions plus "+ma.re+" filler mission(s) of REGULAR quality. (Not enough recruit missions) Do not leave this page unless you are done automating your missions.'")
                        removemissions(ma.r-3, ma.v, ma.e, ma.s)
                    } else if ((ma.r+ma.v) >= 3) {
                        console.log("%c Aspect's Script: Missions Case 3", "color: yellow; font-size: 12px; font-style: italic; text-shadow: 0px 2px 0px black, 0px -2px 0px black, 2px 0px 0px black, -2px 0px 0px black;")
                        root.style.setProperty("--missionloading", "'Using Missions: "+ma.r+" Recruit Missions plus "+ma.v+" filler mission(s) of VETERAN quality. (Not enough recruit missions) Do not leave this page unless you are done automating your missions.'")
                        removemissions(ma.re, ma.r-3, ma.e, ma.s)
                    } else if ((ma.r+ma.e) >= 3) {
                        console.log("%c Aspect's Script: Missions Case 4", "color: yellow; font-size: 12px; font-style: italic; text-shadow: 0px 2px 0px black, 0px -2px 0px black, 2px 0px 0px black, -2px 0px 0px black;")
                        root.style.setProperty("--missionloading", "'Using Missions: "+ma.r+" Recruit Missions plus "+ma.e+" filler mission(s) of EXPERT quality. (Not enough recruit missions) Do not leave this page unless you are done automating your missions.'")
                        removemissions(ma.re, ma.v, ma.r-3, ma.s)
                    } else if ((ma.r+ma.s) >= 3) {
                        console.log("%c Aspect's Script: Missions Case 5", "color: yellow; font-size: 12px; font-style: italic; text-shadow: 0px 2px 0px black, 0px -2px 0px black, 2px 0px 0px black, -2px 0px 0px black;")
                        root.style.setProperty("--missionloading", "'Using Missions: "+ma.r+" Recruit Missions plus "+ma.s+" filler mission(s) of SPECIALOPS quality. (Not enough recruit missions) Do not leave this page unless you are done automating your missions.'")
                        removemissions(ma.re, ma.v, ma.e, ma.r-3)
                    } else {
                        root.style.setProperty("--missionloading", "'Fatal Error: Bad missions. Wait until missions refresh then try again.'")
                    }
                    function redeem(missionnum) {
                        var button = document.getElementsByClassName('btn')[missionnum]
                        if (button != undefined) {
                            if (button.className != "btn pressed locked") { // If the button is locked, don't press it.
                                button.click()
                            }
                        }
                    }
                    function startmissions() { // Press mission number by element's class number in the DOM. When one is pressed, it is destroyed when it recieves a response from the server.
                        if (document.getElementsByClassName("startOverlay")[0]) { // If statements are to prevent rate limiting and server lag. (Everybody hates server lag)
                            document.getElementsByClassName("startOverlay")[0].click()
                        }
                        if (document.getElementsByClassName("startOverlay")[1]) {
                            document.getElementsByClassName("startOverlay")[1].click()
                        }
                        if (document.getElementsByClassName("startOverlay")[2]) {
                            document.getElementsByClassName("startOverlay")[2].click()
                        }
                    }
                    var missioninter = 0
                    var missionloop = setInterval(function(){
                        if (document.getElementsByClassName("missions").length !== 1) { // Check if still on the missions page
                            console.log("%c Aspect's Script: Stopped Script. Left missions page.", "color: #ff0101; text-shadow: 0px 2px 0px black, 0px -2px 0px black, 2px 0px 0px black, -2px 0px 0px black;")
                            clearInterval(missionloop)
                            root.style.setProperty("--missionloading", "'You left the missions page. Loop stopped. Refresh if it was an accident.'")
                        } else {
                            if (missioninter == 3) {
                                missioninter = 0
                            }
                            startmissions()
                            redeem(missioninter)
                            missioninter++
                        }
                    }, 1000)
                    setTimeout(function(){ // Reload every 30 mins to check for missions refresh
                        location.reload()
                    }, 1800000)
                    var tip = document.createElement("div")
                    tip.className = "tip"
                    tip.style.cssText = 'margin-top: 20px;'
                    tip.innerHTML = "If you are getting a lot of error messages very consistently, check your internet connection. It most likely means your ping with CSGOClicker's server is more than 1000ms. If you only get error messages every now and again, <span style='color: var(--ac);'>it's OK</span>. It probably means you or the server just had a lag spike. The script will reload the page every 30 minutes to check for a mission refresh."
                    document.getElementsByClassName('missions')[0].appendChild(tip)
                } else {
                    console.log("%c Aspect's Script: Not starting either script, not on the appropriate page.",'color: yellow; font-size: 12px; font-style: italic; text-shadow: 0px 2px 0px black, 0px -2px 0px black, 2px 0px 0px black, -2px 0px 0px black;');
                }
        }, 2500)
        console.log("Loaded Aspect's CSGOClicker Script Successfully!");
    } catch(e) {
        console.log("An unexpected error occurred while loading Aspect's script.",e)
    }
})();
