chrome.extension.sendMessage({}, function(response) {
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === 'complete') {
            clearInterval(readyStateCheckInterval);

            // ----------------------------------------------------------
            // This part of the script triggers when page is done loading
            console.log('Hello. This message was sent from scripts/inject.js');
            // ----------------------------------------------------------

            // All projects
            const cards = document.querySelectorAll(
                '.rf-project-cover__details'
            );
            cards.forEach(card => {
                const stats = card.querySelectorAll(
                    '.rf-project-cover__stat-number'
                );
                const likes = parseInt(stats[0].innerHTML);
                const views = parseInt(stats[1].innerHTML);

                const calc = Math.floor(likes / views * 100);
                const span = document.createElement('span');
                span.classList.add('likes-views-ratio');
                span.innerHTML = `${calc}%`;
                card.appendChild(span);
            });

            // Whole profile stats
            const stats = document.querySelectorAll('.profile-stat-count a');
            const views = parseInt(stats[0].innerHTML);
            const likes = parseInt(stats[1].innerHTML);

            const calc = Math.floor(likes / views * 100);
            const span = document.createElement('span');
            span.classList.add('profile-likes-views-ratio');
            span.innerHTML = `${calc}%`;
            stats[1].appendChild(span);
        }
    }, 10);
});
