let parent = document.querySelector('#performers');

const programs = [
  {
    icon: '',
    head: 'Rehearsals',
    info: 'Lorem Ipsum',
  },
  {
    icon: '',
    head: 'Live Performance',
    info: 'Lorem Ipsum',
  },
  {
    icon: '',
    head: 'Lunch Break',
    info: 'Lorem Ipsum',
  },
  {
    icon: '',
    head: 'Meet n Greet',
    info: 'Lorem Ipsum',
  },
  {
    icon: '',
    head: 'Forum',
    info: 'Lorem Ipsum',
  },
  {
    icon: '',
    head: 'Community',
    info: 'Lorem Ipsum',
  },
];

const performers = [
  {
    name: 'Eminem',
    pic: './assets/images/notfound.png',
    achievements: '3 times grammy winner',
    info: 'Lorem Ipsum',
  },
  {
    name: 'Dimash',
    pic: './assets/images/notfound.png',
    achievements: 'Best Vocalist in the world',
    info: 'Lorem Ipsum',
  },
  {
    name: 'BTS',
    pic: './assets/images/notfound.png',
    achievements: 'Biggest K-Pop Group',
    info: 'Lorem Ipsum',
  },
  {
    name: 'Andrea Bocelli',
    pic: './assets/images/notfound.png',
    achievements: '',
    info: 'Lorem Ipsum',
  },
  {
    name: 'Tupac',
    pic: './assets/images/notfound.png',
    achievements: 'Most influential Rapper',
    info: 'Lorem Ipsum',
  },
  {
    name: 'Drake',
    pic: './assets/images/notfound.png',
    achievements: 'Most popular rapper in the world',
    info: 'Lorem Ipsum',
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
  } = singer;
  let dcol = drow.appendChild(createElem('div', 'col-md-6'));
  dcol.classList.add('d-flex');
  dcol.classList.add('p-5');
  const left = dcol.appendChild(createElem('div', 'left'));
  left.classList.add('w-50');
  let img = left.appendChild(createElem('img', 'img-fluid'));
  img.src = pic;
  const right = dcol.appendChild(createElem('div', 'right'));
  right.classList.add('flex-column');
  right.classList.add('item');
  let h4 = right.appendChild(createElem('h4', 'title'));
  h4.innerText = name;
  let p = right.appendChild(createElem('p', 'd-block'));
  p.classList.add('text-danger');
  p.innerText = achievements;
  right.appendChild(createElem('hr', 'inside'));
  p = right.appendChild(createElem('p'));
  p.innerText = info;
});

// adding programs dynamically
parent = document.querySelector('#programs');
con = parent.appendChild(createElem('div', 'container'));
con.classList.add('py-5');
h2 = con.appendChild(createElem('h2', 'text-center'));
h2.innerText = 'Main Program';
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
  let dcol = drow.appendChild(createElem('div', 'col-md-2'));
  dcol.classList.add('col-sm-4');
  let ins = dcol.appendChild(createElem('div', 'border'));
  ins.innerHTML = icon;
  let h3 = ins.appendChild(createElem('h5'));
  h3.innerText = head;
  p = ins.appendChild(createElem('p'));
  p.innerText = info;
});

const btn = document.querySelector('.navbar-toggler');
const li = document.querySelectorAll('.navbar-nav a')
const menu = document.querySelector('.navbar-collapse');

btn.addEventListener('click', () => {
  btn.classList.toggle('active');
});

li.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('show');
    btn.classList.remove('active');
  });
})