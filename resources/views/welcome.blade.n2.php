<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Notification API</title>
    <meta name="viewport" content="width=device-width">
</head>
<body>
    <h1>Notification API</h1>
    <p id="output"></p>
    <script>
        //Notification objects have a close() method. SOME browser automatically close them.
        //Notification Events - click, error, close, show
        if( 'Notification' in window){
            
            if (Notification.permission === 'granted') {
                // If it's okay let's create a notification
                doNotify();
            }else{
                //notification == denied
                Notification.requestPermission()
                    .then(function(result) {
                        console.log(result);  //granted || denied
                        if( Notification.permission == 'granted'){ 
                            doNotify();
                        }
                    })
                    .catch( (err) => {
                        console.log(err);
                    });
            }
        
        }
        
        function doNotify(){
            let title = "The Title";
            let t = Date.now() + 120000;    //2 mins in future
            let options = {
                body: 'Hello from JavaScript!',
                data: {prop1:123, prop2:"Steve"},
                lang: 'en-CA',
                icon: './img/calendar-lg.png',
                timestamp: t,
                vibrate: [100, 200, 100]
            }
            let n = new Notification(title, options);

            n.addEventListener('show', function(ev){
                console.log('SHOW', ev.currentTarget.data);
            });
            n.addEventListener('close', function(ev){
               console.log('CLOSE', ev.currentTarget.body); 
            });
            setTimeout( n.close.bind(n), 3000); //close notification after 3 seconds
        }
        /*************
        Note about actions param - used with webworkers/serviceworkers
        actions: [
           {action: 'mail', title: 'e-mail', icon: './img/envelope-closed-lg.png'},
           {action: 'blastoff', title: 'Blastoff', icon: './img/rocket-lg.png'}]
       *********************/
    </script>
</body>
</html>