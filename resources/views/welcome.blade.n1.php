<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    </head>
    <body class="antialiased">
        <script>
			console.log(Notification?.permission);
			function showNotification( message ){
				const notification = new Notification('New Notification', { body: message });
				notification.onclick = () => {
					window.location.href = 'http://localhost:8000';
				};
			}
			if( Notification?.permission === 'granted'){
				showNotification('Granted');
			} else if (Notification?.permission !== 'denied'){
				Notification.requestPermission().then((permission) => {
					console.log(permission);
					if( permission === 'granted'){
						showNotification('Granted');
					}
				});
			}
		</script>
    </body>
</html>
