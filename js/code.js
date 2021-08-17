
        function somar() {
            var vPeso = document.querySelector('input.peso')
            var vAltura = document.querySelector('input.altura')

            var vRes = document.querySelector('div.res')

            var tPeso = Number(vPeso.value)
            var tAltura = Number(vAltura.value)

            var s = tPeso / (tAltura ** 2)
            vRes.innerHTML = s.toFixed(2)
            if(s < 18.5)
            {
               vRes.innerHTML = ('Resultado <br> Seu IMC é: ') + vRes.innerHTML + ('<br> Abaixo do Peso')
            } 
            
            else if (s >=18.5 && s <=25) {
                vRes.innerHTML = ('Resultado <br> Seu IMC é: ') + vRes.innerHTML + ('<br> Peso Ideal')
            }

            else if (s > 25 && s <=30) {
                vRes.innerHTML = ('Resultado <br> Seu IMC é: ') + vRes.innerHTML + ('<br> Sobrepeso')
            }
            else if (s > 30 && s <=40) {
                vRes.innerHTML = ('Resultado <br> Seu IMC é: ') + vRes.innerHTML + ('<br> Obesidade')
            }

            else if (s > 40) {
                vRes.innerHTML = ('Resultado <br> Seu IMC é: ') + vRes.innerHTML + ('<br> Obesidade Mórbida')
            }

                        
        }