document.addEventListener('DOMContentLoaded', () => {

// --- PORTFOLIO DATA ---
const portfolioItems = [
  { icon: 'bi-phone-fill',      color: 'var(--red)',  bg: 'ph-1', tag: 'تطبيق موبايل',      name: 'تطبيق توصيل الطلبات - سريع' },
  { icon: 'bi-globe2',          color: '#1565C0',     bg: 'ph-2', tag: 'موقع إلكتروني',     name: 'بوابة الخدمات الحكومية'     },
  { icon: 'bi-bag-fill',        color: '#388E3C',     bg: 'ph-3', tag: 'تجارة إلكترونية',   name: 'متجر روعة للأزياء'          },
  { icon: 'bi-graph-up-arrow',  color: '#F57F17',     bg: 'ph-4', tag: 'لوحة تحكم',         name: 'داشبورد تحليلات المبيعات'   },
  { icon: 'bi-robot',           color: '#6A1B9A',     bg: 'ph-5', tag: 'ذكاء اصطناعي',      name: 'نظام توصية ذكي للمنتجات'    },
  { icon: 'bi-hospital-fill',   color: '#00838F',     bg: 'ph-6', tag: 'قطاع الصحة',        name: 'منصة الحجز الطبي الإلكتروني'},
];

// Render Portfolio Items
const portfolioGrid = document.getElementById('portfolioGrid');
portfolioItems.forEach(item => {
  portfolioGrid.innerHTML += `
    <div class="portfolio-card reveal position-relative overflow-hidden">
      <div class="ph-icon w-100 d-flex align-items-center justify-content-center ${item.bg}">
        <i class="bi ${item.icon}" style="font-size:56px;color:${item.color}"></i>
      </div>
      <div class="portfolio-overlay position-absolute d-flex flex-column justify-content-end">
        <div class="portfolio-tag fw-bold text-uppercase">${item.tag}</div>
        <div class="portfolio-name fs-6 fw-bolder">${item.name}</div>
      </div>
    </div>`;
});

// --- TESTIMONIALS DATA ---
const testimonials = [
  { stars: 5, text: 'فريق مشروعك حول فكرتنا إلى تطبيق ناجح في وقت قياسي. الاحترافية والسرعة في التنفيذ كانا مذهلين حقاً، وما زلنا نعمل معهم حتى اليوم.', avatar: 'أح', avatarClass: 'av-red',    name: 'أحمد العمراوي',  role: 'مؤسس شركة ذكاء للتقنية'              },
  { stars: 5, text: 'أفضل استثمار قمت به لمشروعي. الموقع الجديد رفع مبيعاتنا بنسبة 80% خلال ثلاثة أشهر فقط، والتصميم جذاب ومتجاوب تماماً.',                  avatar: 'سم', avatarClass: 'av-gray',   name: 'سمر الشريف',     role: 'صاحبة متجر روعة للأزياء'              },
  { stars: 5, text: 'التواصل المستمر والشفافية الكاملة طوال مراحل المشروع جعلتني مطمئناً تماماً. النتيجة فاقت توقعاتي بمراحل.',                                  avatar: 'خا', avatarClass: 'av-green',  name: 'خالد ناصر',      role: 'مدير تطوير الأعمال، مجموعة رؤية'      },
  { stars: 5, text: 'نظام إدارة العيادة الذي طوروه لنا غيّر طريقة عملنا بالكامل. الكفاءة ارتفعت 60% وعدد المرضى تضاعف خلال ستة أشهر.',                        avatar: 'دم', avatarClass: 'av-teal',   name: 'د. محمود السيد', role: 'مدير مجمع الشفاء الطبي'               },
  { stars: 5, text: 'تطبيق التوصيل الذي بنوه لنا يعمل بسلاسة تامة حتى في أوقات الذروة. الدعم التقني سريع وفريق العمل محترف للغاية.',                          avatar: 'نو', avatarClass: 'av-dark',   name: 'نور الهدى',      role: 'مديرة عمليات شركة سريع'               },
  { stars: 5, text: 'قدموا لنا حلاً رقمياً متكاملاً بدءاً من الموقع وحتى التطبيق وربطه بنظام إدارة المخزون. كل شيء يعمل بتناسق رائع.',                        avatar: 'عب', avatarClass: 'av-purple', name: 'عبدالله المنصور', role: 'مؤسس منصة التعليم الذكي'              },
  { stars: 5, text: 'لوحة التحكم والتقارير التفاعلية التي طوروها لنا أصبحت أداتنا الأساسية في اتخاذ القرارات. شكراً لفريق مشروعك المتميز.',                    avatar: 'مر', avatarClass: 'av-red',    name: 'مريم الزهراني',  role: 'مديرة التحليلات، مجموعة النجاح'       },
  { stars: 4, text: 'تجربة رائعة من البداية للنهاية. فهموا احتياجات مشروعنا بسرعة وقدموا حلاً مبتكراً تجاوز ما كنا نتخيله.',                                    avatar: 'يا', avatarClass: 'av-gray',   name: 'ياسر الأحمدي',   role: 'مدير التسويق، شركة نما'               },
];

// Render Testimonials
const carousel = document.getElementById('testimonialsCarousel');
testimonials.forEach(t => {
  const starsHtml = '★'.repeat(t.stars) + (t.stars < 5 ? '☆'.repeat(5 - t.stars) : '');
  carousel.innerHTML += `
    <div class="testimonial-card">
      <div class="t-top d-flex justify-content-between align-items-start mb-3">
        <div class="t-stars">${starsHtml}</div>
        <div class="t-quote-mark">"</div>
      </div>
      <p class="t-text fst-italic mb-4">${t.text}</p>
      <div class="t-author pt-3 d-flex align-items-center">
        <div class="t-avatar rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 fw-bolder ${t.avatarClass}">${t.avatar}</div>
        <div><div class="t-name fw-bold">${t.name}</div><div class="t-role">${t.role}</div></div>
      </div>
    </div>`;
});

// Initialize Owl Carousel
$(document).ready(function(){
  $('.owl-testimonials').owlCarousel({
    rtl: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    smartSpeed: 700,
    dots: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-right" style="font-size:16px;font-weight:bold"></i>',
      '<i class="bi bi-chevron-left" style="font-size:16px;font-weight:bold"></i>'
    ],
    responsive:{
      0:   { items:1, margin:16 },
      640: { items:2, margin:20 },
      1024:{ items:3, margin:24 }
    }
  });
});

// Navbar and Back to Top scroll effects
const navbar = document.getElementById('navbar');
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  backTop.classList.toggle('show', window.scrollY > 400);
});
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── Mobile Menu Toggle ──
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('active', isOpen);
});

