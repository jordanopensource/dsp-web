export default function({ app }, inject) {
  const dir = () => app.i18n.locales.find((x) => x.code === app.i18n.locale)?.dir;
  const lang = () => app.i18n.locales.find((x) => x.code === app.i18n.locale)?.code;
  inject('dir', dir);
  inject('lang', lang);
}
