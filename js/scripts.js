/**
 * Created by Thomas on 28/05/2015.
 */
var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
var memory_values = [];
var memory_platte_ids = [];
var plattor_flippade = 0;

Array.prototype.memory_platte_slump = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

function nyttSpel(){
    plattor_flippade = 0;
    var output = '';
    memory_array.memory_platte_slump();
    for(var i = 0; i < memory_array.length; i++){
        output += '<div id="platta_'+i+'" onclick="flippaPlattor(this,\''+memory_array[i]+'\')"></div>';
    }
    document.getElementById('spelplan').innerHTML = output;
}

function flippaPlattor(platta,val){
    if(platta.innerHTML == "" && memory_values.length < 2){
        platta.style.background = '#FFF';
        platta.innerHTML = val;
        if(memory_values.length == 0){
            memory_values.push(val);
            memory_platte_ids.push(platta.id);
        } else if(memory_values.length == 1){
            memory_values.push(val);
            memory_platte_ids.push(platta.id);
            if(memory_values[0] == memory_values[1]){
                plattor_flippade += 2;
                // Rensa arrayer
                memory_values = [];
                memory_platte_ids = [];
                // Kolla om hela brädet är rensat
                if(plattor_flippade == memory_array.length){
                    alert("Bräde rensat... skapar nytt spel!");
                    document.getElementById('spelplan').innerHTML = "";
                    nyttSpel();
                }
            } else {
                function flippaTebax(){
                    // Flippa tillbaka plattorna
                    var platta_1 = document.getElementById(memory_platte_ids[0]);
                    var platta_2 = document.getElementById(memory_platte_ids[1]);
                    platta_1.style.background = 'url(tile_bg.jpg) no-repeat';
                    platta_1.innerHTML = "";
                    platta_2.style.background = 'url(tile_bg.jpg) no-repeat';
                    platta_2.innerHTML = "";
                    // Rensa arrayer
                    memory_values = [];
                    memory_platte_ids = [];
                }
                setTimeout(flippaTebax, 700);
            }
        }
    }
}

nyttSpel();