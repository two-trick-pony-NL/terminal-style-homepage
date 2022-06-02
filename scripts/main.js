
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome to petervandoorn.com");
  await delay(700);
  createText("");
  await delay(1000);

  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "guest@petervandoorn.com";
  span1.textContent = " ~ ";
  span2.textContent = "   $";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "help"){
    trueValue(value);
    createCode("","Help -- Here are the commands that you can use:");
    createCode("projects - For my latest projects", "");
    createCode("about - Me, in a nutshell", "");
    createCode("contact - To get in touch with me", "");
    createCode("clear - clean up the terminal", "");
    createCode("repo - Straight to my Github, do not pass start", "");
    
  }
  else if(value === "projects"){
    trueValue(value);
    createText("Here are my most recent projects")
    createCode("<hr><br>Franklyapp", "<br>A custom built feedback collection platform written in Python. Check it out: <a href='https://github.com/two-trick-pony-NL/Frankly'>here</a><br><br> #AWSLightsail #Docker #Flask #Python #Matomo #Gunicorn #TwilioAPI");
    createCode("<hr><br>InstaRecipe", "<br>InstaRecipe serves 12.000 recipes instantly. This was a portfolio project to keep up with modern webdevelopment. Check it out: <a href='https://github.com/two-trick-pony-NL/InstaRecipe'>here</a> <br><br> #AWSLightsail #Docker #Flask #Python #Matomo #Gunicorn #TwilioAPI");
    createCode("<hr><br>bunq", "<br>Various projects, from KYC/EDD automation, slashing time required to open a bank account to near-instant. To new product launches including iDin, Instant Payments, Zapier and OCR Receipt scanner in the bunq app.<br><br>#AWS #NativeApp #Fintech #unicorn#asknicely #Kibana #mixpanel");
    createCode("<hr><br>Cybersprint", "<br>Redesign and implementation a brand new user interface for the Cybersecurity platform. While rebuilding the platform proper Scrum and Agile methodology were implemented, increasing the velocity by as much as 30%. <br><br> #Vue.js #Django");
    createCode("<hr><br>Friss", "<br>Leading a multidisciplinary team tasked to overhaul the Friss Fraud Detection platform. Unifying look, feel and functionality across the board while updating systems to use the latest technologies.<br><br>#Matomo #Azure #Elastic Vue.js");
    createCode("<hr><br>Corinahorstman.nl", "<br>Freelance project designing and building a landing page for Psychotherapist Corina Horstman. Check it out: <a href='https://corinahorstman.nl'>here</a> <br><br>#Wordpress");
    createCode("<hr><br>Growthtribe", "<br>2 day course on growth strategies and conversion optimalisation <br><br>#GrowthTribe");
    createCode("<hr><br>Keerzeven.nl", "<br>Freelance Design, hosting and implementation of a landing page for Keerzeven.nl. Check it out: <a href='https://keerzeven.nl<br><br>#Wordpress");
    createCode("<hr><br>Lovely Workout", "<br>Analysis of visitor behaviour, popular links, bounce rates, user engagement and conversion funnels. Improving marketing campaign performance and improving leads by collecting user analytics across the website and landing pages.<br><br> #matomo #wordpress #microsoftclarity");
    createCode("<hr><br>Hey mate", "<br>Analysis of visitor behaviour, popular links, bounce rates, user engagement and conversion funnels. Improving marketing campaign performance and improving leads by collecting user analytics across the website and landing pages.<br><br> #matomo #wordpress #microsoftclarity");
    createCode("<hr><br>Go Teambuilding", "<br>Analysis of visitor behaviour, popular links, bounce rates, user engagement and conversion funnels. Improving marketing campaign performance and improving leads by collecting user analytics across the website and landing pages.<br><br> #matomo #wordpress #microsoftclarity");
    createCode("<hr><br>Lucevankempen.com", "<br>Hosting webpage and email<br><br> #wordpress");
    createText("<hr><br><a href='https://github.com/two-trick-pony-NL' target='_blank'> Some of these projects have been documented on my Github, check it out: <i class='fab fa-github white'></i> https://github.com/two-trick-pony-NL</a>")
  }

  else if(value === "about"){
    trueValue(value);
    createText(" 👋🏻 Hi! my name is Peter, I take on tech challenges")
    createText("I have over 5 years of experience as a product owner working for tech companies like bunq, Cybersprint and Friss while also helping friends and family with the tech-side of their passion projects. Over the last years I have specialised in UX/UI and user interface design, but any tech project goes really! I love data driven decision making as it levels most arguments. I code in python and am familiar with tools like:<br><br> <ul>Docker</ul> <ul>Wordpress</ul><ul>AWS</ul> <ul>Mixpanel</ul> <ul>Matomo</ul> <ul>Github</ul> <ul>Jira</ul> and many more")
    createText("If you want to see some of my latest projects type: <i>projects</i>,")
    createText("or type <i>contact</i> to get in touch")
  }
  else if(value === "contact"){
    trueValue(value);
    createText("<a href='https://github.com/two-trick-pony-NL' target='_blank'><i class='fab fa-github white'></i> Github</a>")
    createText("<a href='https://www.linkedin.com/in/petervdoorn/' target='_blank'><i class='fab fa-linkedin-in white'></i> LinkedIn</a>")
    createText("<a href='https://www.instagram.com/two.trick.pony_/' target='_blank'><i class='fab fa-instagram white'></i> Instagram</a>")
    createText("<a href='mailto:peter@petervandoorn.com' target='_blank'><i class='fas fa-envelope white'> Drop me a line at hello@petervandoorn.com</a>")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else if(value.includes("sudo")){
    createText("Nope, did you <i>really</i> think we let you become super user?")
  }
  else if(value.includes("rm -rf")){
    createText("Deleting all the files, /jk")
  }
  else if(value === "pwd"){
    createText("/petervandoorn/homepage/index.html")
    
  }
  else if(value === "repo"){
    createText("<a href='https://github.com/two-trick-pony-NL' target='_blank'><i class='fab fa-github white'></i> Github</a>")
    
  }
  else if(value.includes("cd")){
    createText("/petervandoorn/homepage")
  }
  
  else if(value === "ls"){
    createText("LICENSE<br>README.md<br>index.html<br>scripts<br>style.css")
  }
  else if(value.includes("cat")){
    createText("Meow! &#x1f408;")
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
    createText("Type help to see a list of commands");
 
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();