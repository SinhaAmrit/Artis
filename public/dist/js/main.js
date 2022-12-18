function onSubmit(e){e.preventDefault(),document.querySelector(".msg").textContent="",document.querySelector("#image").src="",document.querySelector(".image").src="",document.querySelector(".image").classList.remove("remove"),document.querySelector(".image").classList.add("show");let t=document.querySelector("#prompt").value,a=document.querySelectorAll('input[name="size"]');for(let r of a)if(r.checked){size=r.value;break}if(""===t){alert("Please enter some text");return}generateImageRequest(t,size)}async function generateImageRequest(e,t){try{showSpinner();let a=await fetch("/openai/generateimage",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({prompt:e,size:t})});if(!a.ok)throw hideSpinner(),Error("We do not draw this here! \uD83D\uDE24");let r=await a.json(),s=r.data;document.querySelector("#image").src=s,hideSpinner()}catch(i){document.querySelector(".msg").textContent=i}}function showSpinner(){document.querySelector(".spinner").classList.remove("remove"),document.querySelector(".spinner").classList.add("show"),document.querySelector(".artist").classList.remove("show"),document.querySelector(".artist").classList.add("remove")}function hideSpinner(){document.querySelector(".spinner").classList.remove("show"),document.querySelector(".spinner").classList.add("remove"),document.querySelector(".artist").classList.remove("remove"),document.querySelector(".artist").classList.add("show");let e=document.getElementById("circle");e.scrollIntoView({behavior:"smooth"})}!function(){let e=document.documentElement;if(e.classList.remove("no-js"),e.classList.add("js"),document.body.classList.contains("has-animations")){(window.sr=ScrollReveal()).reveal(".feature, .testimonial",{duration:600,distance:"50px",easing:"cubic-bezier(0.5, -0.01, 0, 1.005)",origin:"bottom",interval:100});let t=anime.timeline({autoplay:!1}),a=document.querySelector(".stroke-animation");a.setAttribute("stroke-dashoffset",anime.setDashoffset(a)),t.add({targets:".stroke-animation",strokeDashoffset:{value:0,duration:2e3,easing:"easeInOutQuart"},strokeWidth:{value:[0,2],duration:2e3,easing:"easeOutCubic"},strokeOpacity:{value:[1,0],duration:1e3,easing:"easeOutCubic",delay:1e3},fillOpacity:{value:[0,1],duration:500,easing:"easeOutCubic",delay:1300}}).add({targets:".fadeup-animation",offset:1300,translateY:{value:[100,0],duration:1500,easing:"easeOutElastic",delay:function(e,t){return 150*t}},opacity:{value:[0,1],duration:200,easing:"linear",delay:function(e,t){return 150*t}}}).add({targets:".fadeleft-animation",offset:1300,translateX:{value:[40,0],duration:400,easing:"easeOutCubic",delay:function(e,t){return 100*t}},opacity:{value:[0,1],duration:200,easing:"linear",delay:function(e,t){return 100*t}}}),e.classList.add("anime-ready"),t.play()}}(),document.querySelector("#image-form").addEventListener("submit",onSubmit);
