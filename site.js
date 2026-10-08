// The site's three outside values, kept in one place. An empty value hides what needs it rather than showing a broken control.
const SITE = {
  // WhatsApp Business number in international form, digits only, e.g. '9665XXXXXXXX'.
  whatsapp: '966592104903',
  // Formspree form id, the part after https://formspree.io/f/.
  form: 'xaeqeaen',
  // Cloudflare Web Analytics site token.
  analytics: '68ca8fdf30684b09a2eee9371e30aea6',
};

const english = document.documentElement.lang === 'en';
const say = english
  ? { greeting: 'Hello Omar, I came from the Warsha Tahla site and I would like to ask about ', sending: 'Sending…', sent: 'Sent. I will reply soon.', failed: 'It did not send. Try WhatsApp, or again in a moment.' }
  : { greeting: 'السلام عليكم يا عمر، جئت من موقع ورشة طحلة وأودّ أن أسأل عن ', sending: 'يُرسَل…', sent: 'وصلت رسالتك، وسيصلك الردّ قريبًا.', failed: 'لم تُرسَل. جرّب واتساب، أو أعد المحاولة بعد قليل.' };

if (SITE.analytics) {
  const beacon = document.createElement('script');
  beacon.defer = true;
  beacon.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  beacon.dataset.cfBeacon = JSON.stringify({ token: SITE.analytics });
  document.head.append(beacon);
}

document.addEventListener('DOMContentLoaded', () => {
  const chat = document.querySelector('[data-whatsapp]');
  if (chat && SITE.whatsapp) {
    chat.href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(say.greeting)}`;
    chat.hidden = false;
  }

  const form = document.querySelector('[data-form]');
  if (!form || !SITE.form) return;
  form.hidden = false;
  const state = form.querySelector('.form-state');
  form.addEventListener('submit', async event => {
    event.preventDefault();
    state.textContent = say.sending;
    try {
      const answer = await fetch(`https://formspree.io/f/${SITE.form}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!answer.ok) throw new Error(String(answer.status));
      form.reset();
      state.textContent = say.sent;
    } catch {
      state.textContent = say.failed;
    }
  });
});
