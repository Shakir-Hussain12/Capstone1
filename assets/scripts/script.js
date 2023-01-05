let wSize = window.innerWidth;
const parent1 = document.querySelector('#performers');
const spons = document.querySelector('#sponsors');
const foot = document.querySelector('footer');

const programs = [
  {
    icon: './assets/images/workshop.png',
    head: 'Rehearsals',
    info: 'Get a chance to see the hardwork behind each masterpiece with access to live rehearsals.',
  },
  {
    icon: './assets/images/opera.png',
    head: 'Opera',
    info: 'Get in touch with the purest form of music with the best opera singers from all around the world.',
  },
  {
    icon: './assets/images/live-music.png',
    head: 'Jazz',
    info: 'Get a chance to witness your favorite/ best Jazz groups perform live.',
  },
  {
    icon: './assets/images/pop.png',
    head: 'Pop',
    info: "Enjoy back-to-back performances from the world's top Pop artists.",
  },
  {
    icon: './assets/images/pop-up.png',
    head: 'Forum',
    info: 'Get in touch with other music lovers, and share your experiences.',
  },
  {
    icon: './assets/images/communities.png',
    head: 'Community',
    info: 'Join the Upsouly community for latest updates on concerts all over the world.',
  },
];

const performers = [
  {
    name: 'Eminem',
    pic: './assets/images/eminem.jpg',
    achievements: 'Rapper / Multi-Grammy Winner / Producer',
    info: 'Eminem is an American rapper and record producer. He is credited with popularizing hip hop in middle America and is critically acclaimed as one of the greatest rappers of all time.',
    link: 'https://en.wikipedia.org/wiki/Eminem',
  },
  {
    name: 'Dimash',
    pic: './assets/images/dimash.jpg',
    achievements: 'Multi-genre Singer / Composer / Multi-Instrumentalist',
    info: 'Dimash Qudaibergen is a Kazakh singer, songwriter, and multi-instrumentalist. He is university-trained in classical as well as contemporary music, and is known for his exceptionally wide vocal range.',
    link: 'https://en.wikipedia.org/wiki/Dimash_Kudaibergen',
  },
  {
    name: 'Beyonce',
    pic: './assets/images/Beyonce.webp',
    achievements: 'Singer / Songwriter / Actress',
    info: "Beyoncé's boundary-pushing artistry and vocals have made her the most influential female musician of the 21st century, according to NPR. Her success has led to her becoming a cultural icon and earning her the nickname 'Queen Bey'.",
    link: 'https://en.wikipedia.org/wiki/Beyonc%C3%A9',
  },
  {
    name: 'Andrea Bocelli',
    pic: './assets/images/Andrea.jpg',
    achievements: 'Singer / Composer / Multi-Grammy Winner',
    info: 'Italian tenor and multi-instrumentalist. Born visually impaired, with congenital glaucoma, and at the age of 12, Bocelli became completely blind, following a brain hemorrhage resulting from a football accident.',
    link: 'https://en.wikipedia.org/wiki/Andrea_Bocelli',
  },
  {
    name: 'BTS',
    pic: './assets/images/BTS.jpg',
    achievements: 'K-Pop Group / Singers/ Dancers',
    info: 'South Korean boy band formed in 2010. The band consists of Jin, Suga, J-Hope, RM, Jimin, V, and Jungkook, who co-write and co-produce the majority of their material.',
    link: 'https://en.wikipedia.org/wiki/BTS',
  },
  {
    name: 'Drake',
    pic: './assets/images/drake.webp',
    achievements: 'Rapper/ Singer / Songwriter / Actor ',
    info: 'An influential figure in contemporary popular music, Drake has been credited for popularizing singing and R&B sensibilities in hip hop',
    link: 'https://en.wikipedia.org/wiki/Drake_(musician)',
  },
];

const createElem = (eName, cName) => {
  const d = document.createElement(eName);
  if (cName) {
    d.classList.add(cName);
  }
  return d;
};

// adding performers dyncamically

const desktop = () => {
  spons.classList.remove('inactive');
  foot.classList.remove('inactive');
  if (parent1.hasChildNodes()) {
    parent1.innerHTML = '';
  }

  const con = parent1.appendChild(createElem('div', 'container'));
  const h2 = con.appendChild(createElem('h2', 'text-center'));
  h2.classList.add('py-2');
  h2.innerText = 'Top Performers';
  con.appendChild(createElem('hr', 'red'));
  const drow = con.appendChild(createElem('div', 'row'));
  drow.classList.add('gx-3');
  drow.classList.add('pt-1');
  drow.classList.add('pb-5');
  performers.forEach((singer) => {
    const {
      name,
      pic,
      achievements,
      info,
      link,
    } = singer;
    const dcol = drow.appendChild(createElem('div', 'col-md-6'));
    dcol.classList.add('p-3');
    const inDiv = dcol.appendChild(createElem('div', 'card'));
    inDiv.classList.add('mb-3');
    inDiv.classList.add('perf_item');
    const cd = inDiv.appendChild(createElem('div', 'row'));
    cd.classList.add('g-0');
    const left = cd.appendChild(createElem('div', 'col-sm-4'));
    left.classList.add('p-3');
    const img = left.appendChild(createElem('img', 'img-fluid'));
    img.classList.add('rounded-start');
    img.src = pic;
    img.alt = name;
    const right = cd.appendChild(createElem('div', 'col-sm-8'));
    right.classList.add('item');
    const cBody = right.appendChild(createElem('div', 'card-body'));
    const h4 = cBody.appendChild(createElem('h3', 'card-title'));
    h4.innerText = name;
    let p = cBody.appendChild(createElem('p', 'card-text'));
    p.classList.add('text-danger');
    p.innerText = achievements;
    cBody.appendChild(createElem('hr', 'inside'));
    p = cBody.appendChild(createElem('p', 'card-text'));
    p.innerText = info;
    const anchor = cBody.appendChild(createElem('a'));
    anchor.href = link;
    anchor.innerText = 'Wikipedia Link';
  });
};

