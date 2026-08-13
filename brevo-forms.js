/* Brevo embedded sign-up forms — shared markup builder.
   The two SGN "Get in Touch" forms are byte-identical apart from their POST action and
   their colours, so the markup is written once here and each variant supplies its palette.
   Loaded as plain JS (no Babel): keep this file free of JSX.
   Rendered by site-BrevoForm.jsx, which also loads Brevo's stylesheet and main.js. */

/* Copy shared by both forms — kept in one place so the two stay in sync. */
const BREVO_COPY = {
  consentIntro: 'SGN is committed to protecting and respecting your privacy, and we&#39;ll only use your personal '
    + 'information to administer your account and to provide the products and services you requested from us. From '
    + 'time to time, we would like to contact you about our products and services, as well as other content that may '
    + 'be of interest to you. If you consent to us contacting you for this purpose, please tick below to say how you '
    + 'would like us to contact you:',
  optInLabel: 'I agree to receive other communications from SGN.',
  processingIntro: 'In order to provide you the content requested, we need to store and process your personal data. '
    + 'If you consent to us storing your personal data for this purpose, please tick the checkbox below.',
  processingLabel: 'I agree to allow SGN to store and process my personal data.',
  unsubscribe: 'You can unsubscribe from these communications at any time. For more information on how to '
    + 'unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, '
    + 'please review our <a target="_blank" href="https://sportgensummit.com/privacy" rel="nofollow noopener">'
    + 'Privacy Policy</a>.',
  success: 'Thank you. Our team will contact you shortly.',
  error: 'Your subscription could not be saved. Please try again.',
};

/* One entry per Brevo form. `action` is the form's own serve URL — do not swap them. */
const BREVO_FORMS = {
  /* SPORT[GEN] Summit — navy DA (index.html #/get-in-touch) */
  navy: {
    action: 'https://a3e44c04.sibforms.com/serve/MUIFAPgjI0xrGR3UlCDPkwXPowdyxzZ0GPd1Y5dsR33WdIsqlc-slV5cooVExoo1F8GBEiJIhY-vhuMEtVa4BBVu7WNHQT5nBfuOyMFmRymyJaj3ki8lScZe83zyD-_HPri4INbj68ZeWLTZ86_XRRfpsjDOccOXgtA5VPa9X6OywhZzO-VHDuw5frpIZpiE05s4gedX3q7S7_2iLw==',
    formBg: '#000519',
    containerBg: 'rgba(0,5,25,1)',
    borderColor: '#000519',
    labelColor: '#ffffff',
    textColor: '#ffffff',
    optInColor: '#ffffff',
    buttonBg: '#ffffff',
    buttonColor: '#000519',
  },
  /* [SGN] Invest — light graphite DA (sis.html #/get-in-touch) */
  invest: {
    action: 'https://a3e44c04.sibforms.com/serve/MUIFAMCpQown3MmzAelTKXyWGpuLk8t0BgflILobhF-GnbNkWfs_8OXeWfpB4IMdyvQ0Oh9WLxkH8Gm8q0L7lN48-HdkWsgXQj1WNcwwl_m7-Zzlr1butZ_PLmatv9JRItc5ZcYIJiRfHSXuV00KJlNNT0LNE_gMqsAXEJ0zMg4AQ9jA4THKSlBhQ7ZUrXZyPobVVFEekZmO_ARf4w==',
    formBg: '#ffffff',
    containerBg: 'rgba(255,255,255,1)',
    borderColor: '#ffffff',
    labelColor: '#020000',
    textColor: '#030000',
    optInColor: '#020000',
    buttonBg: '#030000',
    buttonColor: '#ffffff',
  },
};

/* The <style> block Brevo asks you to put in <head>. Injected once by site-BrevoForm.jsx. */
const BREVO_BASE_CSS = [
  ':where(.sib-form-message-panel) { display: none; }',
  ':where(.sib-form-message-panel .sib-notification__icon) { width: 20px; height: 20px; }',
  '#sib-container input::placeholder, #sib-container textarea::placeholder {'
    + ' font-family: Helvetica, sans-serif; text-align: left; color: #c0ccda; }',
  '#sib-container a { text-decoration: underline; color: #ffb049; }',
].join('\n');

