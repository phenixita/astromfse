---
name: gdpr-compliance
description: 'Add, update, or verify GDPR and ePrivacy Directive compliance. Use for: implementing cookie consent, adding analytics legally, updating privacy policy, managing cookie categories, ensuring EU cookie law compliance.'
argument-hint: 'Describe compliance task (e.g., "add analytics", "update privacy policy", "new cookie category")'
---

# GDPR & Cookie Law Compliance

## When to Use
- Add or update GDPR (EU 2016/679) compliance
- Implement ePrivacy Directive (cookie law) compliance
- Add new cookie categories or analytics
- Update Privacy Policy or Cookie Policy
- Verify consent mechanism
- Troubleshoot cookie consent issues

## Architecture

### Components

| Component | Location | Purpose |
|-----------|----------|---------|
| Cookie Banner | [src/components/CookieBanner.astro](../../../src/components/CookieBanner.astro) | Opt-in consent UI |
| Privacy Policy | [src/pages/privacy.astro](../../../src/pages/privacy.astro) | Art. 13 GDPR informativa |
| Cookie Policy | [src/pages/cookie-policy.astro](../../../src/pages/cookie-policy.astro) | Cookie inventory + management |
| BaseLayout | [src/layouts/BaseLayout.astro](../../../src/layouts/BaseLayout.astro) | Imports CookieBanner globally |

### Consent Mechanism

1. Banner appears on first visit (800ms delay for UX)
2. User chooses: **Accept All** | **Essential Only** | **Customize**
3. Consent stored in `cookie_consent` cookie (essential, 1 year, SameSite=Lax, Secure)
4. A `cookie-consent` CustomEvent is dispatched on `window` with `detail: { essential: true, analytics: boolean }`
5. Any analytics/tracking script MUST listen for this event before activating

### Cookie Consent Format

```json
{
  "essential": true,
  "analytics": true|false,
  "timestamp": "2026-02-28T10:00:00.000Z"
}
```

## How to Add a New Cookie Category

1. In [CookieBanner.astro](../../../src/components/CookieBanner.astro), add a new toggle in the `#cookie-details` section:

```html
<div class="cookie-toggle">
  <label>
    <input type="checkbox" id="cookie-{category}" />
    <strong>Cookie {Name}</strong>
    <span>Description of what this category does.</span>
  </label>
</div>
```

2. Update the save handler to include the new category:

```javascript
const newCategoryChecked = document.getElementById('cookie-{category}')?.checked ?? false;
const prefs = { 
  essential: true, 
  analytics: analyticsChecked, 
  newCategory: newCategoryChecked,
  timestamp: new Date().toISOString()
};
```

3. Update the consent event detail to include the new category.

4. Update [cookie-policy.astro](../../../src/pages/cookie-policy.astro) with the new cookie details in the table.

5. Update [privacy.astro](../../../src/pages/privacy.astro) if the new category changes data processing purposes.

## How to Integrate Analytics (Example: Google Analytics)

```html
<!-- In BaseLayout.astro, AFTER the cookie banner -->
<script>
  window.addEventListener('cookie-consent', (e) => {
    if (e.detail.analytics) {
      // Load GA only after consent
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX';
      script.async = true;
      document.head.appendChild(script);
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXX');
    }
  });
</script>
```

## GDPR Compliance Checklist

- [ ] Cookie banner uses opt-in (not opt-out) model
- [ ] Essential cookies work without consent
- [ ] No analytics/tracking before explicit consent
- [ ] User can change preferences at any time (button on cookie policy page)
- [ ] Privacy Policy includes: titolare, finalità, base giuridica, diritti, periodo conservazione, autorità
- [ ] Cookie Policy lists all cookies with name, purpose, duration, and type
- [ ] Footer links to both policies on every page
- [ ] Consent is timestamped and stored
- [ ] Under-age considerations noted if applicable

## Legal References

- **GDPR**: Regolamento UE 2016/679
- **ePrivacy Directive**: 2002/58/CE (cookie law)
- **Italian DPA**: Garante per la Protezione dei Dati Personali
- **Art. 6(1)(f)**: Legittimo interesse (cookie tecnici)
- **Art. 6(1)(a)**: Consenso (cookie analitici/profilazione)
- **Art. 13**: Informativa trasparenza (privacy policy)
- **Art. 15-22**: Diritti dell'interessato

## Procedure

1. **For new analytics/tracking**: Add consent listener in BaseLayout that loads script only after user accepts
2. **For new cookie category**: Follow the "Add New Category" steps above
3. **For policy updates**: Edit privacy.astro or cookie-policy.astro with new legal language
4. **For verification**: Test consent flow in incognito, check no tracking fires before acceptance
5. **Build and validate**: Run `npm run build` to ensure no errors
