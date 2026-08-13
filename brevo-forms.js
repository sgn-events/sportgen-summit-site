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

/* Le telephone est stocke dans LANDLINE_NUMBER, rendu par le widget telephone de Brevo:
   d'ou le selecteur d'indicatif ci-dessous et les classes `sib-sms-*`, qui sont celles de
   Brevo et n'impliquent rien d'un envoi SMS.
   ATTENTION: tout champ passe par ce widget (SMS, LANDLINE_NUMBER, WHATSAPP) est unique au
   niveau du compte -- deux contacts ne peuvent pas partager un numero, la 2e soumission
   repond 400 "Phone number is already linked to an existing account." Un attribut texte
   rendu en input simple (PHONE) n'a pas cette contrainte, mais perd le drapeau. On ne peut
   pas avoir les deux; verifie le 2026-08-13, meme numero + deux emails.
   Ce bloc doit rester le miroir exact de ce que le formulaire Brevo attend: toute modif du
   champ cote Brevo (nom d'attribut compris) casse la soumission ici. */

/* Indicatifs pays, dans l'ordre de Brevo. Format "<indicatif> <ISO>". */
const BREVO_PHONE_COUNTRIES = ('93 AF,358 AX,355 AL,213 DZ,1684 AS,376 AD,244 AO,1264 AI,672 AQ,1268 AG,54 AR,374 AM,'
  + '297 AW,61 AU,43 AT,994 AZ,1242 BS,973 BH,880 BD,1246 BB,375 BY,32 BE,501 BZ,229 BJ,1441 BM,975 BT,591 BO,'
  + '599 BQ,387 BA,267 BW,47 BV,55 BR,246 IO,673 BN,359 BG,226 BF,257 BI,855 KH,237 CM,1 CA,34 IC,238 CV,1345 KY,'
  + '236 CF,34 EA,235 TD,56 CL,86 CN,61 CX,61 CC,57 CO,269 KM,242 CG,243 CD,682 CK,506 CR,225 CI,385 HR,53 CU,'
  + '599 CW,357 CY,420 CZ,45 DK,253 DJ,1767 DM,1809 DO,1829 DO,1849 DO,593 EC,20 EG,503 SV,240 GQ,291 ER,372 EE,'
  + '251 ET,500 FK,298 FO,679 FJ,358 FI,33 FR,594 GF,689 PF,262 TF,241 GA,220 GM,995 GE,49 DE,233 GH,350 GI,30 GR,'
  + '299 GL,1473 GD,590 GP,1671 GU,502 GT,44 GG,224 GN,245 GW,592 GY,509 HT,672 HM,379 VA,504 HN,852 HK,36 HU,'
  + '354 IS,91 IN,62 ID,98 IR,964 IQ,353 IE,44 IM,972 IL,39 IT,1876 JM,81 JP,44 JE,962 JO,7 KZ,254 KE,686 KI,'
  + '850 KP,82 KR,965 KW,996 KG,856 LA,371 LV,961 LB,266 LS,231 LR,218 LY,423 LI,370 LT,352 LU,853 MO,389 MK,'
  + '261 MG,265 MW,60 MY,960 MV,223 ML,356 MT,692 MH,596 MQ,222 MR,230 MU,262 YT,52 MX,691 FM,373 MD,377 MC,'
  + '976 MN,382 ME,1664 MS,212 MA,258 MZ,95 MM,264 NA,674 NR,977 NP,31 NL,687 NC,64 NZ,505 NI,227 NE,234 NG,'
  + '683 NU,672 NF,1670 MP,47 NO,968 OM,92 PK,680 PW,970 PS,507 PA,675 PG,595 PY,51 PE,63 PH,64 PN,48 PL,351 PT,'
  + '1787 PR,974 QA,383 XK,262 RE,40 RO,7 RU,250 RW,590 BL,290 SH,1869 KN,1758 LC,590 MF,508 PM,1784 VC,685 WS,'
  + '378 SM,239 ST,966 SA,221 SN,381 RS,248 SC,232 SL,65 SG,1721 SX,421 SK,386 SI,677 SB,252 SO,27 ZA,500 GS,'
  + '211 SS,34 ES,94 LK,249 SD,597 SR,47 SJ,268 SZ,46 SE,41 CH,963 SY,886 TW,992 TJ,255 TZ,66 TH,670 TL,228 TG,'
  + '690 TK,676 TO,1868 TT,216 TN,90 TR,993 TM,1649 TC,688 TV,256 UG,380 UA,971 AE,44 GB,1 US,246 UM,598 UY,'
  + '998 UZ,678 VU,58 VE,84 VN,1284 VG,1340 VI,681 WF,212 EH,967 YE,260 ZM,263 ZW').split(',');

/* Pays par defaut. C'est `data-country-code` sur `.sib-sms-input` qui le pilote: au chargement,
   main.js vide le wrapper, va chercher sa propre liste sur static.brevo.com/js/countries.json
   et selectionne l'entree dont le code ISO correspond. Le <select> ci-dessous ne sert donc que
   de repli si main.js ne se charge pas -- c'est ce que fait l'export Brevo, on le garde. */
const BREVO_PHONE_DEFAULT_ISO = 'FR';

function brevoPhoneField(v) {
  const options = BREVO_PHONE_COUNTRIES.map(function (c) {
    const parts = c.split(' ');
    const sel = parts[1] === BREVO_PHONE_DEFAULT_ISO ? ' selected' : '';
    return '<option value="+' + parts[0] + '"' + sel + '>+' + parts[0] + ' ' + parts[1] + '</option>';
  }).join('');
  return ''
    + '<div style="padding: 8px 0;">'
    + '<div class="sib-sms-field sib-form-block"><div class="form__entry entry_block"><div class="form__label-row ">'
    + '<label class="entry__label" style="font-weight: 700; text-align: left; font-family:Helvetica, sans-serif;'
    + ' font-size:16px; font-weight:700; text-align:left; color:' + v.labelColor + ';" for="LANDLINE_NUMBER"'
    + ' data-required="*">Mobile Phone Number</label>'
    + '<div class="sib-sms-input-wrapper" style="direction:ltr">'
    + '<div class="sib-sms-input" data-placeholder="" data-required="true" data-country-code="FR" data-value=""'
    + ' data-attributename="LANDLINE_NUMBER">'
    + '<div class="entry__field"><select class="input" name="LANDLINE_NUMBER__COUNTRY_CODE" data-required="true">'
    + options + '</select></div>'
    + '<div class="entry__field" style="width: 100%">'
    + '<input type="tel" class="input" id="LANDLINE_NUMBER" name="LANDLINE_NUMBER" autocomplete="off"'
    + ' placeholder="6 12 34 56 78" data-required="true" required /></div>'
    + '</div>'
    + '<div class="sib-sms-tooltip"><div class="sib-sms-tooltip__box">Enter your number without the leading 0:'
    + ' pick your country code on the left, then 6 to 19 digits.</div>'
    + '<span class="sib-sms-tooltip__icon">?</span></div>'
    + '</div></div>'
    + '<label class="entry__error entry__error--primary" style="' + brevoErrorStyle() + '"></label>'
    + '<label class="entry__error entry__error--secondary" style="' + brevoErrorStyle() + '"></label>'
    + '</div></div></div>';
}

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
    + brevoPhoneField(v)
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
