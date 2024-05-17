const container = document.getElementById("container")
container.addEventListener('mousemove', function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const elements = document.querySelectorAll('.box');
    let closestElement = null;
    let closestDistance = Infinity;

    elements.forEach(function (element) {
        const rect = element.getBoundingClientRect();
        const elementX = rect.left + (rect.width / 2);
        const elementY = rect.top + (rect.height / 2);

        const distance = Math.hypot(elementX - mouseX, elementY - mouseY);

        if (distance < closestDistance) {
            closestDistance = distance;
            closestElement = element;
        }
    });

    if (closestElement) {
        document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));
        closestElement.classList.add('highlight');

        const closestRect = closestElement.getBoundingClientRect();
        const closestElementX = closestRect.left + (closestRect.width / 2);

        if (mouseX < closestElementX) {
            console.log('Mouse is to the left of the closest element.');
        } else {
            console.log('Mouse is to the right of the closest element.');
        }
    }
});