/* NE PAS RETIRER. Le handler de soumission de Brevo fait `button.querySelector("svg").removeClass(...)`
   sans garde : sans ce loader, il lève une exception et la soumission ne part jamais, en silence. */
const BREVO_LOADER_SVG = '<svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"'
  + ' viewBox="0 0 512 512"><path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874'
  + ' 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961'
  + ' 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11'
  + ' 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" /></svg>';

function brevoErrorStyle() {
  return 'font-family:Helvetica, sans-serif; font-size:16px; text-align:left; color:#661d1d;'
    + ' background-color:#ffeded; border-color:#ff4949; border-radius:3px;';
}

/* A plain text/email field. */
function brevoInput(name, label, color, extra) {
  return ''
    + '<div style="padding: 8px 0;">'
    + '<div class="sib-input sib-form-block"><div class="form__entry entry_block"><div class="form__label-row ">'
    + '<label class="entry__label" style="font-weight: 700; text-align: left; font-family:Helvetica, sans-serif;'
    + ' font-size:16px; font-weight:700; text-align:left; color:' + color + ';" for="' + name + '"'
    + ' data-required="*">' + label + '</label>'
    + '<div class="entry__field"><input class="input " ' + extra + ' id="' + name + '" name="' + name + '"'
    + ' autocomplete="off" data-required="true" required /></div>'
    + '</div><label class="entry__error entry__error--primary" style="' + brevoErrorStyle() + '"></label>'
    + '</div></div></div>';
}

/* A free-text paragraph block. */
function brevoText(html, color) {
  return ''
    + '<div style="padding: 8px 0;">'
    + '<div class="sib-form-block" style="font-family:Helvetica, sans-serif; font-size:16px; text-align:left;'
    + ' color:' + color + '; background-color:transparent; text-align:left">'
    + '<div class="sib-text-form-block"><p>' + html + '</p></div></div></div>';
}

/* A required consent checkbox bound to a boolean contact attribute. */
function brevoOptIn(name, label, color) {
  return ''
    + '<div style="padding: 8px 0;">'
    + '<div class="sib-optin sib-form-block" data-required="true"><div class="form__entry entry_mcq">'
    + '<div class="form__label-row "><div class="entry__choice"><label>'
    + '<input type="checkbox" class="input_replaced" value="1" id="' + name + '" name="' + name + '" required />'
    + '<span class="checkbox checkbox_tick_positive" style="margin-left:"></span>'
    + '<span style="font-family:Helvetica, sans-serif; font-size:14px; text-align:left; color:' + color + ';'
    + ' background-color:transparent;"><p>' + label + '</p>'
    + '<span data-required="*" style="display: inline;" class="entry__label entry__label_optin"></span></span>'
    + '</label></div></div>'
    + '<label class="entry__error entry__error--primary" style="' + brevoErrorStyle() + '"></label>'
    + '</div></div></div>';
}

/* Le telephone est stocke dans l'attribut texte PHONE, pas dans le champ reserve SMS de
   Brevo: SMS est un identifiant de contact, unique au niveau du compte, donc deux personnes
   ne peuvent pas partager un numero. PHONE n'a pas cette contrainte. Consequence: plus de
   selecteur d'indicatif (il est propre au champ SMS), d'ou le placeholder de format. */

function brevoMessagePanel(id, text, colors) {
  return ''
    + '<div id="' + id + '" class="sib-form-message-panel" style="font-family:Helvetica, sans-serif; font-size:16px;'
    + ' text-align:left; color:' + colors.fg + '; background-color:' + colors.bg + '; border-color:' + colors.border
    + '; border-radius:3px; max-width:540px;">'
    + '<div class="sib-form-message-panel__text sib-form-message-panel__text--center">'
    + '<span class="sib-form-message-panel__inner-text">' + text + '</span></div></div>';
}

