function calculateHypotenuse() {
    
    const leg1 = parseFloat(document.getElementById("leg1").value);
    const leg2 = parseFloat(document.getElementById("leg2").value);

    if (isNaN(leg1) || isNaN(leg2) || leg1 <= 0 || leg2 <= 0) {
        alert("Будь ласка, введіть коректні додатні числа для обох катетів.");
        return;
    }

    const hypotenuse = Math.sqrt(leg1 * leg1 + leg2 * leg2);
    const rounded = hypotenuse.toFixed(2);
    document.getElementById("result").textContent = `Довжина гіпотенузи: ${rounded}`;
}
