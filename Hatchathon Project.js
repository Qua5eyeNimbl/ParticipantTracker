function saveParticipant() {
  const participant = {
    name: document.getElementById("name").value,
    program: document.getElementById("program").value,
    phase: document.getElementById("phase").value,
    attendance: document.getElementById("attendance").value,
    milestones: document.getElementById("milestones").value,
    certifications: document.getElementById("certifications").value,
    notes: document.getElementById("notes").value,
    hours: document.getElementById("hours").value,
    recycled: document.getElementById("recycled").value
  };

  let participants = JSON.parse(localStorage.getItem("participants")) || [];
  participants.push(participant);
  localStorage.setItem("participants", JSON.stringify(participants));

  window.location.href = "index.html";
}

function loadParticipants() {
  const table = document.getElementById("table");
  if (!table) return;

  const participants = JSON.parse(localStorage.getItem("participants")) || [];
  table.innerHTML = "";

  participants.forEach((p, i) => {
    let status = "On Track";
    let badge = "success";

    if (p.attendance < 50) {
      status = "At Risk";
      badge = "danger";
    }

    table.innerHTML += `
      <tr>
        <td>${p.name}</td>
        <td>${p.program}</td>
        <td>${p.phase}</td>
        <td>${p.attendance}%</td>
        <td><span class="badge bg-${badge}">${status}</span></td>
        <td>
          <button class="btn btn-sm btn-info" onclick="viewParticipant(${i})">
            View
          </button>
        </td>
        <td>
          <button class="btn btn-sm btn-danger" onclick="removeParticipant(${i})">
            ✕
          </button>
        </td>
      </tr>
    `;
  });
}

function viewParticipant(index) {
  const participants = JSON.parse(localStorage.getItem("participants"));
  const p = participants[index];

  alert(
    `Name: ${p.name}
Program: ${p.program}
Phase: ${p.phase}
Attendance: ${p.attendance}%
Milestones: ${p.milestones}
Certifications: ${p.certifications}
Work Hours: ${p.hours}
Recycled: ${p.recycled} lbs
Notes: ${p.notes}`
  );
}

function removeParticipant(index) {
  let participants = JSON.parse(localStorage.getItem("participants"));
  participants.splice(index, 1);
  localStorage.setItem("participants", JSON.stringify(participants));
  loadParticipants();
}

loadParticipants();
