fetch('viaggio.json').then(r=>r.json()).then
(d=>{document.getElementById('title').textContent=d.titolo;
    let root=document.getElementById('days');
    d.giorni.forEach(g=>{let day=document.createElement('div');
        day.className='day';
        let h=document.createElement('div');
        h.className='h';h.textContent='Giorno '+g.giorno;
        let c=document.createElement('div');
        c.className='c';
        h.onclick=()=>c.classList.toggle('open');
        
        ['mattino','pomeriggio','sera'].forEach(s=>{c.innerHTML+='<h3>'+s+'</h3>';
             (g[s]||[]).forEach(t=>{c.innerHTML+=`<div><b>${t.ora}</b> ${t.nome} 
                <a target=_blank href="${t.maps}">Maps</a></div>`})});
             day.append(h,c);
             root.append(day);
            });
        });