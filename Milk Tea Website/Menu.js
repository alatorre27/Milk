
    function orderMilkTea(milkTeaName, price, imageUrl) {
        var orders = JSON.parse(sessionStorage.getItem('orders')) || [];
        orders.push({ name: milkTeaName, price: price, imageUrl: imageUrl });
        sessionStorage.setItem('orders', JSON.stringify(orders));
        window.location.href = "milkTea Menu.html";
    }
