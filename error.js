async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
}

getData().then((data) => {
  console.log(data);
  const tbody = document.getElementById("tbody");

  for (const user of data) {
    const tr = document.createElement("tr");
    td = `<td>${user.id}</td>
   <td>${user.name}</td><td>${user.username}</td><td>${user.email}</td>
   <td>${user.address.street}, ${user.address.suite}, ${user.address.city},
   ${user.address.zipcode}</td><td>${user.address.geo.lat}, ${user.address.geo.lng}</td>
   <td class="click">   
    <button
   type="button"
   class="btn btn-primary"
   data-bs-toggle="modal"
   data-bs-target="#exampleModal"
   data-bs-1="${user.name}"
   data-bs-2="${user.username}"
   data-bs-3="${user.email}"
   data-bs-4="${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}"
   data-bs-5="${user.address.geo.lat}, ${user.address.geo.lng}">Show</button></td>`;

    tr.innerHTML = td;
    tbody.appendChild(tr);
  }
});

const exampleModal = document.getElementById("exampleModal");
if (exampleModal) {
  exampleModal.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget;
    const recipient1 = button.getAttribute("data-bs-1");
    const recipient2 = button.getAttribute("data-bs-2");
    const recipient3 = button.getAttribute("data-bs-3");
    const recipient4 = button.getAttribute("data-bs-4");
    const recipient5 = button.getAttribute("data-bs-5");

    document.getElementById("s-1").innerText = recipient1;
    document.getElementById("s-2").innerText = recipient2;
    document.getElementById("s-3").innerText = recipient3;
    document.getElementById("s-4").innerText = recipient4;
    document.getElementById("s-5").innerText = recipient5;

  });  
}

