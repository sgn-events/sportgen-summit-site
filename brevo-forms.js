/* Brevo embedded sign-up forms — shared markup builder.
   Les quatre formulaires ont exactement les memes champs: seuls changent l'URL de soumission
   (donc la liste et les stats cote Brevo), la palette, et le PDF eventuellement delivre. Le
   markup est donc ecrit une fois ici, et chaque entree de BREVO_FORMS fournit le reste.
   Loaded as plain JS (no Babel): keep this file free of JSX.
   Rendered by site-BrevoForm.jsx, which also loads Brevo's stylesheet and main.js. */

/* Copy shared by all four forms — kept in one place so they stay in sync. Le message de
   succes ci-dessous n'est qu'un a-plat: Brevo renvoie le sien, propre a chaque formulaire. */
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

/* Palettes. Deux DA seulement, partagees par les quatre formulaires. */
const BREVO_THEMES = {
  /* SPORT[GEN] Summit — DA sombre */
  navy: {
    formBg: '#000519',
    containerBg: 'rgba(0,5,25,1)',
    borderColor: '#000519',
    labelColor: '#ffffff',
    textColor: '#ffffff',
    optInColor: '#ffffff',
    buttonBg: '#ffffff',
    buttonColor: '#000519',
  },
  /* [SGN] Invest — DA claire */
  invest: {
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

/* Un formulaire Brevo par usage: chacun a sa propre liste, donc ses propres stats, et son
   propre message de succes (defini cote Brevo). `action` est l'URL de soumission du
   formulaire — ne jamais les intervertir, elles encodent l'identite du formulaire.
   `theme` choisit la palette et la classe CSS `.brevo--<theme>` posee sur l'hote. */
const BREVO_FORMS = {
  /* index.html #/get-in-touch — liste "Get In Touch - Website" */
  'get-in-touch': {
    theme: 'navy',
    action: 'https://a3e44c04.sibforms.com/serve/MUIFAPgjI0xrGR3UlCDPkwXPowdyxzZ0GPd1Y5dsR33WdIsqlc-slV5cooVExoo1F8GBEiJIhY-vhuMEtVa4BBVu7WNHQT5nBfuOyMFmRymyJaj3ki8lScZe83zyD-_HPri4INbj68ZeWLTZ86_XRRfpsjDOccOXgtA5VPa9X6OywhZzO-VHDuw5frpIZpiE05s4gedX3q7S7_2iLw==',
  },
  /* index.html #/download-brochure — liste "Brochure SGN - Website" */
  'brochure-sgn': {
    theme: 'navy',
    action: 'https://a3e44c04.sibforms.com/serve/MUIFAOPMJR2FHXJVGQIZQwTkPaWXi3pB393xfZX6R_Uv6BRZw7KCOBPRj8eg7N58-jYvXFy0fi2u3IU662RrR4MKXb7EigN84zu54UYtEePCIkMEhK_PRkVFngfi1Qlt1AZ_KRaK0n6ilR96S97keqaKXmKr1u2vbBKjmBc6cm6MoL9tjsbmzVU4IqyYuvZ9kcFbIlT6vWOp5re-NQ==',
    pdf: 'assets/sgn-summit-2027-brochure.pdf',
  },
  /* sis.html #/get-in-touch — liste "Deck SGN Invest - Website" */
  'deck-invest': {
    theme: 'invest',
    action: 'https://a3e44c04.sibforms.com/serve/MUIFAMCpQown3MmzAelTKXyWGpuLk8t0BgflILobhF-GnbNkWfs_8OXeWfpB4IMdyvQ0Oh9WLxkH8Gm8q0L7lN48-HdkWsgXQj1WNcwwl_m7-Zzlr1butZ_PLmatv9JRItc5ZcYIJiRfHSXuV00KJlNNT0LNE_gMqsAXEJ0zMg4AQ9jA4THKSlBhQ7ZUrXZyPobVVFEekZmO_ARf4w==',
    pdf: 'assets/sgn-invest-2027-deck.pdf',
  },
  /* modale "2026 Attendee Snapshot" (page d'accueil) — liste "Attendee Snapshot - Website" */
  'attendee-snapshot': {
    theme: 'navy',
    action: 'https://a3e44c04.sibforms.com/serve/MUIFAOG03DtkyQWq7CripDVROBc8pg5CoKLa6khc5tbYOsU8e6XjczRYdZ46OTdmRwvtQ3X4XdBuboBvTL_s50p9IJhrWrTFQ5f-qDP81M2GIO8MTOMuIO_rxOAlCSWswQwBkHd0rIFvmi9k9vdpfPK93UheTUGPJPd8tEbsJujZPRiTXA15mqOISMn2lnlaPL5d8nVEee5dRCYxYA==',
    pdf: 'assets/sgn-2026-attendee-snapshot.pdf',
  },
};

/* Palette effective d'un formulaire: son theme, plus son `action`. */
function brevoVariant(key) {
  const form = BREVO_FORMS[key];
  if (!form) throw new Error('Formulaire Brevo inconnu: ' + key);
  return Object.assign({}, BREVO_THEMES[form.theme], form);
}

/* The <style> block Brevo asks you to put in <head>. Injected once by site-BrevoForm.jsx. */
const BREVO_BASE_CSS = [
  ':where(.sib-form-message-panel) { display: none; }',
  ':where(.sib-form-message-panel .sib-notification__icon) { width: 20px; height: 20px; }',
  '#sib-container input::placeholder, #sib-container textarea::placeholder {'
    + ' font-family: Helvetica, sans-serif; text-align: left; color: #c0ccda; }',
  '#sib-container a { text-decoration: underline; color: #ffb049; }',
  /* Structure du bloc telephone maison. Commun aux deux DA: seules les couleurs sont
     dans kit2.css / sis.css. Le <select> couvre toute la pastille en opacite 0, de sorte
     que le clic ouvre la liste native du systeme mais que l'affichage reste le notre. */
  '.brevo-phone { display: flex; align-items: stretch; gap: 8px; }',
  '.brevo-phone__country { position: relative; display: flex; align-items: center; gap: 8px;'
    + ' padding: 0 26px 0 10px; flex: 0 0 auto; }',
  '.brevo-phone__select { position: absolute; top: 0; left: 0; width: 100%; height: 100%;'
    + ' opacity: 0; cursor: pointer; border: 0; padding: 0; }',
  '.brevo-phone__country::after { content: ""; position: absolute; right: 10px; pointer-events: none;'
    + ' border: 4px solid transparent; border-top-color: currentColor; transform: translateY(2px);'
    + ' opacity: 0.6; }',
  '.brevo-phone__code { font-variant-numeric: tabular-nums; white-space: nowrap; }',
  '.brevo-phone__number { flex: 1 1 auto; min-width: 0; }',
  '.brevo-phone__number .input { width: 100%; }',
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

/* Le telephone est stocke dans l'attribut texte PHONE, et le selecteur de pays ci-dessous est
   le notre, pas celui de Brevo. C'est volontaire, et c'est la seule facon d'avoir les deux:
   tout champ passe par le widget telephone de Brevo (SMS, LANDLINE_NUMBER, WHATSAPP) est unique
   au niveau du compte -- la 2e soumission du meme numero repond 400 "Phone number is already
   linked to an existing account." (verifie le 2026-08-13, numero neuf + deux emails). Un attribut
   texte n'a pas cette contrainte, mais Brevo le rend alors en input nu, sans indicatif.
   Donc: on garde PHONE cote Brevo, et on reconstruit ici l'indicatif + le drapeau. Le drapeau
   reutilise le sprite `.sib-flag` de la feuille de style Brevo, deja chargee.
   Le <select> et le champ numero ne portent pas de `name`: ils ne sont pas envoyes. C'est
   l'input cache PHONE qui l'est, recompose a chaque frappe par brevoBindPhone(). Aucune
   dependance a l'ordre des handlers de Brevo au moment de la soumission. */

/* Pays: "<ISO>;<indicatif>;<nom>", dans l'ordre de Brevo (source: static.brevo.com/js/countries.json).
   L'ISO sert a la pastille drapeau (sprite .sib-flag de la CSS Brevo), l'indicatif est ce qu'on
   prefixe au numero avant de l'envoyer dans PHONE. */
const BREVO_PHONE_COUNTRIES = ('AF|+93|Afghanistan;AX|+358|Aland Islands;AL|+355|Albania;DZ|+213|Algeria;AS|+1684|American Samoa;'
  + 'AD|+376|Andorra;AO|+244|Angola;AI|+1264|Anguilla;AQ|+672|Antarctica;AG|+1268|Antigua and Barbuda;'
  + 'AR|+54|Argentina;AM|+374|Armenia;AW|+297|Aruba;AU|+61|Australia;AT|+43|Austria;AZ|+994|Azerbaijan;'
  + 'BS|+1242|Bahamas;BH|+973|Bahrain;BD|+880|Bangladesh;BB|+1246|Barbados;BY|+375|Belarus;BE|+32|Belgium;'
  + 'BZ|+501|Belize;BJ|+229|Benin;BM|+1441|Bermuda;BT|+975|Bhutan;BO|+591|Bolivia, Plurinational State of;'
  + 'BQ|+599|Bonaire, Sint Eustatius and Saba;BA|+387|Bosnia and Herzegovina;BW|+267|Botswana;'
  + 'BV|+47|Bouvet Island;BR|+55|Brazil;IO|+246|British Indian Ocean Territory;BN|+673|Brunei Darussalam;'
  + 'BG|+359|Bulgaria;BF|+226|Burkina Faso;BI|+257|Burundi;KH|+855|Cambodia;CM|+237|Cameroon;CA|+1|Canada;'
  + 'IC|+34|Canary Islands;CV|+238|Cape Verde;KY|+1345|Cayman Islands;CF|+236|Central African Republic;'
  + 'EA|+34|Ceuta and Melila;TD|+235|Chad;CL|+56|Chile;CN|+86|China;CX|+61|Christmas Island;'
  + 'CC|+61|Cocos (Keeling) Islands;CO|+57|Colombia;KM|+269|Comoros;CG|+242|Congo;'
  + 'CD|+243|Democratic Republic of the Congo;CK|+682|Cook Islands;CR|+506|Costa Rica;CI|+225|Cote d\'Ivoire;'
  + 'HR|+385|Croatia;CU|+53|Cuba;CW|+599|Curacao;CY|+357|Cyprus;CZ|+420|Czech Republic;DK|+45|Denmark;'
  + 'DJ|+253|Djibouti;DM|+1767|Dominica;DO|+1809|Dominican Republic;DO|+1829|Dominican Republic;'
  + 'DO|+1849|Dominican Republic;EC|+593|Ecuador;EG|+20|Egypt;SV|+503|El Salvador;GQ|+240|Equatorial Guinea;'
  + 'ER|+291|Eritrea;EE|+372|Estonia;ET|+251|Ethiopia;FK|+500|Falkland Islands (Malvinas);'
  + 'FO|+298|Faroe Islands;FJ|+679|Fiji;FI|+358|Finland;FR|+33|France;GF|+594|French Guiana;'
  + 'PF|+689|French Polynesia;TF|+262|French Southern Territories;GA|+241|Gabon;GM|+220|Gambia;'
  + 'GE|+995|Georgia;DE|+49|Germany;GH|+233|Ghana;GI|+350|Gibraltar;GR|+30|Greece;GL|+299|Greenland;'
  + 'GD|+1473|Grenada;GP|+590|Guadeloupe;GU|+1671|Guam;GT|+502|Guatemala;GG|+44|Guernsey;GN|+224|Guinea;'
  + 'GW|+245|Guinea-Bissau;GY|+592|Guyana;HT|+509|Haiti;HM|+672|Heard Island and McDonald Islands;'
  + 'VA|+379|Holy See (Vatican City State);HN|+504|Honduras;HK|+852|Hong Kong;HU|+36|Hungary;IS|+354|Iceland;'
  + 'IN|+91|India;ID|+62|Indonesia;IR|+98|Iran, Islamic Republic of;IQ|+964|Iraq;IE|+353|Ireland;'
  + 'IM|+44|Isle of Man;IL|+972|Israel;IT|+39|Italy;JM|+1876|Jamaica;JP|+81|Japan;JE|+44|Jersey;'
  + 'JO|+962|Jordan;KZ|+7|Kazakhstan;KE|+254|Kenya;KI|+686|Kiribati;'
  + 'KP|+850|Democratic People’s Republic of Korea;KR|+82|Republic of Korea;KW|+965|Kuwait;KG|+996|Kyrgyzstan;'
  + 'LA|+856|Lao People\'s Democratic Republic;LV|+371|Latvia;LB|+961|Lebanon;LS|+266|Lesotho;LR|+231|Liberia;'
  + 'LY|+218|Libya;LI|+423|Liechtenstein;LT|+370|Lithuania;LU|+352|Luxembourg;MO|+853|Macao;'
  + 'MK|+389|North Macedonia;MG|+261|Madagascar;MW|+265|Malawi;MY|+60|Malaysia;MV|+960|Maldives;ML|+223|Mali;'
  + 'MT|+356|Malta;MH|+692|Marshall Islands;MQ|+596|Martinique;MR|+222|Mauritania;MU|+230|Mauritius;'
  + 'YT|+262|Mayotte;MX|+52|Mexico;FM|+691|Micronesia, Federated States of;MD|+373|Republic of Moldova;'
  + 'MC|+377|Monaco;MN|+976|Mongolia;ME|+382|Montenegro;MS|+1664|Montserrat;MA|+212|Morocco;'
  + 'MZ|+258|Mozambique;MM|+95|Myanmar;NA|+264|Namibia;NR|+674|Nauru;NP|+977|Nepal;NL|+31|Netherlands;'
  + 'NC|+687|New Caledonia;NZ|+64|New Zealand;NI|+505|Nicaragua;NE|+227|Niger;NG|+234|Nigeria;NU|+683|Niue;'
  + 'NF|+672|Norfolk Island;MP|+1670|Northern Mariana Islands;NO|+47|Norway;OM|+968|Oman;PK|+92|Pakistan;'
  + 'PW|+680|Palau;PS|+970|State of Palestine;PA|+507|Panama;PG|+675|Papua New Guinea;PY|+595|Paraguay;'
  + 'PE|+51|Peru;PH|+63|Philippines;PN|+64|Pitcairn;PL|+48|Poland;PT|+351|Portugal;PR|+1787|Puerto Rico;'
  + 'QA|+974|Qatar;XK|+383|Republic of Kosovo;RE|+262|Reunion;RO|+40|Romania;RU|+7|Russian Federation;'
  + 'RW|+250|Rwanda;BL|+590|Saint Barthelemy;SH|+290|Saint Helena, Ascension and Tristan da Cunha;'
  + 'KN|+1869|Saint Kitts and Nevis;LC|+1758|Saint Lucia;MF|+590|Saint Martin (French part);'
  + 'PM|+508|Saint Pierre and Miquelon;VC|+1784|Saint Vincent and the Grenadines;WS|+685|Samoa;'
  + 'SM|+378|San Marino;ST|+239|Sao Tome and Principe;SA|+966|Saudi Arabia;SN|+221|Senegal;RS|+381|Serbia;'
  + 'SC|+248|Seychelles;SL|+232|Sierra Leone;SG|+65|Singapore;SX|+1721|Sint Maarten (Dutch part);'
  + 'SK|+421|Slovakia;SI|+386|Slovenia;SB|+677|Solomon Islands;SO|+252|Somalia;ZA|+27|South Africa;'
  + 'GS|+500|South Georgia and the South Sandwich Islands;SS|+211|South Sudan;ES|+34|Spain;LK|+94|Sri Lanka;'
  + 'SD|+249|Sudan;SR|+597|Suriname;SJ|+47|Svalbard and Jan Mayen;SZ|+268|Swaziland;SE|+46|Sweden;'
  + 'CH|+41|Switzerland;SY|+963|Syrian Arab Republic;TW|+886|Taiwan, Province of China;TJ|+992|Tajikistan;'
  + 'TZ|+255|Tanzania, United Republic of;TH|+66|Thailand;TL|+670|Timor-Leste;TG|+228|Togo;TK|+690|Tokelau;'
  + 'TO|+676|Tonga;TT|+1868|Trinidad and Tobago;TN|+216|Tunisia;TR|+90|Turkey;TM|+993|Turkmenistan;'
  + 'TC|+1649|Turks and Caicos Islands;TV|+688|Tuvalu;UG|+256|Uganda;UA|+380|Ukraine;'
  + 'AE|+971|United Arab Emirates;GB|+44|United Kingdom;US|+1|United States;'
  + 'UM|+246|United States Minor Outlying Islands;UY|+598|Uruguay;UZ|+998|Uzbekistan;VU|+678|Vanuatu;'
  + 'VE|+58|Venezuela, Bolivarian Republic of;VN|+84|Viet Nam;VG|+1284|Virgin Islands, British;'
  + 'VI|+1340|Virgin Islands, U.S.;WF|+681|Wallis and Futuna;EH|+212|Western Sahara;YE|+967|Yemen;'
  + 'ZM|+260|Zambia;ZW|+263|Zimbabwe').split(';');

const BREVO_PHONE_DEFAULT_ISO = 'FR';

function brevoPhoneField(v) {
  const options = BREVO_PHONE_COUNTRIES.map(function (c) {
    const p = c.split('|');
    const sel = p[0] === BREVO_PHONE_DEFAULT_ISO ? ' selected' : '';
    return '<option value="' + p[0] + '" data-code="' + p[1] + '"' + sel + '>'
      + p[2] + ' (' + p[1] + ')</option>';
  }).join('');
  return ''
    + '<div style="padding: 8px 0;">'
    + '<div class="sib-input sib-form-block"><div class="form__entry entry_block"><div class="form__label-row ">'
    + '<label class="entry__label" style="font-weight: 700; text-align: left; font-family:Helvetica, sans-serif;'
    + ' font-size:16px; font-weight:700; text-align:left; color:' + v.labelColor + ';" for="brevo-phone-number"'
    + ' data-required="*">Mobile Phone Number</label>'
    + '<div class="brevo-phone">'
    + '<div class="entry__field brevo-phone__country">'
    + '<span class="sib-flag sib-flag-fr brevo-phone__flag" aria-hidden="true"></span>'
    + '<select class="brevo-phone__select" id="brevo-phone-country" aria-label="Country calling code">'
    + options + '</select>'
    + '<span class="brevo-phone__code" aria-hidden="true">+33</span>'
    + '</div>'
    + '<div class="entry__field brevo-phone__number">'
    + '<input type="tel" class="input" id="brevo-phone-number" autocomplete="tel-national"'
    + ' inputmode="tel" maxlength="20" placeholder="6 12 34 56 78" data-required="true" required /></div>'
    + '</div>'
    + '<input type="hidden" name="PHONE" id="PHONE" value="" />'
    + '</div>'
    + '<label class="entry__error entry__error--primary" style="' + brevoErrorStyle() + '"></label>'
    + '</div></div></div>';
}

/* Recompose la valeur envoyee: "<indicatif> <numero>", par ex "+33 612345678".
   Appele a chaque frappe et a chaque changement de pays, donc la valeur est toujours a jour
   quel que soit le moment ou Brevo serialise le formulaire. */
function brevoBindPhone(host) {
  const sel = host.querySelector('.brevo-phone__select');
  const num = host.querySelector('#brevo-phone-number');
  const out = host.querySelector('input[name="PHONE"]');
  const flag = host.querySelector('.brevo-phone__flag');
  const code = host.querySelector('.brevo-phone__code');
  if (!sel || !num || !out) return;
  const sync = function () {
    const opt = sel.options[sel.selectedIndex];
    const dial = opt ? opt.getAttribute('data-code') : '';
    flag.className = 'sib-flag sib-flag-' + sel.value.toLowerCase() + ' brevo-phone__flag';
    code.textContent = dial;
    const digits = num.value.trim();
    /* Un champ rempli d'espaces passerait la validation "non vide" de Brevo tout en laissant
       PHONE vide -> 400 sur un champ invisible, donc message generique. On le vide. */
    if (!digits && num.value) num.value = '';
    out.value = digits ? dial + ' ' + digits : '';
  };
  sel.addEventListener('change', sync);
  num.addEventListener('input', sync);
  sync();
}

function brevoMessagePanel(id, text, colors) {
  return ''
    + '<div id="' + id + '" class="sib-form-message-panel" style="font-family:Helvetica, sans-serif; font-size:16px;'
    + ' text-align:left; color:' + colors.fg + '; background-color:' + colors.bg + '; border-color:' + colors.border
    + '; border-radius:3px; max-width:540px;">'
    + '<div class="sib-form-message-panel__text sib-form-message-panel__text--center">'
    + '<span class="sib-form-message-panel__inner-text">' + text + '</span></div></div>';
}

/* Build the full markup for one form (cle de BREVO_FORMS). */
function brevoFormHTML(formKey) {
  const v = brevoVariant(formKey);
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

Object.assign(window, {
  BREVO_FORMS, BREVO_THEMES, BREVO_BASE_CSS, brevoFormHTML, brevoSetGlobals, brevoBindPhone, brevoVariant,
});
