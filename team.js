// Steckbrief per team member — edit study, soft (team role) and tech (technical role) here (keys = names as shown on the page).
const BIOS = {
  "Vincent van Kleef": { study: "Mechanical Engineering, BSc", soft: "Team lead. Plans the weekly meetings and is the main point of contact for the supervisors in the bi-weekly technical reviews.", tech: "Responsible for the chassis, the robot's body, with a focus on space planning and waterproofing the interior." },
  "Riccardo Nicosia": { study: "Mechanical Engineering, BSc", soft: "Photographer and IT support.", tech: "Responsible for soft manufacturing and for building a test bed to evaluate the wings in water." },
  "Nyah Thöny": { study: "Mechanical Engineering, BSc", soft: "Sponsor organisation and social media.", tech: "Responsible for biomechanics research on the guillemot, the bird that inspires the robot, and for the mechanical design of the fins." },
  "Gabriel Stocker": { study: "Mechanical Engineering, BSc", soft: "Social media and 3D-printer maintenance.", tech: "Responsible for the wing actuation mechanism (gearbox) and the wing design." },
  "Caspar Freiherr v. Heyl zu Herrnsheim": { study: "Mechanical Engineering, BSc", soft: "Sponsoring design.", tech: "Responsible for motion simulation and SLAM (simultaneous localisation and mapping)." },
  "Rugilé Urnieziute": { study: "Health Science and Technology, BSc", soft: "Co-lead and infrastructure.", tech: "Responsible for the gearbox and the wing thrust analysis." },
  "Arthur Grosman": { study: "Mechanical Engineering, BSc", soft: "Public relations.", tech: "Responsible for camera selection and computer vision." },
  "Niels Tapuy Cerda": { study: "Mechanical Engineering, BSc", soft: "Photography and branding.", tech: "Responsible for the control architecture." },
  "Taigo Sakai": { study: "Mechanical Engineering, BSc", soft: "Budget and purchasing.", tech: "Responsible for the power supply, motor selection and cable management." },
  "Gioele Bonomo": { study: "Mechanical Engineering, BSc", soft: "Systems engineer and safety officer.", tech: "Responsible for power routing, the microcontroller and the sensors." }
};
(function(){
  const grid=document.querySelector('.team-grid'); if(!grid) return;
  const m=document.createElement('div'); m.className='sb-scrim'; m.hidden=true;
  m.innerHTML='<div class="sb-card" role="dialog" aria-modal="true"><img class="sb-img" alt=""><div class="sb-body"><div class="sb-eyebrow sb-role"></div><h3 class="sb-name"></h3><div class="sb-field"><span class="sb-label">Studies</span><span class="sb-study"></span></div><div class="sb-field sb-roles"><span class="sb-label sb-what"></span><div class="sb-role-box"><span class="sb-role-title">Team role</span><p class="sb-soft"></p></div><div class="sb-role-box sb-tint"><span class="sb-role-title">Technical role</span><p class="sb-tech"></p></div></div></div><button class="sb-close" aria-label="Close"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div>';
  document.body.appendChild(m);
  const close=()=>{m.hidden=true;document.body.style.overflow='';};
  m.addEventListener('click',e=>{if(e.target===m||e.target.closest('.sb-close'))close();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
  [...grid.children].forEach(card=>{
    const img=card.querySelector('img'); if(!img) return;
    const name=img.alt, role=card.querySelectorAll('div')[1]?.textContent||'';
    card.classList.add('sb-member'); card.tabIndex=0; card.setAttribute('role','button');
    const open=()=>{const b=BIOS[name]||{};m.querySelector('.sb-img').src=img.src;m.querySelector('.sb-img').alt=name;m.querySelector('.sb-name').textContent=name;m.querySelector('.sb-what').textContent='What '+name.split(' ')[0]+' does at Lomvi';m.querySelector('.sb-role').textContent=role;m.querySelector('.sb-study').textContent=b.study||'';m.querySelector('.sb-soft').textContent=b.soft||'';m.querySelector('.sb-tech').textContent=b.tech||'';m.hidden=false;document.body.style.overflow='hidden';};
    card.addEventListener('click',open); card.addEventListener('keydown',e=>{if(e.key==='Enter')open();});
  });
})();
