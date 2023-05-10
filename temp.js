var cel = document.getElementById("C");
        var kel = document.getElementById("K");
        var fah = document.getElementById("F");

        cel.addEventListener('input', function(){
           let c = this.value;
           let k = Number(c) + 273;
           let f = (c * 9/5) + 32;

           if(!Number.isInteger(f)){
            f = f.toFixed(4);
           }

           kel.value = k;
           fah.value = f;

        });

        kel.addEventListener('input', function(){
            let k = this.value;
            let c = k - 273;
            let f = (k - 273) * 9/5 + 32;

            if(!Number.isInteger(f)){
            f = f.toFixed(4);
            }

            cel.value = c;
            fah.value = f;
           
          });

        fah.addEventListener('input', function(){
            let f = this.value;
            let c = (f - 32) * 5/9;
            let k = (f - 32) / 1.8 + 273.15;

            if(!Number.isInteger(c)){
            c = c.toFixed(4);
            } 

            if(!Number.isInteger(k)){
            k = k.toFixed(4);
           }

            cel.value = c;
            kel.value = k;
            
          });