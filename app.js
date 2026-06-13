
// code for opening side bar on mobile cuz they aint got big enough screen for a navbar
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const sidebar = document.querySelector('.sidebar');

menuIcon.addEventListener('click', () => {
    sidebar.classList.add('open');
});

closeIcon.addEventListener('click', () => {
    sidebar.classList.remove('open');
});

sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });
});

// it FORCES videos to play as soon as the website is loaded (after i deployed this for the 1st time videos werent auto playing and find its case was such a pain in my ahh, butt then i added this and it worked so yeah, if your code has any issues with videos not playing, check this out😼👽)
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('video').forEach(video => {
    video.muted = true;
    video.play().catch(() => {
      document.addEventListener('touchstart', () => {
        video.play();
      }, { once: true });
    });
  });
});


// this pice of art which u are seeing below is for the typing animation of the code which is getting written on the fake terminal on the home page, NGL this is damm awsome like dyaammm is so cooll, the way it types out the code and the cursor blinks and all is just so satisfying to watch, i could watch this for hours, i am not even kidding, i am so proud of myself 😛😎😎
const lines = [
  { ln:1, html: `<span class="kw">const</span> <span class="fn">tanish</span> <span class="op">=</span> {` },
  { ln:2, html: `&nbsp;&nbsp;<span class="str">"role"</span><span class="op">:</span> <span class="str">"Web Dev"</span>,` },
  { ln:3, html: `&nbsp;&nbsp;<span class="str">"age"</span><span class="op">:</span> <span class="str">"14"</span>,` },
  { ln:4, html: `&nbsp;&nbsp;<span class="str">"stack"</span><span class="op">:</span> [<span class="str">"HTML"</span>, <span class="str">"CSS"</span>, <span class="str">"JS"</span>],` },
  { ln:5, html: `&nbsp;&nbsp;<span class="str">"open"</span><span class="op">:</span> <span class="kw">true</span>` },
  { ln:6, html: `}<span class="cm">  // always building</span>` },
];

const output = document.getElementById('code-output');
let lineIdx = 0;

function typeLine(lineObj, done) {
  const row = document.createElement('div');
  row.className = 'code-line';
  const lnEl = document.createElement('span');
  lnEl.className = 'ln';
  lnEl.textContent = lineObj.ln;
  const codeEl = document.createElement('span');
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  row.append(lnEl, codeEl, cursor);
  output.appendChild(row);

const plain = lineObj.html.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ');
let charI = 0;

const iv = setInterval(() => {
    charI++;
    let count = 0, html = '', i = 0;
    const src = lineObj.html;
    while (i < src.length && count < charI) {
      if (src[i] === '<') {
        const end = src.indexOf('>', i);
        html += src.slice(i, end+1);
        i = end+1;
      } else if (src.slice(i,i+6) === '&nbsp;') {
        html += '&nbsp;'; i += 6; count++;
      } else {
        html += src[i++]; count++;
      }
    }
    codeEl.innerHTML = html;
    if (charI >= plain.length) { clearInterval(iv); cursor.remove(); setTimeout(done, 120); }
  }, 38);
}

function runTyper() {
  output.innerHTML = '';
  lineIdx = 0;
  function next() {
    if (lineIdx >= lines.length) { setTimeout(runTyper, 2800); return; }
    typeLine(lines[lineIdx++], next);
  }
  next();
}
runTyper();
