let parent = document.querySelector('#performers');

const programs = [
  {
    icon: './assets/images/prog1.jpg',
    head: 'Rehearsals',
    info: 'Get a chance to see the hardwork behind each masterpiece with access to live rehearsals of each band/ performer.',
  },
  {
    icon: './assets/images/prog2.jpeg',
    head: 'Opera',
    info: 'Get in touch with the purest form of music with the best opera singers from all around the world.',
  },
  {
    icon: './assets/images/prog4.jpg',
    head: 'Jazz',
    info: 'Get a chance to witness your favorite/ best Jazz groups perform live.',
  },
  {
    icon: './assets/images/prog3.jpg',
    head: 'Pop',
    info: "Enjoy back-to-back performances from the world's top Pop artists.",
  },
  {
    icon: './assets/images/forum.jpg',
    head: 'Forum',
    info: 'Get in touch with other music lovers, and share your experiences.',
  },
  {
    icon: './assets/images/prog5.jpeg',
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
    name: 'BTS',
    pic: './assets/images/BTS.jpg',
    achievements: 'K-Pop Group / Singers/ Dancers',
    info: 'South Korean boy band formed in 2010. The band consists of Jin, Suga, J-Hope, RM, Jimin, V, and Jungkook, who co-write and co-produce the majority of their material.',
    link: 'https://en.wikipedia.org/wiki/BTS',
  },
  {
    name: 'Andrea Bocelli',
    pic: './assets/images/Andrea.jpg',
    achievements: 'Singer / Composer / Multi-Grammy Winner',
    info: 'Italian tenor and multi-instrumentalist. Born visually impaired, with congenital glaucoma, and at the age of 12, Bocelli became completely blind, following a brain hemorrhage resulting from a football accident.',
    link: 'https://en.wikipedia.org/wiki/Andrea_Bocelli',
  },
  {
    name: 'Beyonce',
    pic: './assets/images/beyonce.webp',
    achievements: 'Singer / Songwriter / Actress',
    info: "Beyoncé's boundary-pushing artistry and vocals have made her the most influential female musician of the 21st century, according to NPR. Her success has led to her becoming a cultural icon and earning her the nickname 'Queen Bey'.",
    link: 'https://en.wikipedia.org/wiki/Beyonc%C3%A9',
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
let con = parent.appendChild(createElem('div', 'container'));
let h2 = con.appendChild(createElem('h2', 'text-center'));
h2.classList.add('py-2');
h2.innerText = 'Top Performers';
con.appendChild(createElem('hr', 'red'));
let drow = con.appendChild(createElem('div', 'row'));
drow.classList.add('gx-3');
drow.classList.add('pt-1');
drow.classList.add('pb-5');
performers.map((singer) => {
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

// adding programs dynamically
parent = document.querySelector('#programs');
con = parent.appendChild(createElem('div', 'container'));
con.classList.add('pb-5');
con.classList.add('pt-3');
h2 = con.appendChild(createElem('h2', 'text-center'));
h2.innerText = 'Programs & Events';
con.appendChild(createElem('hr', 'red'));
drow = con.appendChild(createElem('div', 'row'));
drow.classList.add('gx-2');
drow.classList.add('gy-2');
programs.map((program) => {
  const {
    icon,
    head,
    info,
  } = program;
  const dcol = drow.appendChild(createElem('div', 'col-lg-2'));
  dcol.classList.add('col-md-3')
  dcol.classList.add('col-sm-4');
  const ins = dcol.appendChild(createElem('div', 'border'));
  const img = ins.appendChild(createElem('img', 'img-fluid'));
  img.src = icon;
  img.alt = 'N/A';
  const right = ins.appendChild(createElem('div', 'd-flex'));
  right.classList.add('flex-column');
  const h3 = right.appendChild(createElem('h3'));
  h3.innerText = head;
  right.appendChild(createElem('hr','w-75'));
  const p = right.appendChild(createElem('p'));
  p.innerText = info;
});

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