// LOAD PARTICIPANTS
let participants = JSON.parse(localStorage.getItem("participants")) || [];

// ADD PARTICIPANT
function addParticipant() {
  const participant = {
    name: document.getElementById("name").value,
    program: document.getElementById("program").value,
    phase: document.getElementById("phase").value,
    attendance: Number(document.getElementById("attendance").value),
    milestones: document.getElementById("milestones").value,
    certifications: document.getElementById("certifications").value,
    caseNotes: document.getElementById("caseNotes").value,
    workHours: Number(document.getElementById("workHours").value),
    materialsRecycled: Number(document.getElementById("materialsRecycled").value)
  };

  participant.status = "On Track";
  if (participant.attendance < 70) participant.status = "At Risk";
  if (participant.attendance >= 90) participant.status = "Ready to Advance";

  participants.push(participant);
  localStorage.setItem("participants", JSON.stringify(participants));

  window.location.href = "index.html";
}

function getStatusBadge(status) {
  if (status === "At Risk") {
    return `<span class="badge bg-danger">${status}</span>`;
  }
  if (status === "Ready to Advance") {
    return `<span class="badge bg-primary">${status}</span>`;
  }
  return `<span class="badge bg-success">${status}</span>`;
}


// DASHBOARD TABLE
const table = document.getElementById("participantTable");

if (table) {
  table.innerHTML = "";

  participants.forEach((p, index) => {
    table.innerHTML += `
      <tr>
        <td>${p.name}</td>
        <td>${p.program}</td>
        <td>${p.phase}</td>
        <td>${p.attendance}%</td>
<td>${getStatusBadge(p.status)}</td>
        <td>
          <a href="participant.html?index=${index}">View</a>
        </td>
      </tr>
    `;
  });
}
