let total = 0;

function checkArea() {
  let pin = document.getElementById("pincode").value;
  let msg = document.getElementById("areaMsg");
  let allowed = ["800001", "800002", "800003"];

  if (allowed.includes(pin)) {
    msg.innerText = "✅ Delivery available";
    msg.style.color = "green";
  } else {
    msg.innerText = "❌ Delivery not available yet";
    msg.style.color = "red";
  }
}

function addItem(name, price) {
  total += price;
  let li = document.createElement("li");
  li.innerText = name + " - ₹" + price;
  document.getElementById("list").appendChild(li);
  document.getElementById("total").innerText = total;
}

function payUPI() {
  let upi = "yourupi@bank";   // change this
  let note = "Udayam Bihar Grocery Order";
  window.location.href =
    `upi://pay?pa=${upi}&pn=UdayamBihar&am=${total}&cu=INR&tn=${note}`;
}

function orderCOD() {
  alert("✅ Order placed! Pay on delivery.");
}
