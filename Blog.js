let images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkYzwK5-Ejc-gcV7uYPfmmQKAHqcsUvtlqRA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgaWDnHxnC8tn6OIqWn0EWzD63BKg_PsElwg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zvm9p0gefuoJeZEvzHzx2nnjq_AZWeX-Kg&usqp=CAU',
        ]
        let container = document.getElementById('container')
        function start(){
            let count =0;
            setInterval(function(){
                container.innerHTML=null
                if(count === images.length){count =0;}
                let img = document.createElement('img')
                img.src = images[count]
                container.append(img)
                count++;
            },2000)
        }
    start()