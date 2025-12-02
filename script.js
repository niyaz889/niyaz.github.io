function sellCoin() {
    let selectedCoin = prompt("আপনি কোন কয়েন বিক্রি করতে চান? (যেমন: Niva Coin, Fira Coin, Topfollows Coin, Ns Coin)");

    // Backend বা Telegram API এর মাধ্যমে তথ্য পাঠানো
    fetch('/sell-coin', {
        method: 'POST',
        body: JSON.stringify({ coin: selectedCoin, userId: '7065484505' }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('আপনার সেল অনুরোধ অ্যাডমিনের কাছে পাঠানো হয়েছে!');
        } else {
            alert('কোনও সমস্যা হয়েছে। পুনরায় চেষ্টা করুন।');
        }
    });
}
