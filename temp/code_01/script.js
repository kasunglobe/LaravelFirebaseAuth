<script>
navigator.serviceWorker.getRegistration().then(req => {
	req.pushManager.subscribe({
		userVisibleOnly: true
	}).then(sub => {
		
	});
});

self.addEventListener('push', event => {
	const title = event.data.text();
	event.waitUntil(
		self.registration.showNotification(title);
	);
});
</script>

<script>
navigator.serviceWorker.ready.then(req => {
	req.pushManager.getSubscription().then(sub => {
		if( sub === undefined ){
			// ask user to register for push
		} else {
			// you have subscription, update the database
		}
	})
});
</script>