// Close the menu when clicking on any link
function closeMob() {
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('active');
}
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMob));

// ── COUNTER ANIMATION ──
function animateCounter(el) {
  const target    = parseFloat(el.dataset.target);
  const prefix    = el.dataset.prefix  || '';
  const suffix    = el.dataset.suffix  || '';
  const isFloat   = target % 1 !== 0;
  const duration  = 1800;
  const steps     = 60;
  const increment = target / steps;
  let current = 0, step = 0;
  const timer = setInterval(() => {
    step++;
    current = Math.min(increment * step, target);
    el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.floor(current)) + suffix;
    if (step >= steps) clearInterval(timer);
  }, duration / steps);
}

// Scroll Reveal Observer + Counter Trigger
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), 80 * (i % 4));
      entry.target.querySelectorAll('[data-target]').forEach(animateCounter);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
document.querySelectorAll('#portfolioGrid .reveal').forEach(el => revealObserver.observe(el));

// FAQ Accordion logic
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const ans  = item.querySelector('.faq-a');
    const icon = item.querySelector('.faq-icon i');
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item.open').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-a').style.maxHeight = null;
      i.querySelector('.faq-icon i').className = 'bi bi-plus';
    });

    if (!isOpen) {
      item.classList.add('open');
      ans.style.maxHeight = ans.scrollHeight + 'px';
      icon.className = 'bi bi-x';
    }
  });
});

/* --- CONTACT FORM LOGIC --- */
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return /^(?:\+20|20)?0?1[0125]\d{8}$/.test(phone.replace(/\s/g, ''));
}

const setValidity = (el, isValid) => {
  if (isValid) {
    el.classList.remove('is-invalid');
    return true;
  } else {
    el.classList.add('is-invalid');
    return false;
  }
};

window.submitForm = function() {
  let allValid = true;

  const name    = document.getElementById('name');
  const email   = document.getElementById('email');
  const phone   = document.getElementById('phone');
  const service = document.getElementById('service');
  const message = document.getElementById('message');

  if (!setValidity(name,    name.value.trim().length >= 3))          allValid = false;
  if (!setValidity(email,   validateEmail(email.value.trim())))       allValid = false;
  if (!setValidity(phone,   validatePhone(phone.value.trim())))       allValid = false;
  if (!setValidity(service, service.value !== ""))                    allValid = false;
  if (!setValidity(message, message.value.trim().length >= 10))       allValid = false;

  if (allValid) {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    if (contactForm) contactForm.style.display = 'none';
    if (formSuccess) formSuccess.style.display = 'block';
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

document.querySelectorAll('#contactForm input, #contactForm textarea, #contactForm select').forEach(input => {
  input.addEventListener('blur', () => {
    if (input.id === 'name')    setValidity(input, input.value.trim().length >= 3);
    if (input.id === 'email')   setValidity(input, validateEmail(input.value.trim()));
    if (input.id === 'phone')   setValidity(input, validatePhone(input.value.trim()));
    if (input.id === 'service') setValidity(input, input.value !== "");
    if (input.id === 'message') setValidity(input, input.value.trim().length >= 10);
  });
});

});
