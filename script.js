
function toggleMenu(){
  const nav=document.getElementById("nav");
  if(nav) nav.classList.toggle("show");
}

document.querySelectorAll("#nav a").forEach(link=>{
  link.addEventListener("click",()=>document.getElementById("nav")?.classList.remove("show"));
});

function showInfo(title,text){
  alert(title + "\n\n" + text);
}

function filterEvents(type,button){
  document.querySelectorAll(".filter").forEach(btn=>btn.classList.remove("active"));
  button.classList.add("active");
  document.querySelectorAll(".event-card").forEach(card=>{
    card.style.display=(type==="all" || card.dataset.type===type) ? "block" : "none";
  });
}

function submitForm(e){
  e.preventDefault();
  const form=document.getElementById("bookingForm");
  const result=document.getElementById("result");
  const name=document.getElementById("name").value;
  const eventName=document.getElementById("eventName").value;
  const date=document.getElementById("date").value;
  form.hidden=true;
  result.hidden=false;
  result.innerHTML="<strong>"+name+"さん、予約を受け付けました！</strong><br>"+
    eventName+" / 希望日："+date+
    "<br><small>※学校課題用のデモです。実際の予約データは送信されません。</small>";
}