const mobileAdd = (drow, start, end) => {
  for (let i = start; i < end; i += 1) {
    const {
      name,
      pic,
      achievements,
      info,
      link,
    } = performers[i];
    const dcol = drow.appendChild(createElem('div', 'col-md-6'));
    dcol.classList.add('p-3');
    const inDiv = dcol.appendChild(createElem('div', 'card'));
    inDiv.classList.add('mb-3');
    inDiv.classList.add('perf_item');
    const cd = inDiv.appendChild(createElem('div', 'row'));
    cd.classList.add('g-0');
    const left = cd.appendChild(createElem('div', 'col-sm-4'));
    left.classList.add('p-3');
    const img = left.appendChild(createElem('img', 'img-fluid'));
    img.classList.add('rounded-start');
    img.src = pic;
    img.alt = name;
    const right = cd.appendChild(createElem('div', 'col-sm-8'));
    right.classList.add('item');
    const cBody = right.appendChild(createElem('div', 'card-body'));
    const h4 = cBody.appendChild(createElem('h3', 'card-title'));
    h4.innerText = name;
    let p = cBody.appendChild(createElem('p', 'card-text'));
    p.classList.add('text-danger');
    p.innerText = achievements;
    cBody.appendChild(createElem('hr', 'inside'));
    p = cBody.appendChild(createElem('p', 'card-text'));
    p.innerText = info;
    const anchor = cBody.appendChild(createElem('a'));
    anchor.href = link;
    anchor.innerText = 'Wikipedia Link';
  }
};

const mobile = () => {
  if (parent1.hasChildNodes()) {
    parent1.innerHTML = '';
  }

  spons.classList.add('inactive');
  foot.classList.add('inactive');
  const con = parent1.appendChild(createElem('div', 'container'));
  const h2 = con.appendChild(createElem('h2', 'text-center'));
  h2.classList.add('py-2');
  h2.innerText = 'Top Performers';
  con.appendChild(createElem('hr', 'red'));
  const drow = con.appendChild(createElem('div', 'row'));
  drow.classList.add('gx-3');
  drow.classList.add('pt-1');
  drow.classList.add('pb-5');

  mobileAdd(drow, 0, performers.length / 2);

  const btn = parent1.appendChild(createElem('button', 'btn'));
  btn.classList.add('more');
  btn.classList.add('p-2');
  btn.innerText = 'Show More';
  let sp = btn.appendChild(createElem('span'));
  let thumb = sp.appendChild(createElem('img'));
  thumb.src = './assets/images/Disabled.png';
  thumb.alt = 'Arrow';
  btn.addEventListener('click', () => {
    mobileAdd(drow, performers.length / 2, performers.length);
    btn.innerText = 'Show Less';
    spons.classList.remove('inactive');
    foot.classList.remove('inactive');
    sp = btn.appendChild(createElem('span'));
    thumb = sp.appendChild(createElem('img'));
    thumb.src = './assets/images/Disabled.png';
    thumb.style.transform = 'rotate(180deg)';
    btn.addEventListener('click', () => {
      mobile();
    });
  });
};

if (wSize < 768) {
  mobile();
} else {
  desktop();
}

let check = false;
window.onresize = () => {
  wSize = window.innerWidth;
  if (wSize < 768 && !check) {
    check = true;
    mobile();
  } else if (wSize >= 768 && check) {
    check = false;
    desktop();
  } else {
    console.log('skip');
  }
};

// adding programs dynamically
const parent = document.querySelector('#programs');
const con = parent.appendChild(createElem('div', 'container'));
con.classList.add('pb-5');
con.classList.add('pt-3');
const h2 = con.appendChild(createElem('h2', 'text-center'));
h2.innerText = 'Programs & Events';
con.appendChild(createElem('hr', 'red'));
const drow = con.appendChild(createElem('div', 'row'));
drow.classList.add('justify-content-center');
drow.classList.add('g-2');
programs.forEach((program) => {
  const {
    icon,
    head,
    info,
  } = program;
  const dcol = drow.appendChild(createElem('div', 'col-lg-2'));
  dcol.classList.add('col-md-3');
  dcol.classList.add('col-sm-4');
  const ins = dcol.appendChild(createElem('div', 'border'));
  const img = ins.appendChild(createElem('img', 'img-fluid'));
  img.src = icon;
  img.alt = 'N/A';
  const right = ins.appendChild(createElem('div'));
  const h3 = right.appendChild(createElem('h3'));
  h3.innerText = head;
  const p = right.appendChild(createElem('p'));
  p.innerText = info;
});
const anc = con.appendChild(createElem('a', 'prog_end'));
anc.href = '/';
anc.innerText = 'see the whole program';
const lastBtn = con.appendChild(createElem('button', 'last_btn'));
lastBtn.innerText = 'Join Upsouly Community';
const btn = document.querySelector('.navbar-toggler');
const li = document.querySelectorAll('.navbar-nav a');
const menu = document.querySelector('.navbar-collapse');

btn.addEventListener('click', () => {
  btn.classList.toggle('active');
});

li.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('show');
    btn.classList.remove('active');
  });
});