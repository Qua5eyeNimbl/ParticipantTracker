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

function getStatusBadge(attendance) {
  attendance = Number(attendance);
  if (attendance < 50) {
    return '<span class="badge bg-danger">At Risk</span>';
  } else if (attendance >= 90) {
    return '<span class="badge bg-success">Ready</span>';
  }
  return '<span class="badge bg-primary">On Track</span>';
}

function loadParticipants() {
  const table = document.getElementById("table");
  if (!table) return;

  const participants = JSON.parse(localStorage.getItem("participants")) || [];
  table.innerHTML = "";

  participants.forEach((p, i) => {
    table.innerHTML += `
      <tr>
        <td>${p.name}</td>
        <td>${p.program}</td>
        <td>${p.phase}</td>
        <td>${p.attendance}%</td>
        <td>${getStatusBadge(p.attendance)}</td>
        <td>
          <a href="participant.html?id=${i}" class="btn btn-info" style="padding: 0.6rem 1.2rem; font-size: 0.9rem;">
            View
          </a>
        </td>
        <td>
          <button class="btn btn-danger" style="padding: 0.6rem 1.2rem; font-size: 0.9rem;" onclick="removeParticipant(${i})">
            Remove
          </button>
        </td>
      </tr>
    `;
  });
}

function viewParticipant(index) {
  const participants = JSON.parse(localStorage.getItem("participants"));
  const p = participants[index];

  // Populate participant details page
  document.getElementById("name").textContent = p.name;
  document.getElementById("program").textContent = p.program;
  document.getElementById("phase").textContent = p.phase;
  document.getElementById("attendance").textContent = p.attendance;
  
  const attNum = Number(p.attendance);
  if (attNum < 50) {
    document.getElementById("status").innerHTML = '<span class="badge bg-danger">At Risk</span>';
  } else if (attNum >= 90) {
    document.getElementById("status").innerHTML = '<span class="badge bg-success">Ready</span>';
  } else {
    document.getElementById("status").innerHTML = '<span class="badge bg-primary">On Track</span>';
  }
  
  document.getElementById("milestones").textContent = p.milestones || "None listed";
  document.getElementById("certifications").textContent = p.certifications || "None listed";
  document.getElementById("caseNotes").textContent = p.notes || "No notes";
  document.getElementById("workHours").textContent = p.hours || "0";
  document.getElementById("materialsRecycled").textContent = p.recycled || "0";
}

function removeParticipantFromProfile() {
  const params = new URLSearchParams(window.location.search);
  const index = params.get("id");
  
  if (confirm("Are you sure you want to remove this participant?")) {
    let participants = JSON.parse(localStorage.getItem("participants"));
    participants.splice(index, 1);
    localStorage.setItem("participants", JSON.stringify(participants));
    window.location.href = "index.html";
  }
}

function removeParticipant(index) {
  if (confirm("Are you sure you want to remove this participant?")) {
    let participants = JSON.parse(localStorage.getItem("participants"));
    participants.splice(index, 1);
    localStorage.setItem("participants", JSON.stringify(participants));
    loadParticipants();
  }
}

function loadReports() {
  const participants = JSON.parse(localStorage.getItem("participants")) || [];
  
  let totalHours = 0;
  let totalRecycled = 0;
  let atRisk = 0;

  participants.forEach(p => {
    totalHours += Number(p.hours) || 0;
    totalRecycled += Number(p.recycled) || 0;
    if (Number(p.attendance) < 50) {
      atRisk++;
    }
  });

  // CO2 avoided: roughly 1 lb of e-waste recycled saves 2 lbs of CO2
  const co2Avoided = Math.round(totalRecycled * 2);

  document.getElementById("totalParticipants").textContent = participants.length;
  document.getElementById("atRisk").textContent = atRisk;
  document.getElementById("totalHours").textContent = totalHours.toFixed(1);
  document.getElementById("totalRecycled").textContent = totalRecycled.toFixed(1);
  document.getElementById("co2Avoided").textContent = co2Avoided;
}

// Determine which page we're on and load appropriate data
if (document.getElementById("table")) {
  loadParticipants();
} else if (document.getElementById("name") && window.location.pathname.includes("participant")) {
  const params = new URLSearchParams(window.location.search);
  const index = params.get("id");
  if (index !== null) {
    viewParticipant(index);
  }
} else if (document.getElementById("totalParticipants")) {
  loadReports();
}

