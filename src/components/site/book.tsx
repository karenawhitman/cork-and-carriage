<form id="book-form" class="rounded-xl bg-bg p-6 shadow-[var(--shadow-border)] sm:p-8">
  <div class="grid gap-4 sm:grid-cols-2">
    <label class="block text-sm text-muted sm:col-span-2">Service
      <select name="Service" class="mt-1.5 h-11 w-full rounded-md bg-bg px-3 text-sm text-ink shadow-[var(--shadow-border)] outline-none">
        <option value="Photo truck — available now" selected>Photo truck — available now</option>
        <option value="3600 Uncorked waitlist — Spring 2027">3600 Uncorked waitlist — Spring 2027</option>
      </select>
    </label>
    <label class="block text-sm text-muted">Name
      <input name="Name" class="mt-1.5 h-11 w-full rounded-md bg-bg px-3 text-sm text-ink shadow-[var(--shadow-border)] outline-none" autocomplete="name" required>
    </label>
    <label class="block text-sm text-muted">Email
      <input type="email" name="Email" class="mt-1.5 h-11 w-full rounded-md bg-bg px-3 text-sm text-ink shadow-[var(--shadow-border)] outline-none" autocomplete="email" required>
    </label>
    <label class="block text-sm text-muted">Date
      <input type="date" name="Date" class="mt-1.5 h-11 w-full rounded-md bg-bg px-3 text-sm text-ink shadow-[var(--shadow-border)] outline-none">
    </label>
    <label class="block text-sm text-muted">Where
      <select name="Where" class="mt-1.5 h-11 w-full rounded-md bg-bg px-3 text-sm text-ink shadow-[var(--shadow-border)] outline-none">
        <option>Middle Peninsula</option>
        <option>Northern Neck</option>
        <option>Surrounding</option>
      </select>
    </label>
    <label class="block text-sm text-muted sm:col-span-2">Occasion
      <select name="Occasion" class="mt-1.5 h-11 w-full rounded-md bg-bg px-3 text-sm text-ink shadow-[var(--shadow-border)] outline-none">
        <option>Engagement / portraits</option>
        <option>Seasonal / holiday cards</option>
        <option>Family session</option>
        <option>Styled / brand</option>
        <option>Wedding-day 3600</option>
      </select>
    </label>
    <label class="block text-sm text-muted sm:col-span-2">Notes
      <textarea name="Notes" class="mt-1.5 min-h-28 w-full rounded-md bg-bg px-3 py-2 text-sm text-ink shadow-[var(--shadow-border)] outline-none" placeholder="Photographer, location, seasonal props (wreath, pumpkins, lights)."></textarea>
    </label>
  </div>
  <button class="inline-flex items-center justify-center font-sans text-sm font-medium bg-forest text-accent-fg hover:opacity-90 h-12 rounded-md px-5 mt-6 w-full sm:w-auto" type="submit">
    Request the truck
  </button>
  <p id="form-fallback" class="mt-3 hidden text-sm text-muted">
    If your mail app didn’t open, email <a href="mailto:karen@corkncarriage.com" class="underline">karen@corkncarriage.com</a> directly.
  </p>
</form>

<script>
document.getElementById('book-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const body = Array.from(data.entries())
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');
  const subject = encodeURIComponent('Photo Truck Request');
  const mailto = `mailto:karen@corkncarriage.com?subject=${subject}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
  setTimeout(() => {
    document.getElementById('form-fallback').classList.remove('hidden');
  }, 800);
});
</script>