/* Build the full markup for one variant ("navy" | "invest"). */
function brevoFormHTML(variant) {
  const v = BREVO_FORMS[variant];
  if (!v) throw new Error('Unknown Brevo form variant: ' + variant);
  return ''
    + '<div class="sib-form" style="text-align: center; background-color: ' + v.formBg + ';">'
    + '<div id="sib-form-container" class="sib-form-container">'
    + brevoMessagePanel('error-message', BREVO_COPY.error, { fg: '#661d1d', bg: '#ffeded', border: '#ff4949' })
    + brevoMessagePanel('success-message', BREVO_COPY.success, { fg: '#085229', bg: '#e7faf0', border: '#13ce66' })
    + '<div id="sib-container" class="sib-container--large sib-container--vertical" style="max-width:540px;'
    + ' text-align:center; background-color:' + v.containerBg + '; border-width:1px; border-style:solid;'
    + ' border-color:' + v.borderColor + '; border-radius:3px; direction:ltr">'
    + '<form id="sib-form" method="POST" action="' + v.action + '" data-type="subscription">'
    + brevoInput('FIRSTNAME', 'First Name', v.labelColor, 'maxlength="200" type="text"')
    + brevoInput('LASTNAME', 'Last Name', v.labelColor, 'maxlength="200" type="text"')
    + brevoInput('EMAIL', 'Email', v.labelColor, 'type="text" value=""')
    /* type="text" et pas "tel": sur un type="tel" Brevo applique une validation de numero
       qui refuse les espaces et le +. PHONE est un attribut texte, donc champ texte. */
    + brevoInput('PHONE', 'Mobile Phone Number', v.labelColor,
        'type="text" inputmode="tel" maxlength="40" placeholder="+33 6 12 34 56 78"')
    + brevoText(BREVO_COPY.consentIntro, v.textColor)
    + brevoOptIn('OPT_IN', BREVO_COPY.optInLabel, v.optInColor)
    + brevoText(BREVO_COPY.processingIntro, v.textColor)
    + brevoOptIn('DATA_PROCESSING_CONSENT', BREVO_COPY.processingLabel, v.optInColor)
    + brevoText(BREVO_COPY.unsubscribe, v.textColor)
    + '<div style="padding: 8px 0;"><div class="sib-form-block" style="text-align: left">'
    + '<button class="sib-form-block__button sib-form-block__button-with-loader"'
    + ' style="font-family:Helvetica, sans-serif; font-size:16px; font-weight:700; text-align:left; color:'
    + v.buttonColor + '; background-color:' + v.buttonBg + '; border-width:0px; border-radius:3px;"'
    + ' form="sib-form" type="submit">' + BREVO_LOADER_SVG + 'Submit</button>'
    + '</div></div>'
    + '<input type="text" name="email_address_check" value="" class="input--hidden">'
    + '<input type="hidden" name="locale" value="en">'
    + '</form></div></div></div>';
}

/* Globals Brevo's main.js reads for its validation messages. */
function brevoSetGlobals() {
  const invalid = 'The information provided is invalid. Please review the field format and try again.';
  window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
  window.LOCALE = 'en';
  window.EMAIL_INVALID_MESSAGE = invalid;
  window.SMS_INVALID_MESSAGE = invalid;
  window.GENERIC_INVALID_MESSAGE = invalid;
  window.INVALID_NUMBER = invalid;
  window.REQUIRED_ERROR_MESSAGE = 'This field cannot be left blank. ';
  window.INVALID_DATE = 'Please enter a valid date';
  window.REQUIRED_MULTISELECT_MESSAGE = 'Please select at least 1 option';
  window.translation = {
    common: {
      selectedList: '{quantity} list selected',
      selectedLists: '{quantity} lists selected',
      selectedOption: '{quantity} selected',
      selectedOptions: '{quantity} selected',
    },
  };
  window.AUTOHIDE = Boolean(0);
}

Object.assign(window, { BREVO_FORMS, BREVO_BASE_CSS, brevoFormHTML, brevoSetGlobals });
