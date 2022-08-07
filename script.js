            var ctx = document.getElementById("graph").getContext("2d")
            var targets = document.getElementById("target")
            var reason = document.getElementById("reason")
            
            var crinj = {
                pedroger: 1.1,
                o: 0,
                alexvy: 0,
                sans: -0.5,
                furry: 2,
                teera: 10,
                robert: -2
            }

            var reasons = {
              pedroger: "being a furry smh",
              o: "very good person",
              alexvy: "0% cringe",
              sans: "-50% cringe, hasnt done anything cringe",
              furry: "absioubgauig",
              teera: "cringe human being that has done many cringe things",
              robert: "robert is 100% non cringe"
            }

            function calculat() {
              
                var target = targets.options[targets.selectedIndex].value
                ctx.clearRect(0, 0, 100, 200)
                ctx.fillStyle = 'red'
                ctx.fillRect(50, 150 - (crinj[target] * 100), 50, crinj[target] * 100)
                ctx.fillStyle = 'black'
                ctx.strokeRect(50, 50, 50, 100)
              reason.style.visibility = "visible"
              reason.innerText = reasons[target]
            }
